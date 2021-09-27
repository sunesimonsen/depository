import { html } from "@depository/view";
import { css } from "stylewars";
import { Comment } from "./Comment.js";
import { commentById } from "../models/news.js";

const styles = css`
  & {
    padding: 0;
    margin: 0;
  }
`;

export class Answers {
  data({ id }) {
    return {
      comment: commentById(id),
      status: `statuses.comment.${id}`,
    };
  }

  render({ comment }) {
    if (!comment) return null;

    const answers = comment.kids.map(
      (commentId) => html`<${Comment} showAnswersLink id=${commentId} />`
    );

    return html`
      <ul className=${styles}>
        ${answers}
      </ul>
    `;
  }
}
