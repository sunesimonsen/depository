import { html } from "@depository/view";
import { css } from "stylewars";
import { Story } from "./Story.js";

import {
  topStories,
  loadTopStories,
  loadMoreTopStories,
  loadMoreVisible,
} from "../models/news.js";

const containerStyles = css`
  & {
    margin: 0 auto;
    width: 90vw;
    box-sizing: border-box;
    max-width: 800px;
  }
`;

const listStyles = css`
  & {
    display: grid;
    grid-gap: 8px;
    padding: 0;
    margin: 0;
  }
`;

const buttonsStyles = css`
  & {
    margin-top: 20px;
    text-align: center;
  }
`;

const loadMoreStyles = css`
  & {
    border: none;
    background: none;
    color: #666;
    outline: none;
  }
  &:focus-visible {
    outline: blue auto 1px;
  }
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export class Stories {
  constructor() {
    this.loadMore = () => {
      this.dispatch(loadMoreTopStories());
    };
  }

  data() {
    return {
      status: "statuses.topStories",
      topStories,
      loadMoreVisible,
    };
  }

  render({ topStories, loadMoreVisible, status }) {
    if (!status) this.dispatch(loadTopStories());
    if (status !== "ready" || !topStories) return null;

    return html`
      <div className=${containerStyles}>
        <ol className=${listStyles}>
          ${topStories.map((id) => html`<${Story} key=${id} id=${id} />`)}
        </ol>
        ${loadMoreVisible &&
        html`
          <div className=${buttonsStyles}>
            <button onClick=${this.loadMore} className=${loadMoreStyles}>
              Load more
            </button>
          </div>
        `}
      </div>
    `;
  }
}
