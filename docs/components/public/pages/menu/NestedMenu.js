import { html } from "@depository/view";
import { css } from "stylewars";
import {
  MenuButton,
  MenuPopup,
  MenuItem,
  MenuItemNext,
  MenuItemPrevious,
  selectedMenuItemPath,
  Menu,
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

    this.onSelect = (e) => {
      const { key, value } = e.detail;

      const items = this.menus[this.props.menu || "root"];
      const item = items.find((item) => item.props.key === key);

      if (item.type === MenuItemNext) {
        const firstItem = this.menus[item.props.key][1];
        this.showMenu(item.props.key, firstItem && firstItem.props.key);
        e.preventDefault();
      } else if (item.type === MenuItemPrevious) {
        const previousItem = this.menus[item.props.key].find(
          (item) => item.props.key === this.props.menu
        );
        this.showMenu(item.props.key, previousItem && previousItem.props.key);
        e.preventDefault();
      } else {
        alert(`${key}:${value}`);
      }
    };

    this.resetMenu = () => {
      this.showMenu("root");
    };
  }

  showMenu(menu, selectedItem) {
    this.dispatch({
      name: "showMenu",
      payload: {
        [menuPath]: menu,
        [selectedMenuItemPath(this.props.id)]: selectedItem,
      },
    });
  }

  render({ id, menu = "root" }) {
    return html`
      <div class=${containerStyles}>
        <${Menu}
          id=${id}
          placement="end"
          @hide=${this.resetMenu}
          @select=${this.onSelect}
        >
          <${MenuButton}>Fruit<//>
          <${MenuPopup}>${this.menus[menu]}<//>
        <//>
      </div>
    `;
  }
}
