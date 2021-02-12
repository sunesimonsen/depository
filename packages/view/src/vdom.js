import htm from "htm";
import { arrayDiff, InsertDiff, MoveDiff, RemoveDiff } from "./arrayDiff.js";

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
    if (!this._renderTimer) {
      this._renderTimer = setTimeout(() => {
        this._render();
        this._renderTimer = null;
      }, 0);
    }
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
    this._renderTimer = null;
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    unmount(this._vdom);
  }
}

const propWithoutType = (p) => p.slice(1);

class PrimitiveComponent {
  constructor(type, props, children, store) {
    this._type = type;
    this._props = props;
    this._children = children && create(children, store);
    this._store = store;
  }

  _updateProps(props) {
    for (const p in this._props) {
      if (p !== "#" && p !== "ref" && !(p in props)) {
        if (p[0] === "@") {
          this._dom.removeEventListener(propWithoutType(p), this._props[p]);
        } else {
          this._dom.removeAttribute(p);
        }
      }
    }

    for (const p in props) {
      const prevValue = this._props[p];
      const value = props[p];

      if (p !== "#" && p !== "ref" && prevValue !== value) {
        if (p[0] === "@") {
          this._dom.removeEventListener(propWithoutType(p), prevValue);
          this._dom.addEventListener(propWithoutType(p), value);
        } else if (value === true) {
          this._dom.setAttribute(p, "");
        } else if (value === false) {
          this._dom.removeAttribute(p);
        } else {
          this._dom.setAttribute(p, value);
        }
      }
    }

    if (props.ref && this._props.ref !== props.ref) {
      props.ref(this._dom);
    }

    this._props = props;
  }

  _updateChildren(children) {
    if (children === null) {
      unmount(this._children);
      this.children = children;
    } else if (this._children === null) {
      this._children = create(children, this._store);
      appendChildren(this._dom, mount(this._children));
    } else {
      this._children = update(children, this._children, this._store);
    }
  }

  _mount() {
    this._dom = document.createElement(this._type);

    for (const p in this._props) {
      if (p !== "#" && p !== "ref") {
        const value = this._props[p];
        if (p[0] === "@") {
          this._dom.addEventListener(propWithoutType(p), value);
        } else if (value === true) {
          this._dom.setAttribute(p, "");
        } else if (value === false) {
          this._dom.removeAttribute(p);
        } else {
          this._dom.setAttribute(p, value);
        }
      }
    }

    if (this._children) {
      appendChildren(this._dom, mount(this._children));
    }

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
    this._type = "text";
    this._value = value;
  }

  _mount() {
    this._dom = document.createTextNode(this._value);
    return this._dom;
  }

  _updateText(value) {
    if (this._value !== value) {
      this._dom.textContent = value;
      this._value = value;
    }
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
  const container = vdom[0]._dom.parentNode;

  diff.forEach((update) => {
    if (update instanceof InsertDiff) {
      const anchor = vdom[update._index];
      const newValues = update._values.map((child) => create(child, store));
      const dom = mount(newValues);
      if (anchor) {
        anchor._insertBefore(dom);
      } else {
        appendChildren(container, dom);
      }
      vdom.splice(update._index, 0, ...newValues);
    } else if (update instanceof RemoveDiff) {
      const candidates = vdom.splice(update._index, update._howMany);
      unmount(candidates);
    } else if (update instanceof MoveDiff) {
      const anchor = vdom[update._to];
      const candidates = vdom.splice(update._from, update._howMany);
      const dom = candidates.map((c) => c._dom);
      if (anchor) {
        anchor._insertBefore(dom);
      } else {
        appendChildren(container, dom);
      }
      vdom.splice(update._to, 0, ...candidates);
    }
  });

  return vdom;
};

const updateArray = (updatedTree, vdom, store) => {
  if (hasKey(updatedTree[0]) && hasKey(vdom[0])) {
    return updateKeyedArray(updatedTree, vdom, store);
  }

  if (updatedTree.length > 0 && updatedTree.length === vdom.length) {
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
  if (
    vdom._type === "text" &&
    (typeof updatedTree === "string" || typeof updatedTree === "number")
  ) {
    vdom._updateText(updatedTree);
    return vdom;
  } else if (
    updatedTree &&
    updatedTree._type &&
    updatedTree._type === vdom._type
  ) {
    vdom._updateProps(updatedTree._props);
    vdom._updateChildren(updatedTree._children);
    return vdom;
  } else if (isArray(updatedTree) && updatedTree.length > 0 && isArray(vdom)) {
    return updateArray(updatedTree, vdom, store);
  } else {
    const newVdom = create(updatedTree, store);
    const anchor = isArray(vdom) ? vdom[0] : vdom;
    anchor._insertBefore(mount(newVdom));
    unmount(vdom);
    return newVdom;
  }
};

export const render = (value, store, container = document.body) => {
  const vdom = create(value, store);
  appendChildren(container, mount(vdom));
};

const h = (type, props, ...children) => {
  return {
    _type: type,
    _props: props || {},
    _children: children.length > 0 ? children.flat() : null,
  };
};

export const html = htm.bind(h);
