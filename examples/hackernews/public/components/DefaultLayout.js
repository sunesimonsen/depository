import { html } from "@depository/view";
import { TopBar } from "./TopBar.js";

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
      <main>
        <${TopBar} />
        <section ref=${this.setContentRef} class="content">${children}</section>
      </main>
    `;
  }
}
