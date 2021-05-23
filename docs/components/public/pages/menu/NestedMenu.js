import { html } from "@depository/view";
import { css } from "stylewars";
import {
  MenuButton,
  MenuPopup,
  MenuItem,
  MenuItemNext,
  MenuItemPrevious,
  selectedMenuItemPath,
  NestedMenu,
} from "@depository/components";

const menuPath = "examples.NestedMenu.menu";

const containerStyles = css`
  & {
    text-align: center;
    padding: 60px 0;
  }
`;

export default class Example {
  static defaultProps() {
    return { id: "NestedMenu" };
  }

  data() {
    return { menu: menuPath };
  }

  constructor({ id }) {
    this.menus = {
      root: [
        html`<${MenuItem} id=${id} key="orange" value=${0}>Orange<//>`,
        html`<${MenuItemNext} id=${id} key="berry">Barry<//>`,
        html`<${MenuItem} id=${id} key="apple" value=${1}>Apple<//>`,
      ],
      berry: [
        html`<${MenuItemPrevious} id=${id} key="root">Back<//>`,
        html`<${MenuItem} id=${id} key="strawberry" value=${2}>Strawberry<//>`,
        html`<${MenuItem} id=${id} key="loganberry" value=${3}>Loganberry<//>`,
        html`<${MenuItem} id=${id} key="boysenberry" value=${4}>
          Boysenberry
        <//>`,
      ],
    };

    this.onMenuChanged = (e) => {
      const { menu, selectedItem } = e.detail;

      this.dispatch({
        name: "showMenu",
        payload: {
          [menuPath]: menu,
          [selectedMenuItemPath(this.props.id)]:
            selectedItem || this.menus[menu][1].props.key,
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

  render({ id, menu = "root" }) {
    return html`
      <div class=${containerStyles}>
        <${NestedMenu}
          id=${id}
          placement="end"
          @menuChanged=${this.onMenuChanged}
          @hide=${this.onHide}
          @select=${this.onSelect}
        >
          <${MenuButton}>Fruit<//>
          <${MenuPopup}>${this.menus[menu]}<//>
        <//>
      </div>
    `;
  }
}
