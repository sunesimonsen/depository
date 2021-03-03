import { arrayDiff, InsertDiff, MoveDiff, RemoveDiff } from "./arrayDiff.js";

const isArray = (v) => Array.isArray(v);
const getAnchor = (dom) => (isArray(dom) ? dom[0] : dom);

export const mount = (vdom) => {
  if (isArray(vdom)) {
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
      appendChildren(container, child);
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

const getDom = (vdom) => (isArray(vdom) ? vdom.map((c) => c._dom) : vdom._dom);

function defaultShouldUpdate(nextProps) {
  if (nextProps.children !== this.props.children) return true;

  const prevKeys = Object.keys(nextProps);
  const keys = Object.keys(this.props);
  if (prevKeys.length !== keys.length) return true;

  for (let i = 0; i < prevKeys.length; i++) {
    const key = prevKeys[i];
    if (nextProps[key] !== this.props[key]) return true;
  }

  return false;
}

class UserComponent {
  constructor(type, props, children, store, errorHandler, isSvg) {
    const Constructor = type;
    this._type = type;
    this._props = props;
    this._children = children;
    this._store = store;
    this._isSvg = isSvg;
    const instanceProps = this._createInstanceProps();
    const instance = new Constructor(instanceProps);
    this._instance = instance;
    this._errorHandler = errorHandler;
    instance.dispatch = store.dispatch.bind(store);
    instance.props = instanceProps;
    instance.shouldUpdate = instance.shouldUpdate || defaultShouldUpdate;
    const paths = instance.data && instance.data(instanceProps);
    if (paths) {
      this._observable = store.observe(paths);
    }
  }

  get _dom() {
    return getDom(this._vdom);
  }

  _enqueueRender() {
    if (!this._renderTimer) {
      this._renderTimer = requestAnimationFrame(() => {
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

  _render() {
    const instance = this._instance;

    try {
      const nextProps = this._createInstanceProps();
      const shouldUpdate = instance.shouldUpdate(nextProps);

      if (shouldUpdate) {
        const prevProps = instance.props;
        instance.props = nextProps;
        const updatedTree = instance.render(nextProps);

        this._vdom = update(
          updatedTree,
          this._vdom,
          this._store,
          instance.didCatch || this._errorHandler,
          this._isSvg
        );

        if (instance.didUpdate) {
          instance.didUpdate(prevProps);
        }
      }
    } catch (e) {
      this._errorHandler(e);
    }
  }

  _updateProps(props) {
    this._props = props;
    this._enqueueRender();
  }

  _updateChildren(children) {
    if (this._children !== children) {
      this._children = children;
      this._enqueueRender();
    }
  }

  _mount() {
    try {
      const instance = this._instance;

      if (this._observable) {
        this._data = this._observable.value;
      }

      instance.props = this._createInstanceProps();

      instance.willMount && instance.willMount();

      if (this._observable) {
        this._subscription = this._observable.subscribe((data) => {
          this._data = data;
          this._enqueueRender();
        });

        this._data = this._observable.value;
      }

      const nextProps = this._createInstanceProps();
      instance.props = nextProps;

      const tree = instance.render(nextProps);

      this._vdom = create(
        tree,
        this._store,
        instance.didCatch || this._errorHandler,
        this._isSvg
      );

      const dom = mount(this._vdom);

      instance.didMount && this._instance.didMount();

      return dom;
    } catch (e) {
      this._errorHandler(e);
      this._vdom = new Hidden();
      return mount(this._vdom);
    }
  }

  _insertBefore(dom) {
    getAnchor(this._vdom)._insertBefore(dom);
  }

  _unmount() {
    const instance = this._instance;

    try {
      instance.willUnmount && instance.willUnmount();
    } catch (e) {
      this._errorHandler(e);
    }
    cancelAnimationFrame(this._renderTimer);
    this._renderTimer = null;
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    unmount(this._vdom);

    try {
      instance.didUnmount && instance.didUnmount();
    } catch (e) {
      this._errorHandler(e);
    }
  }
}

const propWithoutType = (p) => p.slice(1);

const setStyles = (style, value, prevValue) => {
  if (typeof value === "string") {
    style.cssText = value;
  } else {
    const hasPrevValue = typeof prevValue !== "string" && prevValue;
    style.cssText = "";

    for (const name in value) {
      if (!hasPrevValue || value[name] !== prevValue[name]) {
        style[name] = value[name];
      }
    }
  }
};

const removeStyles = (style, value) => {
  if (typeof value === "string") {
    style.cssText = "";
  } else {
    for (const name in value) {
      style[name] = "";
    }
  }
};

const captureRegex = /Capture$/;

const isCapturePhase = (name) => captureRegex.test(name);
const nameWithoutCapture = (name) => name.replace(captureRegex, "");

const addEventListener = (dom, name, listener) => {
  if (listener) {
    dom.addEventListener(
      nameWithoutCapture(propWithoutType(name)),
      listener,
      isCapturePhase(name)
    );
  }
};

const removeEventListener = (dom, name, listener) => {
  dom.removeEventListener(
    nameWithoutCapture(propWithoutType(name)),
    listener,
    isCapturePhase(name)
  );
};

class PrimitiveComponent {
  constructor(type, props, children, store, errorHandler, isSvg) {
    this._type = type;
    this._props = props;
    this._errorHandler = errorHandler;
    this._isSvg = isSvg || type === "svg";
    this._children =
      children && create(children, store, this._errorHandler, this._isSvg);
    this._store = store;
  }

  _updateProps(props) {
    for (const p in this._props) {
      if (p !== "#" && p !== "ref" && !(p in props)) {
        const value = this._props[p];
        if (p[0] === "@") {
          removeEventListener(this._dom, p, value);
        } else if (p[0] !== ".") {
          if (p === "style") {
            removeStyles(this._dom.style, this._props[p]);
          }
          this._dom.removeAttribute(p);
        }
      }
    }

    for (const p in props) {
      const prevValue = this._props[p];
      const value = props[p];

      if (p !== "#" && p !== "ref" && prevValue !== value) {
        if (p[0] === "@") {
          removeEventListener(this._dom, p, prevValue);
          addEventListener(this._dom, p, value);
        } else if (p[0] === ".") {
          this._dom[propWithoutType(p)] = value;
        } else if (p === "style") {
          setStyles(this._dom.style, value, prevValue);
        } else if (value === true) {
          this._dom.setAttribute(p, "");
        } else if (!value) {
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
    if (this._children !== children) {
      if (children === null) {
        unmount(this._children);
        this._children = children;
      } else if (this._children === null) {
        this._children = create(
          children,
          this._store,
          this._errorHandler,
          this._isSvg
        );
        appendChildren(this._dom, mount(this._children));
      } else {
        this._children = update(
          children,
          this._children,
          this._store,
          this._errorHandler,
          this._isSvg
        );
      }
    }
  }

  _mount() {
    if (this._isSvg) {
      this._dom = document.createElementNS(
        "http://www.w3.org/2000/svg",
        this._type
      );
    } else {
      this._dom = document.createElement(this._type);
    }

    for (const p in this._props) {
      if (p !== "#" && p !== "ref") {
        const value = this._props[p];
        if (p[0] === "@") {
          addEventListener(this._dom, p, value);
        } else if (p[0] === ".") {
          this._dom[propWithoutType(p)] = value;
        } else if (p === "style") {
          setStyles(this._dom.style, value);
        } else if (value === true) {
          this._dom.setAttribute(p, "");
        } else if (value) {
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

class PortalComponent extends Hidden {
  constructor(
    type,
    { target = document.body },
    children,
    store,
    errorHandler,
    isSvg
  ) {
    super();
    this._type = type;
    this._errorHandler = errorHandler;
    this._isSvg = isSvg || type === "svg";
    this._children =
      children && create(children, store, this._errorHandler, this._isSvg);
    this._target = target;
    this._store = store;
  }

  _updateProps({ target = document.body }) {
    if (this._target !== target) {
      // Move DOM tree
      this._target = target;
      appendChildren(target, getDom(this._children));
    }
  }

  _updateChildren(children) {
    this._children = update(
      children,
      this._children,
      this._store,
      this._errorHandler,
      this._isSvg
    );
  }

  _mount() {
    if (this._children) {
      appendChildren(this._target, mount(this._children));
    }

    return super._mount();
  }

  _unmount() {
    unmount(this._children);
    super._unmount();
  }
}

export const create = (value, store, errorHandler, isSvg) => {
  if (value == null || value === false || (isArray(value) && !value.length)) {
    return new Hidden();
  }

  if (isArray(value)) {
    return value.map((item) => create(item, store, errorHandler, isSvg));
  }

  if (typeof value._type === "function") {
    try {
      return new UserComponent(
        value._type,
        value._props,
        value._children,
        store,
        errorHandler,
        isSvg
      );
    } catch (e) {
      errorHandler(e);
      return new Hidden();
    }
  }

  if (typeof value === "object") {
    if (value._type === "portal") {
      return new PortalComponent(
        value._type,
        value._props,
        value._children,
        store,
        errorHandler,
        isSvg
      );
    }

    return new PrimitiveComponent(
      value._type,
      value._props,
      value._children,
      store,
      errorHandler,
      isSvg
    );
  }

  return new Text(String(value));
};

const getKey = (value) => value._props["#"];
const hasKey = (value) => value && value._props && "#" in value._props;
const similar = (a, b) => a._type === b._type && getKey(a) === getKey(b);

const updateKeyedArray = (updatedTree, vdom, store, errorHandler, isSvg) => {
  const updatedByKey = new Map();
  updatedTree.forEach((child) => {
    updatedByKey.set(getKey(child), child);
  });

  vdom.forEach((oldChild, i) => {
    const key = getKey(oldChild);
    if (updatedByKey.has(key)) {
      const newChild = updatedByKey.get(key);
      update(newChild, oldChild, store, errorHandler, isSvg);
    }
  });

  const diff = arrayDiff(vdom, updatedTree, similar);

  const container = getAnchor(vdom[0]._dom).parentNode;
  const insertBefore = (dom, anchor) => {
    if (anchor) {
      anchor._insertBefore(dom);
    } else {
      appendChildren(container, dom);
    }
  };

  if (!diff.length) {
    return vdom;
  }

  diff.forEach((update) => {
    if (update instanceof InsertDiff) {
      const anchor = vdom[update._index];
      const newValues = update._values.map((child) =>
        create(child, store, errorHandler, isSvg)
      );
      const dom = mount(newValues);
      insertBefore(dom, anchor);
      vdom.splice(update._index, 0, ...newValues);
    } else if (update instanceof RemoveDiff) {
      const candidates = vdom.splice(update._index, update._howMany);
      unmount(candidates);
    } else if (update instanceof MoveDiff) {
      const anchor = vdom[update._to];
      const candidates = vdom.splice(update._from, update._howMany);
      const dom = candidates.map((c) => c._dom);
      insertBefore(dom, anchor);
      vdom.splice(update._to, 0, ...candidates);
    }
  });

  return vdom;
};

const updateArray = (updatedTree, vdom, store, errorHandler, isSvg) => {
  if (hasKey(updatedTree[0]) && hasKey(vdom[0])) {
    return updateKeyedArray(updatedTree, vdom, store, errorHandler, isSvg);
  }

  if (updatedTree.length && updatedTree.length === vdom.length) {
    for (let i = 0; i < updatedTree.length; i++) {
      vdom[i] = update(updatedTree[i], vdom[i], store, errorHandler, isSvg);
    }
    return vdom;
  }

  const newVdom = create(updatedTree, store, errorHandler, isSvg);
  vdom[0]._insertBefore(mount(newVdom));
  unmount(vdom);
  return newVdom;
};

export const update = (updatedTree, vdom, store, errorHandler, isSvg) => {
  if (
    vdom._type === "text" &&
    (typeof updatedTree === "string" || typeof updatedTree === "number")
  ) {
    vdom._updateText(updatedTree);
    return vdom;
  }

  if (updatedTree && updatedTree._type && updatedTree._type === vdom._type) {
    vdom._updateProps(updatedTree._props);
    vdom._updateChildren(updatedTree._children);
    return vdom;
  }

  if (isArray(updatedTree) && updatedTree.length && isArray(vdom)) {
    return updateArray(updatedTree, vdom, store);
  }

  const newVdom = create(updatedTree, store, errorHandler, isSvg);
  getAnchor(vdom)._insertBefore(mount(newVdom));
  unmount(vdom);
  return newVdom;
};

const reThrow = (e) => {
  throw e;
};

export const render = (value, store, container = document.body) => {
  const vdom = create(value, store, reThrow, false);
  appendChildren(container, mount(vdom));
};

export const h = (type, props, ...children) => {
  return {
    _type: type,
    _props: props || {},
    _children: children.length ? children.flat() : null,
  };
};
