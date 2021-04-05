import { html } from "@depository/view";
import { Stories } from "./Stories.js";
import { DefaultLayout } from "./DefaultLayout.js";
import { CommentAndAnswers } from "./CommentAndAnswers.js";

export class RootView {
  data() {
    return { route: "routing.route" };
  }

  render({ route }) {
    switch (route) {
      case "answer":
        return html`<${DefaultLayout}><${CommentAndAnswers} /><//>`;

      default:
        return html`<${DefaultLayout}><${Stories} /><//>`;
    }
  }
}
