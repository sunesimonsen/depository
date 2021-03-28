import { html } from "@depository/view";
import { Title, SubTitle, Line } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultIconButton from "./DefaultIconButton.js";
import IconButtonTypes from "./IconButtonTypes.js";
import IconButtonShapes from "./IconButtonShapes.js";

class Anchor {
  render() {
    return html`
      <${Title}>Icon button<//>
      <${SubTitle}>
        Icon buttons (like Buttons) let users take action. They are used for
        repeated or persistent actions on a page and lack visible labels to
        simplify the UI.
      <//>
      <${Line} />
      <h2>How to use it</h2>
      <h3>Default</h3>
      <p>The typical usage of an Icon button component.</p>
      <${Example} src=${new URL("./DefaultIconButton.js", import.meta.url)}>
        <${DefaultIconButton} />
      <//>
      <h3>Type</h3>
      <p>
        Icon buttons have 3 types: basic, outline, and primary. The default type
        is basic.
      </p>
      <${Example}
        columns="3"
        src=${new URL("./IconButtonTypes.js", import.meta.url)}
      >
        <${IconButtonTypes} />
      <//>
      <h3>Shape</h3>
      <p>Icon buttons are squares by default, but they can be circular too.</p>
      <${Example}
        columns="3"
        src=${new URL("./IconButtonShapes.js", import.meta.url)}
      >
        <${IconButtonShapes} />
      <//>
    `;
  }
}

export default Anchor;
