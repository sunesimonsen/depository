import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export class Center {
  render({ class: className, children, ...other }) {
    return html`<div class=${classes(styles, className)} ...${other}>
      ${children}
    </div>`;
  }
}
