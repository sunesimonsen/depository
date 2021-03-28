/* global hljs */

import { html } from "@depository/view";
import { escapePath } from "@depository/path";
import { css } from "stylewars";

const statusBySrc = (src) => `statuses.code.${escapePath(src)}`;

const preStyles = css`
  & {
    padding: 0;
    margin: 0;
    background: #23241f;
  }
`;

const codeStyles = css`
  & {
    padding: 16px !important;
  }
`;

const loadingStyles = css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #23241f;
    height: 200px;
    color: white;
  }
`;

export class SourceCode {
  constructor() {
    this._setCodeRef = (ref) => {
      this._codeRef = ref;
    };
  }

  data({ src }) {
    return { status: statusBySrc(src) };
  }

  _loadComponent() {
    const src = this.props.src;

    this.dispatch({
      name: `Loading ${src}`,
      payload: { [statusBySrc(src)]: "loading" },
    });

    return fetch(src)
      .then(async (response) => {
        this._content = await response.text();

        this.dispatch({
          name: `Ready ${src}`,
          payload: { [statusBySrc(src)]: "ready" },
        });

        setTimeout(() => {
          hljs.highlightElement(this._codeRef);
        }, 0);
      })
      .catch((e) => {
        console.error(e);
        this.dispatch({
          name: `Failed ${src}`,
          payload: { [statusBySrc(src)]: "failed" },
        });
      });
  }

  didMount() {
    this._loadComponent();
  }

  didUpdate(prevProps) {
    if (this.props.src !== prevProps.src) {
      this._loadComponent();
    }
  }

  render({ src, status }) {
    if (status === "failed") {
      throw new Error(`Component ${src} could not be loaded`);
    }

    if (status !== "ready") {
      return html` <div class=${loadingStyles}>Loading...</div> `;
    }

    return html`
      <pre class=${preStyles}><code class=${codeStyles} ref=${this
        ._setCodeRef}>${this._content}</code></pre>
    `;
  }
}
