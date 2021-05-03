import { html } from "@depository/view";
import { DefaultLayout } from "./DefaultLayout.js";
import { PageContainer } from "./PageContainer.js";

export class RootView {
  data() {
    return {
      route: "routing.route",
      params: "routing.params",
    };
  }

  render({ route, params }) {
    switch (route) {
      case "page":
        return html`<${DefaultLayout}><${PageContainer} id=${params.id} /><//>`;
      default:
        return html`<${DefaultLayout}><${PageContainer} id="index" /><//>`;
    }
  }
}
