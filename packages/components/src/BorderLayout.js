import { html } from "@depository/view";
import { css, classes } from "stylewars";

const containerStyles = ({ gap, stretched }) => css`
  & {
    display: ${stretched ? "grid" : "inline-grid"};
    ${stretched ? "width: 100%; height: 100%;flex:1;" : ""}
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "top top top"
      "start main end"
      "bottom bottom bottom";
  }
`;

export class BorderLayout {
  render({ class: className, stretched, gap = "0", children, ...other }) {
    return html`
      <div
        class=${classes(containerStyles({ stretched }), className)}
        ...${other}
      >
        ${children}
      </div>
    `;
  }
}
