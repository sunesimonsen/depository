import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    position: relative;
    --pulse-gap: 2;
    --pulse-dot-size: 0.45em;
    width: calc(4.7 * var(--pulse-dot-size));
    height: var(--pulse-dot-size);
  }

  & div {
    position: absolute;
    top: 0;
    width: var(--pulse-dot-size);
    height: var(--pulse-dot-size);
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 0;
    animation: &(dot1) 0.6s infinite;
  }

  & div:nth-child(2) {
    left: 0;
    animation: &(dot2) 0.6s infinite;
  }

  & div:nth-child(3) {
    left: calc(1.8 * var(--pulse-dot-size));
    animation: &(dot2) 0.6s infinite;
  }

  & div:nth-child(4) {
    left: calc(3.6 * var(--pulse-dot-size));
    animation: &(dot3) 0.6s infinite;
  }

  @keyframes &(dot1) {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes &(dot3) {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes &(dot2) {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(calc(1.8 * var(--pulse-dot-size)), 0);
    }
  }
`;

export class Pulse {
  render({ class: className }) {
    return html`
      <div class=${classes(styles, className)} role="progressbar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }
}
