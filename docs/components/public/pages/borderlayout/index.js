import { html } from "@depository/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@depository/styleguide";
import DefaultBorderLayout from "./DefaultBorderLayout.js";
import Stretched from "./Stretched.js";
import OmitAreas from "./OmitAreas.js";

class ExamplePage {
  render() {
    return html`
      <${Title}>BorderLayout<//>
      <${SubTitle}>
        The BorderLayout arranges the components to fit in the five ares: top,
        start, end, bottom, and main. Each area can contain only one component.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>Having components in all the areas.</p>
      <${Example} src=${new URL("./DefaultBorderLayout.js", import.meta.url)}>
        <${DefaultBorderLayout} />
      <//>
      <${Heading} level="3">Stretched<//>
      <p>The border layout can stretch to fill the surrouding container.</p>
      <${Example} src=${new URL("./Stretched.js", import.meta.url)}>
        <${Stretched} />
      <//>
      <${Heading} level="3">Omiting areas<//>
      <p>You can omit areas to produce different layouts.</p>
      <${Example} src=${new URL("./OmitAreas.js", import.meta.url)}>
        <${OmitAreas} />
      <//>
    `;
  }
}

export default ExamplePage;
