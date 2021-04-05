import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export class Center {
  render({ children }) {
    return html`<div class=${styles}>${children}</div>`;
  }
}
