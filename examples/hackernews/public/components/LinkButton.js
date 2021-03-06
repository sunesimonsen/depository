import { html } from "@depository/view";
import { Link } from "@depository/nano-router-plugin";
import { css } from "stylewars";

const styles = css`
  & {
    color: grey;
    text-decoration: none;
  }

  &:hover,
  &:active {
    color: black;
  }
`;

export class LinkButton {
  render({ children, ...other }) {
    return html`<${Link} class=${styles} ...${other}>${children}<//>`;
  }
}
