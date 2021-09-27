import { html } from "@depository/view";
import { css } from "stylewars";
import { Skeleton } from "./Skeleton.js";
import { loadComment, commentById, answerCount } from "../models/news.js";
import { Html } from "./Html.js";
import { LinkButton } from "./LinkButton.js";
import { formatRelativeHours } from "../utils/time.js";

const styles = css`
  & {
    list-style-type: none;
    font-size: smaller;
  }

  & p,
  & pre {
    margin: 0.5em 0;
  }

  & pre {
    font-size: larger;
  }

  & + & {
    margin-top: 15px;
    border-top: thin solid #ccc;
    padding-top: 15px;
  }
`;

const bylineStyles = css`
  & {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    color: grey;
    margin-top: 5px;
  }
`;

class CommentAndAnswersLink {
  data({ commentId }) {
    return {
      count: answerCount(commentId),
    };
  }

  render({ storyId, commentId, count }) {
    if (count > 0) {
      return html`
        <${LinkButton}
          route="answer"
          params=${{ storyId, commentId }}
          state=${{ scrollToTop: true }}
        >
          ${count} answers
        <//>
      `;
    }
  }
}

export class Comment {
  data({ id }) {
    return {
      comment: commentById(id),
      status: `statuses.comment.${id}`,
    };
  }

  render({ id, comment, status, showAnswersLink }) {
    if (!status) this.dispatch(loadComment(id));
    if (status !== "ready")
      return html`
        <li className=${styles}>
          <div><${Skeleton} /></div>
          <div><${Skeleton} /></div>
          <div><${Skeleton} /></div>
        </li>
      `;

    if (!comment) return null;

    return html`
      <li className=${styles}>
        <div>
          <${Html}>${comment.text}<//>
        </div>
        <div className=${bylineStyles}>
          <span>by ${comment.by}</span>
          <span>${formatRelativeHours(comment.time)}</span>
          ${showAnswersLink &&
          html`<${CommentAndAnswersLink}
            storyId=${comment.parent}
            commentId=${comment.id}
          />`}
        </div>
      </li>
    `;
  }
}
