import { clone, html } from "@depository/view";
import { Popup } from "./Popup.js";

import {
  showMenu,
  hideMenu,
  popupVisiblilityPath,
  selectNextItem,
  selectedItemPath,
  selectPreviousItem,
  getSelectableItems,
  SelectEvent,
} from "./Menu/model.js";

export class Menu {
  static defaultProps() {
    return {
      placement: "bottom-start",
      margins: 4,
    };
  }

  constructor() {
    this.showMenu = () => {
      this.dispatch(showMenu({ id: this.props.id }));
    };

    this.hideMenu = () => {
      if (this.props.visible) {
        this.dispatch(hideMenu({ id: this.props.id }));

        const hideHandler = this.props["@hide"];
        hideHandler && hideHandler();
      }
    };

    this.onTriggerClick = () => {
      if (this.props.visible) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    };

    this.onBlur = (e) => {
      this.hideMenu();
    };

    this.onSelect = (e) => {
      const onSelect = this.props["@select"];
      if (onSelect) {
        onSelect(e);
        if (!e.defaultPrevented) this.hideMenu();
      }
    };

    const handlers = {
      ArrowUp: (e, { id, children }) => {
        e.preventDefault();
        const selectable = getSelectableItems(id, children);
        this.dispatch(selectPreviousItem({ id, selectable }));
      },
      ArrowDown: (e, { id, children }) => {
        e.preventDefault();
        const selectable = getSelectableItems(id, children);
        this.dispatch(selectNextItem({ id, selectable }));
      },
      Enter: (e, { id, selected, visible, children }) => {
        if (visible && selected) {
          e.preventDefault();
          const selectable = getSelectableItems(id, children);
          const selectedItem = selectable.find(({ key }) => selected === key);

          this.onSelect(new SelectEvent(selectedItem));
        }
      },
      Escape: (e) => {
        e.preventDefault();
        this.hideMenu();
      },
    };

    this.onKeydown = (e) => {
      const handler = handlers[e.key];

      if (handler) {
        handler(e, this.props);
      }
    };
  }

  data({ id }) {
    return {
      visible: popupVisiblilityPath(id),
      selected: selectedItemPath(id),
    };
  }

  updatePopupState() {
    if (this.props.visible) {
      this.popup.show();
    } else {
      this.popup.hide();
    }
  }

  didMount() {
    this.popup = new Popup(this.triggerRef, this.popupRef, {
      placement: this.props.placement,
      margins: this.props.margins,
    });

    this.updatePopupState();
  }

  didUpdate() {
    this.updatePopupState();
  }

  willUnmount() {
    this.popup.hide();
  }

  render({ id, visible, children }) {
    const [trigger, ...content] = children;

    return [
      clone(trigger, {
        ref: this.createRef("triggerRef"),
        "@click": this.onTriggerClick,
        "@keydown": this.onKeydown,
        "@blur": this.onBlur,
      }),
      html`
        <div ref=${this.createRef("popupRef")} @select=${this.onSelect}>
          ${visible && content}
        </div>
      `,
    ];
  }
}
