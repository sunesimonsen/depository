import { html } from "@depository/view";
import { css } from "stylewars";
import { Spinner, ColumnLayout, Center } from "@depository/components";

const firstSpinner = css`
  & {
    --dc-spinner-size: 20px;
    --dc-spinner-border-size: 3px;
    --dc-spinner-background: #daeded;
    --dc-spinner-color: #ffb057;
  }
`;

const secondSpinner = css`
  & {
    --dc-spinner-size: 35px;
    --dc-spinner-border-size: 2px;
  }
`;

const thirdSpinner = css`
  & {
    --dc-spinner-background: rgba(255, 0, 0, 0.2);
    --dc-spinner-color: rgba(255, 0, 0, 0.7);
  }
`;

const fourthSpinner = css`
  & {
    --dc-spinner-size: 70px;
    --dc-spinner-border-size: 4px;
    --dc-spinner-background: #ffb057;
    --dc-spinner-color: #5eae91;
  }
`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto auto auto" >
          <${Spinner} class=${firstSpinner} />
          <${Spinner} class=${secondSpinner} />
          <${Spinner} class=${thirdSpinner}/>
          <${Spinner} class=${fourthSpinner}/>
        <//>
      <//
    `;
  }
}
