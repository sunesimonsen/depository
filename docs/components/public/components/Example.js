import { html } from "@depository/view";
import { escapePath } from "@depository/path";
import { css } from "stylewars";
import { SourceCode } from "./SourceCode.js";
import { IconButton } from "@depository/components";
import { JSFiddleButton } from "./JSFiddleButton.js";

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
        <div class=${previewStyles}>${children}</div>
        <div class=${buttonsStyles}>
          <${JSFiddleButton} src=${src} />
          <${IconButton} basic @click=${this.onToggleSource}>
            <${MarkupStroke16Icon} />
          <//>
        </div>
        ${sourceVisible && html`<${SourceCode} src=${src} />`}
      </div>
    `;
  }
}