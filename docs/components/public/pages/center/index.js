import { html } from "@depository/view";
import { Title, SubTitle, Line } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultCenter from "./DefaultCenter.js";

class ColumnLayoutPage {
  render() {
    return html`
      <${Title}>Center<//>
      <${SubTitle}>Centering its children using CSS flex layout.<//>
      <${Line} />
      <${Example} src=${new URL("./DefaultCenter.js", import.meta.url)}>
        <${DefaultCenter} />
      <//>
    `;
  }
}

export default ColumnLayoutPage;
