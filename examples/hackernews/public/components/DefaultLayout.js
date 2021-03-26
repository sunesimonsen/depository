import { html } from "@depository/view";
import { css } from "stylewars";
import { TopBar } from "./TopBar.js";

const styles = css`
  & {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
`;

const contentStyles = css`
  & {
    flex: 1;
    overflow-y: auto;
    padding: 20px 0;
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
      <main class=${styles}>
        <${TopBar} />
        <section ref=${this.setContentRef} class=${contentStyles}>
          ${children}
        </section>
      </main>
    `;
  }
}
