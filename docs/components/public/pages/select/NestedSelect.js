import { html, clone } from "@depository/view";
import { css } from "stylewars";
import {
  Center,
  ColumnLayout,
  SelectInput,
  SelectPopup,
  SelectOption,
  SelectOptionNext,
  SelectOptionPrevious,
  focusedMenuItemPath,
  NestedSelect,
} from "@depository/components";

const id = "examples.NestedSelect";
const selectMenuPath = `${id}.menu`;
const selectedFruitPath = `${id}.selectedFruit`;

const containerStyles = css`
  & {
    padding-bottom: 160px;
  }
`;

const fruits = {
  0: {
    key: "orange",
    label: "Orange",
  },
  1: {
    key: "barry",
    label: "Barry",
  },
  2: {
    key: "apple",
    label: "Apple",
  },
  3: {
    key: "strawberry",
    label: "Strawberry",
  },
  4: {
    key: "boysenberry",
    label: "Boysenberry",
  },
};

const option = (fruitId) => {
  const fruit = fruits[fruitId];

  return html`
    <${SelectOption} id=${id} key=${fruit.key} value=${fruitId}>
      ${fruit.label}
    <//>
  `;
};

const menus = {
  root: [
    option(0),
    html`<${SelectOptionNext} id=${id} key="berry">Barry<//>`,
    option(1),
  ],
  berry: [
    html`<${SelectOptionPrevious} id=${id} key="root">Back<//>`,
    option(2),
    option(3),
    option(4),
  ],
};

export default class Example {
  static defaultProps() {
    return { selected: 0 };
  }

  data() {
    return { menu: selectMenuPath, selected: selectedFruitPath };
  }

  constructor() {
    this.onMenuChanged = (e) => {
      const { menu, selectedItem } = e.detail;

      this.dispatch({
        name: "showMenu",
        payload: {
          [selectMenuPath]: menu,
          [focusedMenuItemPath(id)]: selectedItem || menus[menu][1].props.key,
        },
      });
    };

    this.onHide = () => {
      this.dispatch({
        name: "resetMenu",
        payload: { [selectMenuPath]: "root" },
      });
    };

    this.onSelect = (e) => {
      this.dispatch({
        name: "selectFruit",
        payload: {
          [selectedFruitPath]: e.detail.value,
        },
      });
    };
  }

  render({ menu = "root", selected }) {
    return html`
      <${Center} className=${containerStyles}>
        <${ColumnLayout} columns="auto 300px">
          <label for=${id}>Fruit</label>
          <${NestedSelect}
            id=${id}
            onMenuChanged=${this.onMenuChanged}
            onHide=${this.onHide}
            onSelectItem=${this.onSelect}
          >
            <${SelectInput} .value=${fruits[selected].label}>
              ${fruits[selected].label}
            <//>
            <${SelectPopup}>
              ${menus[menu].map((item) =>
                clone(item, { selected: item.key === selected })
              )}
            <//>
          <//>
        <//>
      <//>
    `;
  }
}
