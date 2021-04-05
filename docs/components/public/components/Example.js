import { html } from "@depository/view";
import { escapePath } from "@depository/path";
import { css, classes } from "stylewars";
import { SourceCode } from "./SourceCode.js";
import { IconButton } from "@depository/components";

import MarkupStroke16Icon from "@depository/components/icons/MarkupStroke16Icon";

const styles = css`
  & {
    border: 1px solid rgb(216, 220, 222);
    border-radius: 4px;
    overflow: hidden;
    margin: 2em 0;
  }
`;

const previewStyles = css`
  & {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;

const previewContentStyles = css`
  & {
    display: grid;
    grid-gap: 20px;
  }
`;

const columnStyles = (columns) => css`
  & {
    grid-template-columns: repeat(${columns}, 1fr);
  }
`;

const buttonsStyles = css`
  & {
    background: rgb(248, 249, 249);
    border-top: 1px solid rgb(216, 220, 222);
    border-bottom: 1px solid rgb(216, 220, 222);
    text-align: right;
    padding: 4px 8px;
  }
`;

const stretchedStyles = css`
  & {
    width: 100%;
  }
`;

const sourceVisibleByUrl = (url) =>
  `components.Example.${escapePath(url)}.sourceVisible`;

const toggleSourceVisibility = (url) => ({
  name: "toggleSourceVisibility",
  payload: (cache) => ({
    [sourceVisibleByUrl(url)]: !cache.get(sourceVisibleByUrl(url)),
  }),
});

export class Example {
  constructor() {
    this.onToggleSource = () => {
      this.dispatch(toggleSourceVisibility(this.props.src));
    };
  }

  data({ src }) {
    return {
      sourceVisible: sourceVisibleByUrl(src),
    };
  }

  render({ children, sourceVisible, src, columns = 1, stretched }) {
    return html`
      <div class=${styles}>
        <div class=${previewStyles}>
          <div
            class=${classes(
              previewContentStyles,
              columnStyles(columns),
              stretched && stretchedStyles
            )}
          >
            ${children}
          </div>
        </div>
        <div class=${buttonsStyles}>
          <${IconButton} basic @click=${this.onToggleSource}>
            <${MarkupStroke16Icon} />
          <//>
        </div>
        ${sourceVisible && html`<${SourceCode} src=${src} />`}
      </div>
    `;
  }
}
