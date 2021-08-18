import { html } from "@depository/view";

import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@depository/styleguide";

import DefaultCheckbox from "./DefaultCheckbox.js";
import Disabled from "./Disabled.js";
import Labels from "./Labels.js";

class CheckboxPage {
  render() {
    return html`
      <${Title}>Checkbox<//>
      <${SubTitle}>
        A Checkbox lets users select and unselect options from a list.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A Checkbox’s label is part of its touch target.</p>
      <${Example} src=${new URL("./DefaultCheckbox.js", import.meta.url)}>
        <${DefaultCheckbox} />
      <//>
      <${Heading} level="3">Disabled<//>
      <p>
        A disabled Checkbox prevents user interaction. It doesn’t appear in the
        tab order, can’t receive focus, and may not be read aloud by a
        screenreader.
      </p>
      <${Example} src=${new URL("./Disabled.js", import.meta.url)}>
        <${Disabled} />
      <//>
      <${Heading} level="3">Labels<//>
      <p>You can associate a label with a checkbox.</p>
      <${Example} src=${new URL("./Labels.js", import.meta.url)}>
        <${Labels} />
      <//>
    `;
  }
}

export default CheckboxPage;
