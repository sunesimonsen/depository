import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    position: relative;
    overscroll-behavior: contain;
  }
`;

const overflowStyles = (overflow) => css`
  & {
    overflow: ${overflow};
  }
`;

export class ScrollArea {
  render({ overflow = "hidden auto", className, children, ...other }) {
    return html`
      <div
        className=${classes(styles, overflowStyles(overflow), className)}
        ...${other}
      >
        ${children}
      </div>
    `;
  }
}
