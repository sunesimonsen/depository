import { html } from "@depository/view";
import { Button, me2, ms1, Center, ColumnLayout } from "@depository/components";
import ChevronDownStroke12Icon from "@depository/components/icons/ChevronDownStroke12Icon";
import LifesaverStroke16Icon from "@depository/components/icons/LifesaverStroke16Icon";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto">
          <${Button}>
            <${LifesaverStroke16Icon} className=${me2} />
            Get Help
          <//>
          <${Button}>
            Menu
            <${ChevronDownStroke12Icon} className=${ms1} />
          <//>
        <//>
      <//>
    `;
  }
}
