import { html } from "@depository/view";
import { IconButton } from "@depository/components";
import Box3dStroke16Icon from "@depository/components/icons/Box3dStroke16Icon";

export default class Example {
  render() {
    return html`
      <${IconButton}><${Box3dStroke16Icon} /><//>
      <${IconButton} primary><${Box3dStroke16Icon} /><//>
      <${IconButton} basic><${Box3dStroke16Icon} /><//>
      <${IconButton} pill><${Box3dStroke16Icon} /><//>
      <${IconButton} primary pill><${Box3dStroke16Icon} /><//>
      <${IconButton} basic pill><${Box3dStroke16Icon} /><//>
    `;
  }
}
