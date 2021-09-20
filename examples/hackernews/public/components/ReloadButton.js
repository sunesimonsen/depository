import { html } from "@depository/view";
import { css } from "stylewars";
import { ReloadIcon } from "./icons.js";
import { reloadTopStories } from "../models/news.js";

const reloadStyles = css`
  & {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    color: white;
    border: none;
    height: 36px;
    width: 36px;
    cursor: pointer;
    outline: none;
    padding: 10px;
  }

  &:hover {
    background: rgb(222 90 2);
  }

  &:active {
    background: rgb(195 78 0);
  }
`;

const loadingStyles = css`
  @keyframes spin {
    100% {
      rotate(360deg);
      transform: rotate(360deg);
    }
  }

  & {
    animation: spin 2s linear infinite;
    animation-delay: 0.5s;
  }
`;

export class ReloadButton {
  constructor() {
    this.reload = () => {
      this.dispatch(reloadTopStories());
    };
  }

  data() {
    return {
      status: "statuses.reloadTopStories",
    };
  }

  render({ status }) {
    return html`
      <button onClick=${this.reload} class=${reloadStyles} title="refresh">
        <${ReloadIcon} class=${status === "loading" && loadingStyles} />
      </button>
    `;
  }
}
