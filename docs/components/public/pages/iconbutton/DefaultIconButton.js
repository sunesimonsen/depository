import { html } from "@depository/view";
import { IconButton, Center } from "@depository/components";
import Box3dStroke16Icon from "@depository/components/icons/Box3dStroke16Icon";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${IconButton}><${Box3dStroke16Icon} /><//>
      <//>
    `;
  }
}
