import { html } from "@depository/view";
import { css } from "stylewars";
import StarStroke16Icon from "@depository/components/icons/StarStroke16Icon";
import StarFill16Icon from "@depository/components/icons/StarFill16Icon";

const redStyles = css`
  & {
    color: red;
  }
`;

export default class Example {
  render() {
    return html`
      <${StarStroke16Icon} />
      <${StarFill16Icon} />
      <${StarStroke16Icon} class=${redStyles} />
      <${StarFill16Icon} class=${redStyles} />
    `;
  }
}
