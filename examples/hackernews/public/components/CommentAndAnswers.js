import { html } from "@depository/view";
import { css } from "stylewars";
import { Comment } from "./Comment.js";
import { Answers } from "./Answers.js";
import { CloseAnswers } from "./CloseAnswers.js";

const containerStyles = css`
  & {
    margin: 0 auto;
    width: 90vw;
    box-sizing: border-box;
    max-width: 800px;
  }
`;

const itemStyles = css`
  & {
    background: white;
    padding: 20px;
    border-radius: 4px;
  }
`;

const answerStyles = css`
  & {
    padding-top: 25px;
    padding-left: 15px;
  }
`;

export class CommentAndAnswers {
  data({ id }) {
    return {
      id: "routing.params.commentId",
    };
  }

  render({ id }) {
    return html`
      <div class=${containerStyles}>
        <div class=${itemStyles}>
          <${Comment} id=${id} />
          <div class=${answerStyles}>
            <${Answers} id=${id} />
          </div>
          <${CloseAnswers} />
        </div>
      </div>
    `;
  }
}
