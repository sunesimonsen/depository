import { html, combineRefs } from "@depository/view";
import { css, classes } from "stylewars";
import { textInputStyles } from "./TextInput.js";

const mediaInputStyles = css`
  & {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  & > [data-label],
  & > input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }

  & > [data-label] + input {
    position: absolute;
    top: 0;
    left: 0;
    border: 0px;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
  }

  & > input:disabled {
    color: rgb(194, 200, 204);
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

    this.onBlur = (e) => {
      const blurHandler = this.props["@blur"];
      blurHandler && blurHandler(e);
    };
  }

  didMount() {
    this.inputRef = this.ref.querySelector("input");

    if (this.inputRef) {
      this.inputRef.addEventListener("blur", this.onBlur);
    }
  }

  willUnmount() {
    if (this.inputRef) {
      this.inputRef.removeEventListener("blur", this.onBlur);
    }
  }

  render({ ref, class: className, children, ...other }) {
    const input = children.find(({ type }) => type === "input");
    const disabled = input.props[".disabled"] || input.props.disabled;

    return html`
      <span
        ref=${combineRefs(this.createRef("ref"), ref)}
        class=${classes(className, mediaInputStyles, textInputStyles)}
        disabled=${disabled}
        @mousedown=${this.focusInput}
        ...${other}
      >
        ${children}
      </span>
    `;
  }
}
