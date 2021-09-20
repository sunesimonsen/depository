import { html } from "../dependencies/view.esm.js";
import { css } from "../dependencies/stylewars.esm.js";
import { Action } from "./Action.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { Sidebar } from "./Sidebar.js";

const navStyles = css`
  & {
    display: grid;
  }
`;

const focus = (element) => element && element.focus();

export class Actions {
  constructor() {
    this.onKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        focus(e.target.previousElementSibling);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        focus(e.target.nextElementSibling);
      }
    };
  }

  data() {
    return {
      updates: "updates",
    };
  }

  render({ updates }) {
    return html`
      <${ErrorBoundary} name="actions">
        <${Sidebar}>
          <nav class=${navStyles} onKeyDown=${this.onKeyDown}>
            ${updates.map((_, index) => html`<${Action} index=${index} />`)}
          </nav>
        <//>
      <//>
    `;
  }
}
