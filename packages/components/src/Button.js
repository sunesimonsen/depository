import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: rgb(31, 115, 183);
    border-radius: var(--dc-button-border-radius, 4px);
    cursor: pointer;
    border: 1px solid rgb(31, 115, 183);
    height: 2.8em;
    padding: var(--dc-button-padding, 0 1.07143em);
    width: var(--dc-button-width, inherit);
    background-color: transparent;
    font-size: 0.88em;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    border-color: rgb(20, 74, 117);
    background-color: rgba(31, 115, 183, 0.08);
    color: rgb(20, 74, 117);
  }

  &:active {
    border-color: rgb(15, 53, 84);
    background-color: rgba(31, 115, 183, 0.2);
    color: rgb(15, 53, 84);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgb(31 115 183 / 35%);
  }

  &:disabled,
  &:hover:disabled {
    border-color: transparent;
    background-color: rgb(233, 235, 237);
    color: rgb(194, 200, 204);
    cursor: default;
  }
`;

const basicStyles = css`
  & {
    border-color: transparent;
  }

  &:hover {
    border-color: transparent;
  }
`;

const primaryStyles = css`
  & {
    color: white;
    background-color: rgb(31, 115, 183);
  }

  &:hover {
    color: white;
    background-color: rgb(20, 74, 117);
  }

  &:active {
    color: white;
    background-color: rgb(15, 53, 84);
  }
`;

const stretchedStyles = css`
  & {
    width: 100%;
  }
`;

export class Button {
  render({
    basic,
    primary,
    stretched,
    disabled,
    class: className,
    children,
    ...other
  }) {
    return html`
      <button
        class=${classes(
          styles,
          basic && basicStyles,
          primary && primaryStyles,
          stretched && stretchedStyles,
          className
        )}
        disabled=${disabled}
        ...${other}
      >
        ${children}
      </button>
    `;
  }
}
