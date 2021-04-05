import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    position: relative;
    animation: 750ms linear 0s 1 normal none running &(fade-in);
    border-radius: 4px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 0.6;
    background-color: rgba(47, 57, 65, 0.1);
  }

  @keyframes &(fade-in) {
    0%,
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:before {
    position: absolute;
    top: 0px;
    width: 1000px;
    height: 100%;
    content: "";
    left: -1800px;
    animation: 1.5s ease-in-out 300ms infinite normal none running &(slide);
    background-image: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
  }

  @keyframes &(slide) {
    100% {
      left: 100%;
    }
  }
`;

export class Skeleton {
  render({ class: className }) {
    return html`<div class=${classes(styles, className)}>${"\u00A0"}</div>`;
  }
}
