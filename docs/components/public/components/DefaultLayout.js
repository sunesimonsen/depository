import { html } from "@depository/view";
import { css } from "stylewars";
import { BorderLayout } from "@depository/components";
import { TopBar } from "./TopBar.js";
import { Sidebar } from "./Sidebar.js";
import { ErrorBoundary } from "./ErrorBoundary.js";

const rootStyles = css`
  & {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    font-family: Verdana, Geneva, sans-serif;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif;

    color: rgb(3, 54, 61);
  }
`;

const mainStyles = css`
  & {
    grid-area: main;
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  & h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 44px;
    font-size: 36px;
    font-weight: 600;
  }

  & h3 {
    margin-bottom: 12px;
    line-height: 32px;
    font-size: 26px;
  }

  & code {
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
  }

  & code.inline {
    line-height: normal;
    font-size: calc(1em - 1px);
    direction: ltr;
    border-radius: 2px;
    padding: 1.5px;
    background-color: rgb(233, 235, 237);
    color: rgb(73, 84, 92);
    margin: 0 0.7ex;
  }
`;

export class DefaultLayout {
  constructor() {
    this.setContentRef = (ref) => {
      this.contentRef = ref;
    };
  }

  data() {
    return {
      scrollToTop: "routing.location.state.scrollToTop",
    };
  }

  didUpdate() {
    if (this.contentRef && this.props.scrollToTop) {
      this.contentRef.scrollTo(0, 0);
      this.context.router.navigate({ state: null, replace: true });
    }
  }

  render({ children }) {
    return html`
      <${BorderLayout} stretched class=${rootStyles}>
        <${TopBar} />
        <${Sidebar}>${this.context.navigation}<//>
        <main class=${mainStyles} ref=${this.setContentRef}>
          <${ErrorBoundary}>${children}<//>
        </main>
      <//>
    `;
  }
}
