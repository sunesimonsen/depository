import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
    box-sizing: border-box;
    border: 1px solid rgb(216, 220, 222);
    border-radius: 4px;
    box-shadow: rgb(23 73 77 / 15%) 0px 20px 30px 0px;
    background-color: white;
  }

  [data-placement="bottom-left"] > &,
  [data-placement="bottom"] > &,
  [data-placement="bottom-right"] > & {
    animation: &(slide-down) 100ms ease-out;
  }

  [data-placement="top-left"] > &,
  [data-placement="top"] > &,
  [data-placement="top-right"] > & {
    animation: &(slide-up) 100ms ease-out;
  }

  [data-placement="left-top"] > &,
  [data-placement="left"] > &,
  [data-placement="left-bottom"] > & {
    animation: &(slide-left) 100ms ease-out;
  }

  [data-placement="right-top"] > &,
  [data-placement="right"] > &,
  [data-placement="right-bottom"] > & {
    animation: &(slide-right) 100ms ease-out;
  }

  @keyframes &(slide-down) {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes &(slide-up) {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes &(slide-right) {
    0% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes &(slide-left) {
    0% {
      transform: translateX(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export class MenuPopup {
  render({ children, ...other }) {
    return html`
      <div role="menu" className=${styles} ...${other}>${children}</div>
    `;
  }
}
