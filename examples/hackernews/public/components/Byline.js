import { html } from "@depository/view";
import { css } from "stylewars";
import { LinkButton } from "./LinkButton.js";
import { formatRelativeHours } from "../utils/time.js";
import { storyById } from "../models/news.js";

const styles = css`
  & {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
    color: grey;
  }
`;

class CommentsLink {
  data({ id }) {
    return {
      count: `${storyById(id)}.descendants`,
    };
  }

  render({ id, count }) {
    if (count > 0) {
      return html`
        <${LinkButton} route="story" params=${{ id }}>${count} comments<//>
      `;
    }
  }
}

export class Byline {
  data({ id }) {
    return {
      story: storyById(id),
    };
  }

  render({ id, story }) {
    return html`
      <div class=${styles}>
        <span>${story.score} points by ${story.by}</span>
        <span>${formatRelativeHours(story.time)}</span>
        <${CommentsLink} id=${id} />
      </div>
    `;
  }
}
