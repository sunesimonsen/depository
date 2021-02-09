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
    const instanceProps = this._createInstanceProps();
    this._instance = new Constructor(instanceProps);
    this._instance.dispatch = store.dispatch.bind(store);
    this._instance.props = instanceProps;
    const paths = this._instance.data && this._instance.data(instanceProps);
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

  _createInstanceProps() {
    return {
      ...this._data,
      ...this._props,
      children: this._children,
    };
  }

  _renderInstance(nextProps) {
    this._instance.props = nextProps;
    return this._instance.render(nextProps);
  }

  _render() {
    const nextProps = this._createInstanceProps();
    const prevProps = this._instance.props;
    if (
      !this._instance.shouldUpdate ||
      this._instance.shouldUpdate(prevProps)
    ) {
      const updatedTree = this._renderInstance(nextProps);
      this._vdom = update(updatedTree, this._vdom);
      if (this._instance.didUpdate) {
        this._instance.didUpdate(prevProps);
      }
    }
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

    const nextProps = this._createInstanceProps();
    const tree = this._renderInstance(nextProps);
    this._vdom = create(tree, this._store);

    const dom = mount(this._vdom);

    this._instance.didMount && this._instance.didMount();

    return dom;
  }

  _insertBefore(dom) {
    const anchor = isArray(this._vdom) ? this._vdom[0] : this._vdom;
    anchor._insertBefore(dom);
  }

  _unmount() {
    this._instance.willUnmount && this._instance.willUnmount();
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
    for (const p in this._props) {
      if (!(p in props) && name !== "#") {
        this._dom.removeAttribute(name);
      }
    }

    for (const p in props) {
      const value = props[p];
      if (p !== "#" && this._props[p] !== value) {
        if (p === "ref") {
          value(this._dom);
        } else {
          this._dom.setAttribute(p, value);
        }
      }
    }

    this._props = props;
  }

  _updateChildren(children) {
    this._children = update(children, this._children, this._store);
  }

  _mount() {
    this._dom = document.createElement(this._type);

    for (const p in this._props) {
      if (p !== "#" && p !== "ref") {
        this._dom.setAttribute(p, this._props[p]);
      }
    }

    appendChildren(this._dom, mount(this._children));

    if (this._props.ref) {
      this._props.ref(this._dom);
    }

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

const getKey = (value) => value._props["#"];
const hasKey = (value) => value._props && "#" in value._props;
const similar = (a, b) => a._type === b._type && getKey(a) === getKey(b);

const updateKeyedArray = (updatedTree, vdom, store) => {
  const updatedByKey = new Map();
  updatedTree.forEach((child) => {
    updatedByKey.set(getKey(child), child);
  });

  vdom.forEach((oldChild, i) => {
    const key = getKey(oldChild);
    if (updatedByKey.has(key)) {
      const newChild = updatedByKey.get(key);
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
