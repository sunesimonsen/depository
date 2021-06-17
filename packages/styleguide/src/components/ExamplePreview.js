import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
    padding: 20px;
  }
`;

export class ExamplePreview {
  data() {
    return { dir: "global.direction" };
  }

  render({ dir, children }) {
    return html`<div dir=${dir} class=${styles}>${children}</div>`;
  }
}
