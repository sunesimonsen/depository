import { html } from "@depository/view";
import { Anchor } from "@depository/components";
import { Title, SubTitle, Line } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultColumnLayout from "./DefaultColumnLayout.js";
import NumberOfColumns from "./NumberOfColumns.js";
import ColumnTemplate from "./ColumnTemplate.js";
import AlignItems from "./AlignItems.js";
import JustifyItems from "./JustifyItems.js";
import Gap from "./Gap.js";
import Stretched from "./Stretched.js";

class ColumnLayoutPage {
  render() {
    return html`
      <${Title}>Column layout<//>
      <${SubTitle}>A simple grid based column layout.<//>
      <${Line} />
      <h2>How to use it</h2>
      <h3>Default</h3>
      <p>
        The column layout uses one column by default with a gap of
        <code class="inline">1em</code>.
      </p>
      <${Example} src=${new URL("./DefaultColumnLayout.js", import.meta.url)}>
        <${DefaultColumnLayout} />
      <//>
      <h3>Columns</h3>
      <p>
        The number of columns can be specified using the
        <code class="inline">columns</code> property.
      </p>
      <${Example} src=${new URL("./NumberOfColumns.js", import.meta.url)}>
        <${NumberOfColumns} />
      <//>
      <p>
        If you need more control over the columns, you can specify
        <${Anchor}
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
          target="_blank"
        >
          grid-template-columns
        <//>
        .
      </p>
      <${Example} src=${new URL("./ColumnTemplate.js", import.meta.url)}>
        <${ColumnTemplate} />
      <//>
      <h3>Gap</h3>
      <p>
        Control the gap between the children with the
        <code class="inline">gap</code> property.
      </p>
      <${Example} src=${new URL("./Gap.js", import.meta.url)}>
        <${Gap} />
      <//>
      <h3>Align items</h3>
      <p>
        You can control <code class="inline">align-items</code> using the
        <code class="inline">alignItems</code> property. The default value is
        <code class="inline">center</code>.
      </p>
      <${Example} src=${new URL("./AlignItems.js", import.meta.url)}>
        <${AlignItems} />
      <//>
      <h3>
        Justify items
        <h3></h3>
      </h3>
      <p>
        Similarly you can control
        <code class="inline">justify-items</code> using the
        <code class="inline">justifyItems</code> property. The default value is
        <code class="inline">center</code>.
      </p>
      <${Example} src=${new URL("./JustifyItems.js", import.meta.url)}>
        <${JustifyItems} />
      <//>
      <h3>Stretched</h3>
      <p>The column layout can stretch to fill the width of their container.</p>
      <${Example} src=${new URL("./Stretched.js", import.meta.url)}>
        <${Stretched} />
      <//>
    `;
  }
}

export default ColumnLayoutPage;
