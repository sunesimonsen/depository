import { html } from "@depository/view";
import { css } from "stylewars";
import { Comments } from "./Comments.js";
import { CloseComments } from "./CloseComments.js";

const detailsStyles = css`
  & {
    padding-top: 20px;
    padding-left: 15px;
  }
`;

export class Details {
  render({ id }) {
    return html`
      <div className=${detailsStyles}>
        <${Comments} id=${id} />
        <${CloseComments} id=${id} />
      </div>
    `;
  }
}
