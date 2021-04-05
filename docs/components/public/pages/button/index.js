import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultButton from "./DefaultButton.js";
import ButtonTypes from "./ButtonTypes.js";
import StretchedButton from "./StretchedButton.js";
import DisabledButton from "./DisabledButton.js";

class ButtonPage {
  render() {
    return html`
      <${Title}>Button<//>
      <${SubTitle}>
        Buttons let users take action quickly. Use a Button to enable actions or
        decisions that are important to a user's workflow.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of a Button component.</p>
      <${Example} src=${new URL("./DefaultButton.js", import.meta.url)}>
        <${DefaultButton} />
      <//>
      <${Heading} level="3">Type<//>
      <p>There are 3 types of Buttons: default, primary, and basic.</p>
      <${Example} src=${new URL("./ButtonTypes.js", import.meta.url)}>
        <${ButtonTypes} />
      <//>
      <${Heading} level="3">Stretched<//>
      <p>Buttons can stretch to fill the width of their container.</p>
      <${Example}
        stretched
        src=${new URL("./StretchedButton.js", import.meta.url)}
      >
        <${StretchedButton} />
      <//>
      <${Heading} level="3">Disabled<//>
      <p>
        A disabled Button prevents user interaction. It doesn’t appear in the
        tab order, can’t receive focus, and may not read aloud by a
        screenreader.
      </p>
      <${Example} src=${new URL("./DisabledButton.js", import.meta.url)}>
        <${DisabledButton} />
      <//>
    `;
  }
}

export default ButtonPage;