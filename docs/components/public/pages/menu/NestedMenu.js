import { html } from "@depository/view";
import { css } from "stylewars";
import {
  MenuButton,
  MenuPopup,
  MenuItem,
  MenuItemNext,
  MenuItemPrevious,
  focusedMenuItemPath,
  NestedMenu,
} from "@depository/components";

const id = "NestedMenu";
const menuPath = `examples.${id}.menu`;

const containerStyles = css`
  & {
    text-align: center;
    padding: 60px 0;
  }
`;

const menus = {
  root: [
    html`<${MenuItem} id=${id} key="orange" value=${0}>Orange<//>`,
    html`<${MenuItemNext} id=${id} key="berry">Barry<//>`,
    html`<${MenuItem} id=${id} key="apple" value=${1}>Apple<//>`,
  ],
  berry: [
    html`<${MenuItemPrevious} id=${id} key="root">Back<//>`,
    html`<${MenuItem} id=${id} key="strawberry" value=${2}>Strawberry<//>`,
    html`<${MenuItem} id=${id} key="loganberry" value=${3}>Loganberry<//>`,
    html`<${MenuItem} id=${id} key="boysenberry" value=${4}> Boysenberry <//>`,
  ],
};

export default class Example {
  data() {
    return { menu: menuPath };
  }

  constructor() {
    this.onMenuChanged = (e) => {
      const { menu, selectedItem } = e.detail;

      this.dispatch({
        name: "showMenu",
        payload: {
          [menuPath]: menu,
          [focusedMenuItemPath(id)]: selectedItem || menus[menu][1].props.key,
        },
      });
    };

    this.onHide = () => {
      this.dispatch({
        name: "resetMenu",
        payload: { [menuPath]: "root" },
      });
    };

    this.onSelect = (e) => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render({ menu = "root" }) {
    return html`
      <div class=${containerStyles}>
        <${NestedMenu}
          id=${id}
          placement="end"
          onMenuChanged=${this.onMenuChanged}
          onHide=${this.onHide}
          onSelectItem=${this.onSelect}
        >
          <${MenuButton}>Fruit<//>
          <${MenuPopup}>${menus[menu]}<//>
        <//>
      </div>
    `;
  }
}
