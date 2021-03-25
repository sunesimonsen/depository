import { html } from "@depository/view";
import { css } from "stylewars";
import { ReloadButton } from "./ReloadButton.js";

const logo = new URL("../images/y18.gif", import.meta.url);

const headerStyles = css`
  & {
    display: flex;
    align-items: center;
    background: rgb(255, 102, 0);
    color: white;
    padding: 8px 20px;
    position: relative;
  }
`;

const logoStyles = css`
  & {
    border: thin solid white;
  }
`;

const brandStyles = css`
  & {
    margin: 0 10px;
  }
`;

export class TopBar {
  render() {
    return html`
      <header class=${headerStyles}>
        <img src=${logo} class=${logoStyles} />
        <span class=${brandStyles}>Hacker News</span>
        <${ReloadButton} />
      </header>
    `;
  }
}
