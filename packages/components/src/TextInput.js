import { html } from "@depository/view";
import { css, classes } from "stylewars";

export const textInputStyles = css`
  & {
    appearance: none;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
    border: 1px solid rgb(216, 220, 222);
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    font-family: inherit;
    padding: 0.714286em 0.857143em;
    min-height: 40px;
    line-height: 1.28571;
    font-size: 14px;
    background-color: rgb(255, 255, 255);
    color: rgb(47, 57, 65);
  }

  &[readonly],
  &[aria-readonly="true"] {
    border-color: rgb(216, 220, 222);
    background-color: rgb(248, 249, 249);
  }

  &:hover {
    border-color: rgb(31, 115, 183);
  }

  &:focus,
  &:focus-within {
    outline: none;
    border-color: rgb(31, 115, 183);
    box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
  }

  &[disabled],
  &:disabled,
  &[aria-disabled="true"] {
    cursor: default;
    border-color: rgb(233, 235, 237);
    background-color: rgb(248, 249, 249);
    color: rgb(194, 200, 204);
    pointer-events: none;
  }
`;

export class TextInput {
  render({ class: className, ...other }) {
    return html`
      <input
        type="text"
        class=${classes(className, textInputStyles)}
        ...${other}
      />
    `;
  }
}
