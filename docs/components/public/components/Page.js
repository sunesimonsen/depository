import { html } from "@depository/view";
import { css } from "stylewars";

const containerStyles = css`
  & {
    overflow: auto;
  }
`;

const contentStyles = css`
  & {
    max-width: 800px;
    margin: 30px auto;
  }
`;

export class Page {
  render({ children }) {
    return html`
      <div class=${containerStyles}>
        <div class=${contentStyles}>${children}</div>
      </div>
    `;
  }
}

const titleStyles = css`
  & {
    margin-bottom: 12px;
    color: rgb(3, 54, 61);
    line-height: 1.08333;
    font-size: 48px;
    font-weight: 700;
  }
`;

export class Title {
  render({ children }) {
    return html`<h1 class=${titleStyles}>${children}</h1>`;
  }
}

const subTitleStyles = css`
  & {
    color: rgb(104, 115, 125);
    font-size: 16px;
  }
`;

export class SubTitle {
  render({ children }) {
    return html`<p class=${subTitleStyles}>${children}</p>`;
  }
}

const lineStyles = css`
  & {
    color: rgb(104, 115, 125);
    font-size: 16px;
  }
`;

export class Line {
  render() {
    return html`<hr class=${lineStyles} />`;
  }
}
