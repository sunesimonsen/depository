import { html } from "@depository/view";
import { css } from "stylewars";
import { loadStory, storyById, isExpandedStory } from "../models/news.js";
import { Skeleton } from "./Skeleton.js";
import { Byline } from "./Byline.js";
import { Details } from "./Details.js";

const itemStyles = css`
  & {
    position: relative;
    line-height: 24px;
    list-style-type: none;
    background: white;
    padding: 20px;
    border-radius: 4px;
    overflow: hidden;
  }
`;

const titleStyles = css`
  & {
    display: block;
    font-size: 1.5em;
    line-height: 1.5em;
    color: black;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: gray;
  }

  &:visited {
    color: gray;
  }
`;

const scrollIntoView = (id) => ({
  inputs: {
    scrollIntoView: "routing.location.state.scrollIntoView",
  },
  compute: ({ scrollIntoView }) => scrollIntoView === id,
});

export class Story {
  constructor() {
    this.setRef = (ref) => {
      this.ref = ref;
    };
  }

  data({ id }) {
    return {
      isExpanded: isExpandedStory(id),
      story: storyById(id),
      status: `statuses.story.${id}`,
      scrollIntoView: scrollIntoView(id),
    };
  }

  scrollIntoViewIfNecessary() {
    if (this.ref && (this.props.isExpanded || this.props.scrollIntoView)) {
      this.ref.scrollIntoView(true);
      this.context.router.navigate({ state: null, replace: true });
    }
  }

  didMount() {
    this.scrollIntoViewIfNecessary();
  }

  didUpdate() {
    this.scrollIntoViewIfNecessary();
  }

  render({ id, story, status, isExpanded }) {
    if (!status) this.dispatch(loadStory(id));

    if (status !== "ready") {
      return html`
        <li class=${itemStyles} tabindex="0">
          <div class=${titleStyles}><${Skeleton} /></div>
          <div><${Skeleton} /></div>
        </li>
      `;
    }

    return html`
      <li class=${itemStyles} ref=${this.setRef}>
        <a
          href=${story.url}
          target="_blank"
          class=${titleStyles}
          title=${story.title}
        >
          ${story.title}
        </a>
        <${Byline} id=${id} />
        ${isExpanded && html`<${Details} id=${id} />`}
      </li>
    `;
  }
}
