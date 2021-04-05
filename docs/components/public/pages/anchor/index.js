import { html } from "@depository/view";
import { Title, SubTitle, Line } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultAnchor from "./DefaultAnchor.js";

class AnchorPage {
  render() {
    return html`
      <${Title}>Anchor<//>
      <${SubTitle}>
        The Anchor is a link that helps users navigate from one location to
        another.
      <//>
      <${Line} />
      <h2>How to use it</h2>
      <h3>Default</h3>
      <p>
        The Anchor component is a styled<code class="inline">${"<a>"}</code>tag.
        It accepts all standard anchor attributes and signals a way to navigate.
      </p>
      <${Example} src=${new URL("./DefaultAnchor.js", import.meta.url)}>
        <${DefaultAnchor} />
      <//>
    `;
  }
}

export default AnchorPage;
