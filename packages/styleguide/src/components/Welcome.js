import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
  }
`;

export class Welcome {
  render() {
    return html` <div className=${styles}>Hello</div> `;
  }
}
