import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Anchor } from "@depository/components";
import { Example } from "../../components/Example.js";
import DefaultMenu from "./DefaultMenu.js";
import NestedMenu from "./NestedMenu.js";
import Placement from "./Placement.js";
import Flexibility from "./Flexibility.js";

class AnchorPage {
  render() {
    return html`
      <${Title}>Menu<//>
      <${SubTitle}>
        Menus help users invoke a single action from a list of available
        options.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        Works in combination with a Trigger to display a list of menu items.
      </p>
      <${Example} src=${new URL("./DefaultMenu.js", import.meta.url)}>
        <${DefaultMenu} />
      <//>
      <${Heading} level="2">Nested<//>
      <p>
        Menus can contain nested levels for additional categorization of menu
        items.
      </p>
      <${Example} src=${new URL("./NestedMenu.js", import.meta.url)}>
        <${NestedMenu} />
      <//>
      <${Heading} level="2">Placement<//>
      <p>
        Menu placement can be oriented around a trigger element in different
        positions. The default placement is
        <code class="inline">bottom-start</code>. This example demonstrates the
        <code class="inline">top-start</code> placement.
      </p>
      <${Example} src=${new URL("./Placement.js", import.meta.url)}>
        <${Placement} />
      <//>
      <p>
        You can see all of the possible placements in${" "}
        <${Anchor} href="./popup#placement">Popup<//>
      </p>
      <${Heading} level="2">Flexibility<//>
      <p>
        Because the menu just manages the trigger, popup element and children,
        it is possible to make some very custom menus.
      </p>
      <${Example} src=${new URL("./Flexibility.js", import.meta.url)}>
        <${Flexibility} />
      <//>
    `;
  }
}

export default AnchorPage;
