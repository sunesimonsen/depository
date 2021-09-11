const menuById = (id) => `components.Menu.${id}`;

export const popupVisiblilityPath = (id) => `${menuById(id)}.visible`;
export const selectedItemPath = (id) => `${menuById(id)}.selected`;

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
    [selectedItemPath(id)]: undefined,
  },
});

export const isItemSelected = ({ id, key }) => ({
  inputs: { selected: selectedItemPath(id) },
  compute: ({ selected }) => selected === key,
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

export const setSelectedMenuItem = ({ id, key }) => ({
  name: "setSelectedMenuItem",
  payload: {
    [popupVisiblilityPath(id)]: true,
    [selectedItemPath(id)]: key,
  },
});

export const selectPreviousItem = ({ id, selectable }) => {
  return {
    name: "selectPreviousMenuItem",
    inputs: {
      selected: selectedItemPath(id),
    },
    payload: ({ selected }) => {
      const index = selectable.findIndex(({ key }) => key === selected);
      const newIndex =
        index === -1 ? selectable.length - 1 : Math.max(0, index - 1);

      return {
        [popupVisiblilityPath(id)]: true,
        [selectedItemPath(id)]: selectable[newIndex].key,
      };
    },
  };
};

export const selectNextItem = ({ id, selectable }) => {
  return {
    name: "selectNextMenuItem",
    inputs: {
      selected: selectedItemPath(id),
    },
    payload: ({ selected }) => {
      const index = selectable.findIndex(({ key }) => key === selected);
      const newIndex =
        index === -1 ? 0 : Math.min(selectable.length - 1, index + 1);

      return {
        [popupVisiblilityPath(id)]: true,
        [selectedItemPath(id)]: selectable[newIndex].key,
      };
    },
  };
};

export class SelectEvent extends CustomEvent {
  constructor(detail) {
    super("select", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}
