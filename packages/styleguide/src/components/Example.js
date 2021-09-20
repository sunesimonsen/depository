import { html } from "@depository/view";
import { escapePath } from "@depository/path";
import { css } from "stylewars";
import { SourceCode } from "./SourceCode.js";
import { IconButton } from "@depository/components";
import { JSFiddleButton } from "./JSFiddleButton.js";
import { ExamplePreview } from "./ExamplePreview.js";
import { ErrorBoundary } from "./ErrorBoundary.js";

import MarkupStroke16Icon from "@depository/components/icons/MarkupStroke16Icon";

const styles = css`
  & {
    border: 1px solid rgb(216, 220, 222);
    border-radius: 4px;
    overflow: hidden;
    margin: 2em 0;
  }
`;

const buttonsStyles = css`
  & {
    display: flex;
    gap: 2px;
    justify-content: flex-end;
    align-items: center;
    background: rgb(248, 249, 249);
    border-top: 1px solid rgb(216, 220, 222);
    border-bottom: 1px solid rgb(216, 220, 222);
    padding: 4px 8px;
  }
`;

const sourceVisibleByUrl = (url) =>
  `components.Example.${escapePath(url)}.sourceVisible`;

const toggleSourceVisibility = (url) => ({
  name: "toggleSourceVisibility",
  inputs: {
    visible: sourceVisibleByUrl(url),
  },
  payload: ({ visible }) => ({
    [sourceVisibleByUrl(url)]: !visible,
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
        <${ExamplePreview}>${children}<//>
        <div class=${buttonsStyles}>
          <${JSFiddleButton} src=${src} />
          <${IconButton} basic onClick=${this.onToggleSource}>
            <${MarkupStroke16Icon} />
          <//>
        </div>
        <${ErrorBoundary} name="source-code">
          ${sourceVisible && html`<${SourceCode} src=${src} />`}
        <//>
      </div>
    `;
  }
}
