import { html } from "@depository/view";

import { Menu } from "./Menu.js";
import { MenuItemNext } from "./Menu/MenuItemNext.js";
import { MenuItemPrevious } from "./Menu/MenuItemPrevious.js";

class MenuChangedEvent extends CustomEvent {
  constructor({ menu, selectedItem }) {
    super("menuChanged", {
      detail: { menu, selectedItem },
      bubbles: true,
      cancelable: true,
    });
  }
}

export class NestedMenu {
  constructor() {
    this.onSelect = (e) => {
      const { key } = e.detail;

      const item = this.props.children[1].children.find(
        (item) => item.props.key === key
      );

      const onMenuChanged = this.props["@menuChanged"];

      if (item.type === MenuItemNext) {
        if (onMenuChanged) {
          this.nextMenuItem = item.props.key;
          onMenuChanged(new MenuChangedEvent({ menu: item.props.key }));
        }

        e.preventDefault();
      } else if (item.type === MenuItemPrevious) {
        if (onMenuChanged) {
          onMenuChanged(
            new MenuChangedEvent({
              menu: item.props.key,
              selectedItem: this.nextMenuItem,
            })
          );
        }

        e.preventDefault();
      } else {
        const onSelect = this.props["@select"];
        onSelect && onSelect(e);
      }
    };
  }

  render({ children, ...other }) {
    return html`
      <${Menu} ...${other} @select=${this.onSelect}>${children}<//>
    `;
  }
}
