const create = (value) => {
  if (value == null || value === false) {
    return document.createComment("hidden");
  } else if (Array.isArray(value)) {
    return value.map(create);
  } else if (typeof value === "object") {
    const element = document.createElement(value.type);

    if (value.props) {
      Object.entries(value.props).forEach(([key, value]) => {
        if (key === "key") {
          element.key = value;
        } else {
          element.setAttribute(key, value);
        }
      });
    }

    create(value.children).forEach((childNode) => {
      element.appendChild(childNode);
    });

    return element;
  } else {
    return document.createTextNode(value);
  }
};

const replaceNode = (value, target) => {
  const nextSibling = target.nextSibling;
  const parent = target.parentNode;
  toArray(create(value)).forEach((newNode) => {
    parent.insertBefore(newNode, nextSibling);
  });
  parent.removeChild(target);
};

const updateString = (value, target) => {
  if (target.nodeType === Node.TEXT_NODE) {
    target.textContent = value;
  } else {
    replaceNode(value, target);
  }
};

const updateAttributes = (props, target) => {
  target.getAttributeNames().forEach((name) => {
    if (!(name in props)) {
      target.removeAttribute(name);
    }
  });

  Object.entries(props).forEach(([name, value]) => {
    target.setAttribute(name, value);
  });
};

const updateElement = (value, target) => {
  if (
    value != null &&
    value !== false &&
    target.nodeType === Node.ELEMENT_NODE
  ) {
    updateAttributes(value.props, target);
    updateChildren(value.children, target);
  } else {
    replaceNode(value, target);
  }
};

const update = (value, target) => {
  if (typeof value === "string") {
    updateString(value, target);
  } else {
    updateElement(value, target);
  }
};

const replaceChildren = (values, container) => {
  create(values).forEach((childNode) => {
    container.appendChild(childNode);
  });
};

const getKey = (value) => value && value.props && value.props.key;

const updateChildren = (values, container) => {
  const childNodes = container.childNodes;
  if (values.length === 0) {
    container.innerHTML = "";
  } else if (childNodes.length === 0) {
    replaceChildren(values, container);
  } else if (
    container.firstElementChild &&
    "key" in container.firstElementChild
  ) {
    const used = {};
    values.forEach((newChild) => {
      const key = getKey(newChild);
      if (typeof key !== "undefined") {
        used[key] = true;
      }
    });

    const removed = [];
    const childrenByKey = {};
    childNodes.forEach((childNode) => {
      if (used[childNode.key]) {
        childrenByKey[childNode.key] = childNode;
      } else {
        removed.push(childNode);
      }
    });

    removed.forEach((childNode) => {
      container.removeChild(childNode);
    });

    values.forEach((child) => {
      const existingChild = childrenByKey[getKey(child)];
      if (existingChild) {
        container.appendChild(existingChild);

        update(child, existingChild, container);
      } else {
        toArray(create(child)).forEach((newNode) => {
          container.appendChild(newNode);
        });
      }
    });
  } else if (values.length === childNodes.length) {
    values.forEach((child, i) => {
      update(child, childNodes[i], container);
    });
  } else {
    container.innerHTML = "";
    replaceChildren(values, container);
  }
};

const toArray = (value) => (Array.isArray(value) ? value : [value]);

export const render = (value, container) => {
  updateChildren(toArray(value), container);
};
