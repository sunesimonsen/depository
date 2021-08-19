import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { isItemSelected, setSelectedMenuItem, SelectEvent } from "./model.js";

const styles = css`
  & {
    cursor: pointer;
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

const selectedStyles = css`
  & {
    background: rgba(31, 115, 183, 0.08);
  }
`;

export class MenuItem {
  constructor() {
    this.onMouseDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.target.dispatchEvent(
        new SelectEvent({
          key: this.props.key,
          value: this.props.value,
        })
      );
    };

    this.onMouseEnter = () => {
      const { id, key } = this.props;
      this.dispatch(setSelectedMenuItem({ id, key }));
    };
  }

  data({ id, key }) {
    return { selected: isItemSelected({ id, key }) };
  }

  render({ id, key, selected, children }) {
    return html`
      <button
        tabindex="-1"
        id="${id}-${key}"
        role="menuitem"
        @mousedown=${this.onMouseDown}
        @mouseenter=${this.onMouseEnter}
        class=${classes(styles, selected && selectedStyles)}
      >
        ${children}
      </button>
    `;
  }
}
