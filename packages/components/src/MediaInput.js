import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { textInputStyles } from "./TextInput.js";

const mediaInputStyles = css`
  & {
    display: inline-flex;
    align-items: center;
  }

  & > input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
`;

export class MediaInput {
  constructor() {
    this.focusInput = (e) => {
      if (this.inputRef && this.inputRef !== e.target) {
        e.preventDefault();
        this.inputRef.focus();
      }
    };
  }

  didMount() {
    this.inputRef = this.ref.querySelector("input");
  }

  render({ class: className, children, ...other }) {
    return html`
      <span
        ref=${this.createRef("ref")}
        class=${classes(className, mediaInputStyles, textInputStyles)}
        @mousedown=${this.focusInput}
        ...${other}
      >
        ${children}
      </span>
    `;
  }
}
