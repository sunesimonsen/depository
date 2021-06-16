import { html } from "@depository/view";
import { css } from "stylewars";
import { Link } from "@depository/nano-router-plugin";
import { DirectionSwitch } from "./DirectionSwitch.js";

const logo = new URL("../images/logo.png", import.meta.url);

const logoStyles = css`
  & {
    width: 48px;
    height: 48px;
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
    color: black;
    font-size: 24px;
    text-decoration: none;
    padding: 8px 16px;
  }

  &:hover {
    background-color: rgba(47, 57, 65, 0.05);
  }

  &:active {
    background-color: rgba(47, 57, 65, 0.2);
  }
`;

const buttonsStyles = css`
  & {
    justify-self: end;
    padding: 0 20px;
  }
`;

const topBarStyles = css`
  & {
    grid-area: top;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    background: white;
    position: relative;
    box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
    z-index: 1;
  }
`;

export class TopBar {
  render() {
    return html`
      <header class=${topBarStyles}>
        <${Link}
          route="index"
          state=${{ scrollToTop: true }}
          class=${homeStyles}
        >
          <img src=${logo} class=${logoStyles} />
          <span class=${brandStyles}>DEPOSITORY</span>
        <//>
        <div class=${buttonsStyles}>
          <${DirectionSwitch} />
        </div>
      </header>
    `;
  }
}
