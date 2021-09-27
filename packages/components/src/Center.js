import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = ({ stretched }) => css`
  & {
    display: flex;
    ${stretched ? "width: 100%; height: 100%; flex:1;" : ""}
    justify-content: center;
    align-items: center;
  }
`;

export class Center {
  static defaultProps() {
    return { stretched: false };
  }

  render({ className, children, stretched, ...other }) {
    return html`
      <div className=${classes(styles({ stretched }), className)} ...${other}>
        ${children}
      </div>
    `;
  }
}
