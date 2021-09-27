import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { isItemFocused, setFocusedMenuItem, SelectEvent } from "./model.js";

const styles = css`
  & {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 8px 36px;
    text-decoration: none;
    line-height: 20px;
    overflow-wrap: break-word;
    user-select: none;
    color: rgb(47, 57, 65);
    min-width: 120px;
    border: none;
    background: none;
    text-align: start;
    box-sizing: border-box;
  }

  &:first-child {
    margin-top: 4px;
  }

  &:last-child {
    margin-bottom: 4px;
  }

  &:focus {
    outline: none;
  }
`;

const focusedStyles = css`
  & {
    background: rgba(31, 115, 183, 0.08);
  }
`;

export class MenuItem {
  constructor() {
    this.onMouseDown = (e) => {
      if (!e.shiftKey && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        e.stopPropagation();
        e.target.dispatchEvent(
          new SelectEvent({
            key: this.props.key,
            value: this.props.value,
          })
        );
      }
    };

    this.onMouseEnter = () => {
      const { id, key } = this.props;
      this.dispatch(setFocusedMenuItem({ id, key }));
    };
  }

  data({ id, key }) {
    return { focused: isItemFocused({ id, key }) };
  }

  render({ id, key, focused, children, ...other }) {
    return html`
      <div
        tabindex="-1"
        id="${id}-${key}"
        role="menuitem"
        onMouseDown=${this.onMouseDown}
        onMouseEnter=${this.onMouseEnter}
        className=${classes(styles, focused && focusedStyles)}
        ...${other}
      >
        ${children}
      </div>
    `;
  }
}
