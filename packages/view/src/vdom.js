import htm from "htm";
import arrayDiff from "./arrayDiff.cjs";

const isArray = (v) => Array.isArray(v);

export const mount = (vdom) => {
  if (Array.isArray(vdom)) {
    return vdom.flatMap(mount);
  } else {
    return vdom._mount();
  }
};

const unmount = (vdom) => {
  if (isArray(vdom)) {
    vdom.map(unmount);
  } else if (vdom) {
    vdom._unmount();
  }
};

const appendChildren = (container, children) => {
  if (isArray(children)) {
    children.forEach((child) => {
      container.appendChild(child);
    });
  } else {
    container.appendChild(children);
  }
};

const insertBefore = (dom, referenceNode) => {
  if (isArray(dom)) {
    dom.forEach((node) => {
      insertBefore(node, referenceNode);
    });
  } else {
    referenceNode.parentNode.insertBefore(dom, referenceNode);
  }
};

const isFunction = (value) => typeof value === "function";

class UserComponent {
  constructor(type, props, children, store) {
    const Constructor = type;
    this._type = type;
    this._props = props;
    this._children = children;
    this._store = store;
    this._instance = new Constructor(props, children);
    const paths = this._instance.data;
    if (paths) {
      this._observable = store.observe(paths);
    }
  }

  get _dom() {
    return isArray(this._vdom)
      ? this._vdom.map((c) => c._dom)
      : this._vdom._dom;
  }

  _enqueueRender() {
    clearTimeout(this._renderTimer);
    this._renderTimer = setTimeout(() => {
      this._render();
    }, 0);
  }

  _renderInstance() {
    return this._instance.render({
      ...this._data,
      ...this._props,
      children: this._children,
    });
  }

  _render() {
    const updatedTree = this._renderInstance();
    this._vdom = update(updatedTree, this._vdom);
  }

  _updateProps(props) {
    this._props = props;
    this._enqueueRender();
  }

  _updateChildren(children) {
    this._children = children;
    this._enqueueRender();
  }

  _mount() {
    if (this._observable) {
      this._subscription = this._observable.subscribe((data) => {
        this._data = data;
        this._enqueueRender();
      });

      this._data = this._observable.value;
    }

    const tree = this._renderInstance();
    this._vdom = create(tree, this._store);

    return mount(this._vdom);
  }

  _insertBefore(dom) {
    const anchor = isArray(this._vdom) ? this._vdom[0] : this._vdom;
    anchor._insertBefore(dom);
  }

  _unmount() {
    clearTimeout(this._renderTimer);
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    unmount(this._vdom);
  }
}

class PrimitiveComponent {
  constructor(type, props, children, store) {
    this._type = type;
    this._props = props;
    this._children = create(children, store);
    this._store = store;
  }

  _updateProps(props) {
    Object.keys(this._props).forEach((name) => {
      if (!(name in this._props) && name !== "key") {
        this._dom.removeAttribute(name);
      }
    });

    Object.entries(props).forEach(([name, value]) => {
      if (name !== "key" && this._props[name] !== value) {
        this._dom.setAttribute(name, value);
      }
    });

    this._props = props;
  }

  _updateChildren(children) {
    this._children = update(children, this._children);
  }

  _mount() {
    this._dom = document.createElement(this._type);

    Object.entries(this._props).forEach(([name, value]) => {
      if (name !== "key") {
        this._dom.setAttribute(name, value);
      }
    });

    appendChildren(this._dom, mount(this._children));

    return this._dom;
  }

  _insertBefore(dom) {
    insertBefore(dom, this._dom);
  }

  _unmount() {
    unmount(this._children);
    this._dom.remove();
  }
}

class Text {
  constructor(value) {
    this.value = value;
  }

  _mount() {
    this._dom = document.createTextNode(this.value);
    return this._dom;
  }

  _insertBefore(dom) {
    insertBefore(dom, this._dom);
  }

  _unmount() {
    this._dom.remove();
  }
}

class Hidden {
  _mount() {
    this._dom = document.createComment("hidden");
    return this._dom;
  }

  _insertBefore(dom) {
    insertBefore(dom, this._dom);
  }

  _unmount() {
    this._dom.remove();
  }
}

export const create = (value, store) => {
  if (
    value == null ||
    value === false ||
    (isArray(value) && value.length === 0)
  ) {
    return new Hidden();
  } else if (isArray(value)) {
    return value.map((item) => create(item, store));
  } else if (isFunction(value._type)) {
    return new UserComponent(value._type, value._props, value._children, store);
  } else if (typeof value === "object") {
    return new PrimitiveComponent(
      value._type,
      value._props,
      value._children,
      store
    );
  } else {
    return new Text(String(value));
  }
};

const hasKey = (value) => value && value._props && "key" in value._props;

const similar = (a, b) => a._type === b._type && a._props.key === b._props.key;

const updateKeyedArray = (updatedTree, vdom, store) => {
  const updatedByKey = new Map();
  updatedTree.forEach((child) => {
    updatedByKey.set(child._props.key, child);
  });

  vdom.forEach((oldChild, i) => {
    if (updatedByKey.has(oldChild._props.key)) {
      const newChild = updatedByKey.get(oldChild._props.key);
      update(newChild, oldChild, store);
    }
  });

  const diff = arrayDiff(vdom, updatedTree, similar);

  diff.forEach((update) => {
    if (update instanceof arrayDiff.InsertDiff) {
      const anchor = vdom[update.index];
      const newValues = update.values.map((child) => create(child, store));
      const dom = mount(newValues);
      anchor._insertBefore(dom);
      vdom.splice(update.index, 0, ...newValues);
    } else if (update instanceof arrayDiff.RemoveDiff) {
      const candidates = vdom.splice(update.index, update.howMany);
      candidates.forEach((candidate) => {
        unmount(candidate);
      });
    } else if (update instanceof arrayDiff.MoveDiff) {
      const anchor = vdom[update.to];
      const candidates = vdom.splice(update.from, update.howMany);
      candidates.forEach((candidate) => {
        anchor._insertBefore(candidate._dom);
      });
      vdom.splice(update.to, 0, ...candidates);
    }
  });

  return vdom;
};

const updateArray = (updatedTree, vdom, store) => {
  if (hasKey(updatedTree[0]) && hasKey(vdom[0])) {
    return updateKeyedArray(updatedTree, vdom, store);
  }

  if (updatedTree.length === vdom.length) {
    for (let i = 0; i < updatedTree.length; i++) {
      update(updatedTree[i], vdom[i], store);
    }
    return vdom;
  }

  const newVdom = create(updatedTree, store);
  vdom[0]._insertBefore(mount(newVdom));
  unmount(vdom);
  return newVdom;
};

export const update = (updatedTree, vdom, store) => {
  if (updatedTree && updatedTree._type && updatedTree._type === vdom._type) {
    vdom._updateProps(updatedTree._props);
    vdom._updateChildren(updatedTree._children);
    return vdom;
  } else if (isArray(updatedTree) && updatedTree.length > 0 && isArray(vdom)) {
    return updateArray(updatedTree, vdom, store);
  } else {
    const newVdom = create(updatedTree, store);
    vdom._insertBefore(mount(newVdom));
    unmount(vdom);
    return newVdom;
  }
};

export const render = (value, store, container = document.body) => {
  const vdom = create(value, store);
  appendChildren(container, mount(vdom));
};

const h = (type, props, ...children) => ({
  _type: type,
  _props: props || {},
  _children: children.flat(),
});

export const html = htm.bind(h);
