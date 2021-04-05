import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultIconButton from "./DefaultIconButton.js";
import IconButtonTypes from "./IconButtonTypes.js";
import IconButtonShapes from "./IconButtonShapes.js";

class IconButtonPage {
  render() {
    return html`
      <${Title}>Icon button<//>
      <${SubTitle}>
        Icon buttons (like Buttons) let users take action. They are used for
        repeated or persistent actions on a page and lack visible labels to
        simplify the UI.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of an Icon button component.</p>
      <${Example} src=${new URL("./DefaultIconButton.js", import.meta.url)}>
        <${DefaultIconButton} />
      <//>
      <${Heading} level="3">Type<//>
      <p>
        Icon buttons have 3 types: basic, outline, and primary. The default type
        is basic.
      </p>
      <${Example} src=${new URL("./IconButtonTypes.js", import.meta.url)}>
        <${IconButtonTypes} />
      <//>
      <${Heading} level="3">Shape<//>
      <p>Icon buttons are squares by default, but they can be circular too.</p>
      <${Example} src=${new URL("./IconButtonShapes.js", import.meta.url)}>
        <${IconButtonShapes} />
      <//>
    `;
  }
}

export default IconButtonPage;
