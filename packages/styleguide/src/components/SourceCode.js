/* global Prism */

import { html } from "@depository/view";
import { escapePath } from "@depository/path";
import { css } from "stylewars";
import { Center, Spinner } from "@depository/components";

const statusBySrc = (src) => `statuses.code.${escapePath(src)}`;

const preStyles = css`
  & {
    background: #272822;
    margin: 0 !important;
    border-radius: 0 !important;
  }
`;

const loadingStyles = css`
  & {
    --dc-spinner-background: rgba(255, 255, 255, 0.2);
    background: #23241f;
    height: 200px;
    color: white;
    font-size: 10px;
  }
`;

export class SourceCode {
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
          Prism.highlightAllUnder(this.preRef);
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
      return html` <${Center} className=${loadingStyles}><${Spinner} /><//> `;
    }

    return html`
      <pre
        className=${preStyles}
        ref=${this.createRef("preRef")}
      ><code className="language-js">${this._content}</code></pre>
    `;
  }
}
