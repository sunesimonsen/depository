import { arrayDiff, InsertDiff, MoveDiff, RemoveDiff } from "./arrayDiff.js";

const isArray = (v) => Array.isArray(v);
const getAnchor = (dom) => (isArray(dom) ? dom[0] : dom);

const removeChildren = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

export const mount = (vdom) => {
  if (isArray(vdom)) {
    return vdom.flatMap(mount);
  } else {
    return vdom._mount();
  }
};

export const flush = (vdom) => {
  if (isArray(vdom)) {
    return vdom.flatMap(flush);
  } else {
    return vdom && vdom._flush && vdom._flush();
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
  constructor(type, props, children, store, context, errorHandler, isSvg) {
    const Constructor = type;
    this._type = type;
    this._props = props;
    this._children = children;
    this._store = store;
    this._isSvg = isSvg;
    this._defaultProps = (Constructor.defaultProps || (() => ({})))();
    const instanceProps = this._createInstanceProps();
    const instance = new Constructor(instanceProps, context);

    instance.createRef = (name) => (ref) => {
      instance[name] = ref;
    };

    this._instance = instance;
    this._context = context;
    this._errorHandler = errorHandler;
    instance.context = context;
    instance.dispatch = store.dispatch.bind(store);
    instance.props = instanceProps;
    instance.shouldUpdate = instance.shouldUpdate || defaultShouldUpdate;
  }

  get _dom() {
    return getDom(this._vdom);
  }

  _createInstanceProps() {
    return {
      ...this._defaultProps,
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
        if (instance.willUpdate) {
          instance.willUpdate(nextProps);
        }

        const prevProps = instance.props;
        instance.props = nextProps;
        const updatedTree = instance.render(nextProps);

        this._vdom = update(
          updatedTree,
          this._vdom,
          this._store,
          this._context,
          instance.didCatch || this._errorHandler,
          this._isSvg
        );

        instance.didUpdate && instance.didUpdate(prevProps);
      }
    } catch (e) {
      this._errorHandler(e);
    }
  }

  _update(tree) {
    const instance = this._instance;

    this._props = tree.props;
    this._children = tree.children;

    if (instance.data) {
      const paths = instance.data(tree.props);
      const observable = this._store.observe(paths);
      if (this._observable !== observable) {
        this._subscription.unsubscribe();
        this._observable = observable;
        this._subscription = this._observable.subscribe((data) => {
          this._data = data;
          this._render();
        });
        this._data = this._observable.value;
      }
    }

    this._render();
  }

  _mount() {
    try {
      let mounting = true;
      const instance = this._instance;
      instance.props = this._createInstanceProps();

      if (instance.data) {
        const paths = instance.data(instance.props);
        this._observable = this._store.observe(paths);
        this._data = this._observable.value;
      }

      instance.willMount && instance.willMount();

      if (this._observable) {
        this._subscription = this._observable.subscribe((data) => {
          this._data = data;
          if (mounting) {
            this._queuedRender = true;
          } else {
            this._render();
          }
        });

        this._data = this._observable.value;
      }

      const nextProps = this._createInstanceProps();
      instance.props = nextProps;

      const tree = instance.render(nextProps, this._context);

      this._vdom = create(
        tree,
        this._store,
        this._context,
        instance.didCatch || this._errorHandler,
        this._isSvg
      );

      const dom = mount(this._vdom);

      mounting = false;

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

  _flush() {
    try {
      flush(this._vdom);
      this._instance.didMount && this._instance.didMount();
    } catch (e) {
      this._errorHandler(e);
    }

    if (this._queuedRender) {
      this._render();
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
  constructor(type, props, children, store, context, errorHandler, isSvg) {
    this._type = type;
    this._props = props;
    this._context = context;
    this._errorHandler = errorHandler;
    this._isSvg = isSvg || type === "svg";
    this._children =
      children && create(children, store, context, errorHandler, this._isSvg);
    this._store = store;
  }

  _update(tree) {
    const props = tree.props;

    for (const p in this._props) {
      if (p !== "key" && p !== "ref" && !(p in props)) {
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

      if (p !== "key" && p !== "ref" && prevValue !== value) {
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

    const children = tree.children;

    if (this._children !== children) {
      if (children === null) {
        unmount(this._children);
        this._children = children;
      } else if (this._children === null) {
        this._children = create(
          children,
          this._store,
          this._context,
          this._errorHandler,
          this._isSvg
        );
        appendChildren(this._dom, mount(this._children));
        flush(this._children);
      } else {
        this._children = update(
          children,
          this._children,
          this._store,
          this._context,
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
      if (p !== "key" && p !== "ref") {
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

  _flush() {
    flush(this._children);
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
  constructor() {
    this._type = "hidden";
  }

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
    context,
    errorHandler,
    isSvg
  ) {
    super();
    this._type = type;
    this._context = context;
    this._errorHandler = errorHandler;
    this._isSvg = isSvg || type === "svg";
    this._children =
      children && create(children, store, context, errorHandler, this._isSvg);
    this._target = target;
    this._store = store;
  }

  _update(tree) {
    const target = tree.props.target || document.body;
    if (this._target !== target) {
      // Move DOM tree
      this._target = target;
      appendChildren(target, getDom(this._children));
    }

    this._children = update(
      tree.children,
      this._children,
      this._store,
      this._context,
      this._errorHandler,
      this._isSvg
    );
  }

  _mount() {
    if (this._children) {
      appendChildren(this._target, mount(this._children));
      flush(this._children);
    }

    return super._mount();
  }

  _unmount() {
    unmount(this._children);
    super._unmount();
  }

  _flush() {
    flush(this._children);
  }
}

const isHidden = (value) =>
  value == null || value === false || (isArray(value) && !value.length);

export const create = (value, store, context, errorHandler, isSvg) => {
  if (isHidden(value)) {
    return new Hidden();
  }

  if (isArray(value)) {
    return value.map((item) =>
      create(item, store, context, errorHandler, isSvg)
    );
  }

  if (typeof value.type === "function") {
    try {
      return new UserComponent(
        value.type,
        value.props,
        value.children,
        store,
        context,
        errorHandler,
        isSvg
      );
    } catch (e) {
      errorHandler(e);
      return new Hidden();
    }
  }

  if (typeof value === "object") {
    if (value.type === "portal") {
      return new PortalComponent(
        value.type,
        value.props,
        value.children,
        store,
        context,
        errorHandler,
        isSvg
      );
    }

    return new PrimitiveComponent(
      value.type,
      value.props,
      value.children,
      store,
      context,
      errorHandler,
      isSvg
    );
  }

  return new Text(String(value));
};

const getKey = (props) => props && props.key;

const hasKey = (value) =>
  value && typeof getKey(value.props || value._props) !== "undefined";

const similar = (a, b) =>
  a._type === b.type && getKey(a._props) === getKey(b.props);

const updateKeyedArray = (
  updatedTree,
  vdom,
  store,
  context,
  errorHandler,
  isSvg
) => {
  const updatedByKey = new Map();
  updatedTree.forEach((child) => {
    updatedByKey.set(getKey(child.props), child);
  });

  vdom.forEach((oldChild, i) => {
    const key = getKey(oldChild._props);
    if (updatedByKey.has(key)) {
      const newChild = updatedByKey.get(key);
      update(newChild, oldChild, store, context, errorHandler, isSvg);
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
        create(child, store, context, errorHandler, isSvg)
      );
      const dom = mount(newValues);
      insertBefore(dom, anchor);
      vdom.splice(update._index, 0, ...newValues);
      flush(newValues);
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

const updateArray = (
  updatedTree,
  vdom,
  store,
  context,
  errorHandler,
  isSvg
) => {
  if (hasKey(updatedTree[0]) && hasKey(vdom[0])) {
    return updateKeyedArray(
      updatedTree,
      vdom,
      store,
      context,
      errorHandler,
      isSvg
    );
  }

  if (updatedTree.length && updatedTree.length === vdom.length) {
    for (let i = 0; i < updatedTree.length; i++) {
      vdom[i] = update(
        updatedTree[i],
        vdom[i],
        store,
        context,
        errorHandler,
        isSvg
      );
    }
    return vdom;
  }

  const newVdom = create(updatedTree, store, context, errorHandler, isSvg);
  vdom[0]._insertBefore(mount(newVdom));
  unmount(vdom);
  flush(newVdom);
  return newVdom;
};

export const update = (
  updatedTree,
  vdom,
  store,
  context,
  errorHandler,
  isSvg
) => {
  if (vdom._type === "hidden" && isHidden(updatedTree)) {
    return vdom;
  }

  if (
    vdom._type === "text" &&
    (typeof updatedTree === "string" || typeof updatedTree === "number")
  ) {
    vdom._updateText(updatedTree);
    return vdom;
  }

  if (updatedTree && updatedTree.type && updatedTree.type === vdom._type) {
    vdom._update(updatedTree);
    return vdom;
  }

  if (isArray(updatedTree) && updatedTree.length && isArray(vdom)) {
    return updateArray(updatedTree, vdom, store, context, errorHandler, isSvg);
  }

  const newVdom = create(updatedTree, store, context, errorHandler, isSvg);
  getAnchor(vdom)._insertBefore(mount(newVdom));
  unmount(vdom);
  flush(newVdom);
  return newVdom;
};

const reThrow = (e) => {
  throw e;
};

export const render = (
  value,
  store,
  container = document.body,
  context = {}
) => {
  removeChildren(container);
  const vdom = create(value, store, Object.freeze(context), reThrow, false);
  appendChildren(container, mount(vdom));
  flush(vdom);
};

export const clone = (element, { children, ...props }) => ({
  type: element.type,
  props: {
    ...element.props,
    ...props,
  },
  children: children || element.children,
});

export const h = (type, props, ...children) => {
  return {
    type: type,
    props: props || {},
    children: children.length ? children.flat() : null,
  };
};
