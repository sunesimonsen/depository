import htm from "htm";
import arrayDiff from "./arrayDiff.cjs";

const { InsertDiff, RemoveDiff, MoveDiff } = arrayDiff;

export const mount = (vdom) => {
  if (Array.isArray(vdom)) {
    return vdom.flatMap(mount);
  } else {
    return vdom.mount();
  }
};

const unmount = (vdom) => {
  if (Array.isArray(vdom)) {
    vdom.map(unmount);
  } else if (vdom) {
    vdom.unmount();
  }
};

const appendChildren = (container, children) => {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      container.appendChild(child);
    });
  } else {
    container.appendChild(children);
  }
};

const insertBefore = (dom, referenceNode) => {
  if (Array.isArray(dom)) {
    dom.forEach((node) => {
      referenceNode.parentNode.insertBefore(node, referenceNode);
    });
  } else {
    referenceNode.parentNode.insertBefore(dom, referenceNode);
  }
};

const isFunction = (value) => typeof value === "function";

class UserComponent {
  constructor(type, props, children, store) {
    const Constructor = type;
    this.type = type;
    this.props = props;
    this.children = children;
    this.store = store;
    this.instance = new Constructor(props, children);
    const paths = this.instance.data;
    if (paths) {
      this.observable = store.observe(paths);
    }
  }

  get dom() {
    return Array.isArray(this.vdom)
      ? this.vdom.map((c) => c.dom)
      : this.vdom.dom;
  }

  enqueueRender() {
    clearTimeout(this.renderTimer);
    this.renderTimer = setTimeout(() => {
      this.render();
    }, 0);
  }

  _renderInstance() {
    return this.instance.render({
      ...this.data,
      ...this.props,
      children: this.children,
    });
  }

  render() {
    const updatedTree = this._renderInstance();
    this.vdom = update(updatedTree, this.vdom);
  }

  updateProps(props) {
    this.props = props;
    this.enqueueRender();
  }

  updateChildren(children) {
    this.children = children;
    this.enqueueRender();
  }

  mount() {
    if (this.observable) {
      this.subscription = this.observable.subscribe((data) => {
        this.data = data;
        this.enqueueRender();
      });

      this.data = this.observable.value;
    }

    const tree = this._renderInstance();
    this.vdom = create(tree, this.store);

    return mount(this.vdom);
  }

  insertBefore(dom) {
    const anchor = Array.isArray(this.vdom) ? this.vdom[0] : this.vdom;
    anchor.insertBefore(dom);
  }

  unmount() {
    clearTimeout(this.renderTimer);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    unmount(this.vdom);
  }
}

class PrimitiveComponent {
  constructor(type, props, children, store) {
    this.type = type;
    this.props = props;
    this.children = create(children, store);
    this.store = store;
  }

  updateProps(props) {
    Object.keys(this.props).forEach((name) => {
      if (!(name in this.props) && name !== "key") {
        this.dom.removeAttribute(name);
      }
    });

    Object.entries(props).forEach(([name, value]) => {
      if (name !== "key" && this.props[name] !== value) {
        this.dom.setAttribute(name, value);
      }
    });

    this.props = props;
  }

  updateChildren(children) {
    this.children = update(children, this.children);
  }

  mount() {
    this.dom = document.createElement(this.type);

    Object.entries(this.props).forEach(([name, value]) => {
      if (name !== "key") {
        this.dom.setAttribute(name, value);
      }
    });

    appendChildren(this.dom, mount(this.children));

    return this.dom;
  }

  insertBefore(dom) {
    insertBefore(dom, this.dom);
  }

  unmount() {
    unmount(this.children);
    this.dom.remove();
  }
}

class Text {
  constructor(value) {
    this.value = value;
  }

  mount() {
    this.dom = document.createTextNode(this.value);
    return this.dom;
  }

  insertBefore(dom) {
    insertBefore(dom, this.dom);
  }

  unmount() {
    this.dom.remove();
  }
}

class Hidden {
  mount() {
    this.dom = document.createComment("hidden");
    return this.dom;
  }

  insertBefore(dom) {
    insertBefore(dom, this.dom);
  }

  unmount() {
    this.dom.remove();
  }
}

export const create = (value, store) => {
  if (
    value == null ||
    value === false ||
    (Array.isArray(value) && value.length === 0)
  ) {
    return new Hidden();
  } else if (Array.isArray(value)) {
    return value.map((item) => create(item, store));
  } else if (isFunction(value.type)) {
    return new UserComponent(value.type, value.props, value.children, store);
  } else if (typeof value === "object") {
    return new PrimitiveComponent(
      value.type,
      value.props,
      value.children,
      store
    );
  } else {
    return new Text(String(value));
  }
};

const hasKey = (value) => value && value.props && "key" in value.props;

const similar = (a, b) => a.type === b.type && a.props.key === b.props.key;

const updateKeyedArray = (updatedTree, vdom, store) => {
  const updatedByKey = new Map();
  updatedTree.forEach((child) => {
    updatedByKey.set(child.props.key, child);
  });

  vdom.forEach((oldChild, i) => {
    if (updatedByKey.has(oldChild.props.key)) {
      const newChild = updatedByKey.get(oldChild.props.key);
      update(newChild, oldChild, store);
    }
  });

  const diff = arrayDiff(vdom, updatedTree, similar);

  diff.forEach((update) => {
    console.log(update);
    if (update instanceof InsertDiff) {
      const anchor = vdom[update.index];
      const newValues = update.values.map((child) => create(child, store));
      const dom = mount(newValues);
      anchor.insertBefore(dom);
      vdom.splice(update.index, 0, ...newValues);
    } else if (update instanceof RemoveDiff) {
      const candidates = vdom.splice(update.index, update.howMany);
      candidates.forEach((candidate) => {
        unmount(candidate);
      });
    } else if (update instanceof MoveDiff) {
      const anchor = vdom[update.to];
      const candidates = vdom.splice(update.from, update.howMany);
      candidates.forEach((candidate) => {
        anchor.insertBefore(candidate.dom);
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
  vdom[0].insertBefore(mount(newVdom));
  unmount(vdom);
  return newVdom;
};

export const update = (updatedTree, vdom, store) => {
  if (updatedTree && updatedTree.type && updatedTree.type === vdom.type) {
    vdom.updateProps(updatedTree.props);
    vdom.updateChildren(updatedTree.children);
    return vdom;
  } else if (
    Array.isArray(updatedTree) &&
    updatedTree.length > 0 &&
    Array.isArray(vdom)
  ) {
    return updateArray(updatedTree, vdom, store);
  } else {
    const newVdom = create(updatedTree, store);
    vdom.insertBefore(mount(newVdom));
    unmount(vdom);
    return newVdom;
  }
};

export const render = (value, store, container = document.body) => {
  const vdom = create(value, store);
  appendChildren(container, mount(vdom));
};

const h = (type, props, ...children) => ({
  type,
  props: props || {},
  children: children.flat(),
});

export const html = htm.bind(h);
