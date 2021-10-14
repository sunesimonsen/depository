import { html } from "@depository/view";
import { Link } from "@nano-router/depository-view";
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
    return html`<${Link} className=${styles} ...${other}>${children}<//>`;
  }
}
