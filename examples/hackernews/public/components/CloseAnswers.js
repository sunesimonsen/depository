import { html } from "@depository/view";
import { CloseButton } from "./CloseButton.js";

export class CloseAnswers {
  constructor() {
    this.onClick = () => {
      this.context.router.navigate({
        route: "topStories",
        state: { scrollIntoView: Number(this.props.id) },
      });
    };
  }

  data() {
    return {
      id: "routing.params.storyId",
    };
  }

  render() {
    return html`<${CloseButton} @click=${this.onClick} />`;
  }
}
