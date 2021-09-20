import { html } from "@depository/view";
import { css, classes } from "stylewars";
import {
  Menu,
  ColumnLayout,
  setFocusedMenuItem,
  isMenuItemSelected,
  SelectMenuItemEvent,
} from "@depository/components";

const menuButtonStyles = css`
  & {
    border: none;
    background: #00a4ef;
    color: white;
    padding: 10px 20px;
  }

  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

class CustomMenuButton {
  render({ children, class: className, ...other }) {
    return html`
      <button class=${classes(menuButtonStyles, className)} ...${other}>
        ${children}
      </button>
    `;
  }
}

const popupStyles = css`
  & {
    box-shadow: rgb(23 73 77 / 15%) 0px 20px 30px 0px;
    background: white;
  }
`;

class CustomMenuPopup {
  render({ children, class: className, ...other }) {
    return html`
      <div class=${classes(popupStyles, className)} ...${other}>
        ${children}
      </div>
    `;
  }
}

const menuItemStyles = (color) => css`
  & {
    display: block;
    background: ${color};
    height: 80px;
    width: 80px;
    border: none;
    color: white;
  }
`;

const focusedMenuItemStyles = css`
  & {
    opacity: 0.8;
  }
`;

class CustomMenuItem {
  constructor() {
    this.onMouseDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.target.dispatchEvent(
        new SelectMenuItemEvent({
          key: this.props.key,
          value: this.props.value,
        })
      );
    };

    this.onMouseEnter = () => {
      const { id, key } = this.props;
      this.dispatch(setFocusedMenuItem({ id, key }));
    };
  }

  data({ id, key }) {
    return { selected: isMenuItemSelected({ id, key }) };
  }

  render({ color, selected, children }) {
    return html`
      <button
        tabindex="-1"
        onMouseDown=${this.onMouseDown}
        onMouseEnter=${this.onMouseEnter}
        class=${classes(
          menuItemStyles(color),
          selected && focusedMenuItemStyles
        )}
      >
        ${children}
      </button>
    `;
  }
}

const containerStyles = css`
  & {
    text-align: center;
    height: 200px;
  }
`;

export default class Example {
  static defaultProps() {
    return { id: "DefaultMenu" };
  }

  constructor() {
    this.onSelect = (e) => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render({ id }) {
    return html`
      <div class=${containerStyles}>
        <${Menu} id=${id} placement="bottom" onSelectItem=${this.onSelect}>
          <${CustomMenuButton}>Menu<//>
          <${CustomMenuPopup}>
            <${ColumnLayout} gap="0" stretched columns="2">
              <${CustomMenuItem}
                id=${id}
                key="orange"
                value=${1}
                color="#F25022"
              >
                Orange
              <//>
              <${CustomMenuItem}
                id=${id}
                key="green"
                value=${2}
                color="#7FBA00"
              >
                Green
              <//>
              <${CustomMenuItem} id=${id} key="blue" value=${3} color="#00A4EF">
                Blue
              <//>
              <${CustomMenuItem}
                id=${id}
                key="yellow"
                value=${4}
                color="#FFB900"
              >
                Yellow
              <//>
            <//>
          <//>
        <//>
      </div>
    `;
  }
}
