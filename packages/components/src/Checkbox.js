import { html } from "@depository/view";
import { css, classes } from "stylewars";
import CheckSmFill12Icon from "./icons/CheckSmFill12Icon.js";
import DashFill12Icon from "./icons/DashFill12Icon.js";

const styles = css`
  & {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  }

  & + label {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    color: white;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: thin solid white;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }

  &:checked:not(:disabled) + label,
  &:indeterminate:not(:disabled) + label {
    border-color: rgb(31, 115, 183);
    background-color: rgb(31, 115, 183);
  }

  &:not(:checked):not(:indeterminate):not(:disabled) + label {
    border-color: rgb(216, 220, 222);
    background-color: rgb(255, 255, 255);
  }

  & + label &-checked-icon,
  & + label &-dash-icon {
    display: none;
  }

  &:checked + label &-checked-icon {
    display: initial;
  }

  &:indeterminate + label &-checked-icon {
    display: none;
  }

  &:indeterminate + label &-dash-icon {
    display: initial;
  }

  &:not(:checked):not(:indeterminate):not(:disabled) + label:hover {
    border-color: rgb(31, 115, 183);
    background-color: rgba(31, 115, 183, 0.08);
  }

  &:checked:not(:disabled) + label:hover,
  &:indeterminate:not(:disabled) + label:hover {
    border-color: rgb(20, 74, 117);
    background-color: rgb(20, 74, 117);
  }

  &:focus-visible + label {
    border-color: rgb(31, 115, 183);
    box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
  }

  &:disabled,
  &:disabled + label {
    cursor: default;
  }

  &:disabled + label {
    border-color: transparent;
    background-color: rgb(233, 235, 237);
  }
`;

export class Checkbox {
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
      <label for=${id}>
        <${DashFill12Icon} className=${`${styles}-dash-icon`} />
        <${CheckSmFill12Icon} className=${`${styles}-checked-icon`} />
      </label>
    `;
  }
}
