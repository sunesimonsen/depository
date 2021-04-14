import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultPopup from "./DefaultPopup.js";
import Margins from "./Margins.js";
import Placement from "./Placement.js";
import PopupFlip from "./PopupFlip.js";
import Stretch from "./Stretch.js";

class AnchorPage {
  render() {
    return html`
      <${Title}>Popup<//>
      <${SubTitle}>
        A popup is an absolutely positioned element stay next to another element
        on the page. For example, you might want a tooltip or dialog to open,
        and remain, next to the relevant item on the page.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        You provide it with an anchor and it position itself relative to the
        anchor
      </p>
      <${Example} src=${new URL("./DefaultPopup.js", import.meta.url)}>
        <${DefaultPopup} />
      <//>
      <${Heading} level="3">Margins<//>
      <p>Position the popup relative to the anchor plus a given margin.</p>
      <${Example} src=${new URL("./Margins.js", import.meta.url)}>
        <${Margins} />
      <//>
      <${Heading} level="3">Placement<//>
      <p>You can specify the placement of the popup relative to the anchor</p>
      <${Example} src=${new URL("./Placement.js", import.meta.url)}>
        <${Placement} />
      <//>
      <p>It is also possible to stretch the popup to the size of the anchor.</p>
      <${Example} src=${new URL("./Stretch.js", import.meta.url)}>
        <${Stretch} />
      <//>
      <${Heading} level="3">Overflow flip<//>
      <p>
        You can prevent the popup from overflowing a container by using the
        PopupFlip plugin.
      </p>
      <${Example} src=${new URL("./PopupFlip.js", import.meta.url)}>
        <${PopupFlip} />
      <//>
    `;
  }
}

export default AnchorPage;
