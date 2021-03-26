import { html } from "@depository/view";
import { css } from "stylewars";
import { Comment } from "./Comment.js";
import { storyById } from "../models/news.js";

const styles = css`
  & {
    padding: 0;
    margin: 0;
  }
`;

export class Comments {
  data({ id }) {
    return {
      story: storyById(id),
    };
  }

  render({ story }) {
    const comments = story.kids.map(
      (commentId) => html`<${Comment} showAnswersLink id=${commentId} />`
    );

    return html`
      <ul class=${styles}>
        ${comments}
      </ul>
    `;
  }
}
