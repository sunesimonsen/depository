import { html } from "@depository/view";
import { CloseButton } from "./CloseButton.js";

export class CloseComments {
  constructor() {
    this.onClick = () => {
      this.context.router.navigate({
        route: "topNews",
        state: { scrollIntoView: this.props.id },
      });
    };
  }

  render() {
    return html`<${CloseButton} @click=${this.onClick} />`;
  }
}
