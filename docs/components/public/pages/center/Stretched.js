import { html } from "@depository/view";
import { css } from "stylewars";
import { Center, ColumnLayout } from "@depository/components";

const containerStyles = css`
  & {
    border: thin solid gray;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
`;

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="2" stretched>
        <${Center} className=${containerStyles}>Not stretched<//>
        <${Center} stretched className=${containerStyles}>Stretched<//>
      <//>
    `;
  }
}
