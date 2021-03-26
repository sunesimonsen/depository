import { html } from "@depository/view";
import { css } from "stylewars";
import { ReloadButton } from "./ReloadButton.js";
import { Link } from "@depository/nano-router-plugin";

const logo = new URL("../images/y18.gif", import.meta.url);

const logoStyles = css`
  & {
    border: thin solid white;
    width: 20px;
    height: 20px;
  }
`;

const brandStyles = css`
  & {
    margin: 0 10px;
  }
`;

const homeStyles = css`
  & {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 8px 20px;
  }

  &:hover {
    background: rgb(222 90 2);
  }

  &:active {
    background: rgb(195 78 0);
  }
`;

export class TopBar {
  render() {
    return html`
      <header>
        <${Link}
          route="topStories"
          state=${{ scrollToTop: true }}
          class=${homeStyles}
        >
          <img src=${logo} class=${logoStyles} />
          <span class=${brandStyles}>Hacker News</span>
        <//>
        <${ReloadButton} />
      </header>
    `;
  }
}
