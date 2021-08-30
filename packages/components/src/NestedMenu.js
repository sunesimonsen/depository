import { html } from "@depository/view";

import { Menu } from "./Menu.js";

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

      if (item.type.isNextAction) {
        if (onMenuChanged) {
          this.nextMenuItem = item.props.key;
          onMenuChanged(new MenuChangedEvent({ menu: item.props.key }));
        }

        e.preventDefault();
      } else if (item.type.isPreviousAction) {
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
        const onSelect = this.props["@selectItem"];
        onSelect && onSelect(e);
      }
    };
  }

  render({ children, ...other }) {
    return html`
      <${Menu} ...${other} @selectItem=${this.onSelect}>${children}<//>
    `;
  }
}
