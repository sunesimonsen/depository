import { html } from "@depository/view";

import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@depository/styleguide";

import DefaultSwitch from "./DefaultSwitch.js";
import Disabled from "./Disabled.js";
import Labels from "./Labels.js";

class SwitchPage {
  render() {
    return html`
      <${Title}>Switch<//>
      <${SubTitle}>
        A Switch lets users turn something on and off like a light switch.
        Unlike a Checkbox, which is used for selection, a Toggle is used for
        activation.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A Switch’s label is part of its touch target.</p>
      <${Example} src=${new URL("./DefaultSwitch.js", import.meta.url)}>
        <${DefaultSwitch} />
      <//>
      <${Heading} level="3">Disabled<//>
      <p>
        A disabled Switch prevents user interaction. It doesn’t appear in the
        tab order, can’t receive focus, and may not read aloud by a
        screenreader.
      </p>
      <${Example} src=${new URL("./Disabled.js", import.meta.url)}>
        <${Disabled} />
      <//>
      <${Heading} level="3">Labels<//>
      <p>You can associate a label with a Switch.</p>
      <${Example} src=${new URL("./Labels.js", import.meta.url)}>
        <${Labels} />
      <//>
    `;
  }
}

export default SwitchPage;
