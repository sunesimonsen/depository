import { html } from "../dependencies/view.esm.js";
import { Actions } from "./Actions.js";
import { Details } from "./Details.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { NotConnected } from "./NotConnected.js";
import { css } from "../dependencies/stylewars.esm.js";

const mainStyles = css`
  & {
    flex: 1;
    display: grid;
    grid-template-columns: 300px auto;
  }
`;

const isConnected = {
  inputs: { updates: "updates" },
  compute: ({ updates }) => Boolean(updates),
};

export class Root {
  data() {
    return { isConnected };
  }

  willMount() {
    this.dispatch({ type: "connect" });
  }

  render({ isConnected }) {
    if (!isConnected) {
      return html`<${NotConnected} />`;
    }

    return html`
      <${ErrorBoundary} name="root">
        <main class=${mainStyles}><${Actions} /><${Details} /></main>
      <//>
    `;
  }
}
