import { html } from "../dependencies/view.esm.js";
import { css } from "../dependencies/stylewars.esm.js";

const centeredStyles = css`
  & {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    background: #f5f5f5;
  }
`;

export class NotConnected {
  render() {
    return html`
      <div className=${centeredStyles}>
        <h1>Not connected</h1>
      </div>
    `;
  }
}
