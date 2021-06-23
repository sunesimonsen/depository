import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  &,
  &:after {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  & {
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-indent: -9999em;
    border-width: var(--dc-spinner-border-size, 3px);
    border-style: solid;
    border-color: var(--dc-spinner-background, rgba(0, 0, 0, 0.2));
    border-left-color: var(--dc-spinner-color, #1f73b7);
    transform: translateZ(0);
    animation: &(rotate) 0.9s infinite linear;
  }

  @keyframes &(rotate) {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export class Spinner {
  render({ class: className }) {
    return html`
      <div class=${classes(styles, className)} role="progressbar">
        Loading...
      </div>
    `;
  }
}
