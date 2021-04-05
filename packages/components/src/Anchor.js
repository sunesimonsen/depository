import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    text-decoration: none;
    color: rgb(31, 115, 183);
  }

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
    color: rgb(20, 74, 117);
  }

  &:active {
    text-decoration: underline;
    color: rgb(15, 53, 84);
  }
`;

export class Anchor {
  render({ children, class: className, ...other }) {
    return html`
      <a class=${classes(styles, className)} ...${other}>${children}</a>
    `;
  }
}
