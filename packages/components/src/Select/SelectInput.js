import { html } from "@depository/view";
import ChevronDownStroke12Icon from "../icons/ChevronDownStroke12Icon.js";
import { ms1 } from "../spacing.js";
import { MediaInput } from "../MediaInput.js";

const inputProps = [
  "id",
  "role",
  "@blur",
  "value",
  ".value",
  "disabled",
  ".disabled",
];

const isInputProp = (name) =>
  name.startsWith("aria-") || inputProps.includes(name);

const filterProps = (props, predicate) =>
  Object.fromEntries(Object.entries(props).filter(([key]) => predicate(key)));

export class SelectInput {
  render({ children, ...other }) {
    const containerProps = filterProps(other, (k) => !isInputProp(k));
    const inputProps = filterProps(other, isInputProp);

    return html`
      <${MediaInput} ...${containerProps}>
        <span data-label>${children}</span>
        <input type="text" ...${inputProps} />
        <${ChevronDownStroke12Icon} class=${ms1} />
      <//>
    `;
  }
}
