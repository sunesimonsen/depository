import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  }

  & + label {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    color: white;
    width: 40px;
    height: 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  &:checked:not(:disabled) + label {
    background-color: rgb(31, 115, 183);
  }

  & + label:before {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    background: white;
    border-radius: 100%;
    transition: left 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s;
  }

  &:checked + label:before {
    left: calc(40px - 12px - 4px);
  }

  [dir="rtl"] &:checked + label:before {
    left: 4px;
  }

  &:not(:checked):not(:disabled) + label {
    background-color: rgb(135, 146, 157);
  }

  &:not(:checked) + label:before {
    left: 4px;
  }

  [dir="rtl"] &:not(:checked) + label:before {
    left: calc(40px - 12px - 4px);
  }

  &:not(:checked):not(:disabled) + label:hover {
    background-color: rgb(104, 115, 125);
  }

  &:checked:not(:disabled) + label:hover {
    background-color: rgb(20, 74, 117);
  }

  &:focus-visible + label {
    box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
  }

  &:disabled,
  &:disabled + label {
    cursor: default;
  }

  &:disabled + label {
    background-color: rgb(233, 235, 237);
  }
`;

export class Switch {
  render({ id, className, indeterminate, checked, ...other }) {
    return html`
      <input
        type="checkbox"
        id=${id}
        className=${classes(className, styles)}
        checked=${checked}
        .indeterminate=${indeterminate}
        ...${other}
      />
      <label for=${id}></label>
    `;
  }
}
