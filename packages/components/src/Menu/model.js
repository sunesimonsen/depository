const menuById = (id) => `components.Menu.${id}`;

export const popupVisiblilityPath = (id) => `${menuById(id)}.visible`;
export const focusedItemPath = (id) => `${menuById(id)}.focused`;

export const showMenu = ({ id }) => ({
  name: "showMenu",
  payload: {
    [popupVisiblilityPath(id)]: true,
  },
});

export const hideMenu = ({ id }) => ({
  name: "hideMenu",
  payload: {
    [popupVisiblilityPath(id)]: false,
    [focusedItemPath(id)]: undefined,
  },
});

export const isItemFocused = ({ id, key }) => ({
  inputs: { focused: focusedItemPath(id) },
  compute: ({ focused }) => focused === key,
});

export const getSelectableItems = (id, element) => {
  if (!element || typeof element !== "object") return [];

  if (Array.isArray(element)) {
    return element.flatMap((child) => getSelectableItems(id, child));
  }

  if (element.props.id === id && "key" in element.props) {
    return { key: element.props.key, value: element.props.value };
  }

  return getSelectableItems(id, element.children);
};

export const setFocusedMenuItem = ({ id, key }) => ({
  name: "setFocusedMenuItem",
  payload: {
    [popupVisiblilityPath(id)]: true,
    [focusedItemPath(id)]: key,
  },
});

export const focusPreviousItem = ({ id, selectable }) => {
  return {
    name: "focusPreviousMenuItem",
    inputs: {
      focused: focusedItemPath(id),
    },
    payload: ({ focused }) => {
      const index = selectable.findIndex(({ key }) => key === focused);
      const newIndex =
        index === -1 ? selectable.length - 1 : Math.max(0, index - 1);

      return {
        [popupVisiblilityPath(id)]: true,
        [focusedItemPath(id)]: selectable[newIndex].key,
      };
    },
  };
};

export const focusNextItem = ({ id, selectable }) => {
  return {
    name: "focusNextMenuItem",
    inputs: {
      focused: focusedItemPath(id),
    },
    payload: ({ focused }) => {
      const index = selectable.findIndex(({ key }) => key === focused);
      const newIndex =
        index === -1 ? 0 : Math.min(selectable.length - 1, index + 1);

      return {
        [popupVisiblilityPath(id)]: true,
        [focusedItemPath(id)]: selectable[newIndex].key,
      };
    },
  };
};

export class SelectEvent extends CustomEvent {
  constructor(detail) {
    super("SelectItem", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}
