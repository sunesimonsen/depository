import { html } from "../dependencies/view.esm.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs.js";
import { css } from "../dependencies/stylewars.esm.js";
import { JSONView } from "./JSONView.js";

const detailsStyles = css`
  & {
    overflow-y: auto;
    padding: 20px;
  }
`;

const update = {
  inputs: {
    selectedUpdate: "selectedUpdate",
    updates: "updates",
  },
  compute: ({ updates, selectedUpdate }) => updates && updates[selectedUpdate],
};

class ActionPanel {
  data() {
    return { update };
  }

  render({ update }) {
    if (!update) return null;

    return html`
      <section class=${detailsStyles}>
        <${JSONView} id="actionJson" value=${update.action} />
      </section>
    `;
  }
}

class StatePanel {
  data() {
    return { update };
  }

  render({ update }) {
    if (!update) return null;

    return html`
      <section class=${detailsStyles}>
        <${JSONView} id="stateJson" value=${update.state} />
      </section>
    `;
  }
}

export class Details {
  static defaultProps() {
    return { id: "detailsTabs" };
  }

  render({ id }) {
    return html`
      <${ErrorBoundary} name="details">
        <${Tabs} id=${id} active="action">
          <${TabList} id=${id}>
            <${Tab} id=${id} name="action">Action<//>
            <${Tab} id=${id} name="state">State<//>
          <//>
          <${TabPanel} id=${id} name="action"><${ActionPanel} /><//>
          <${TabPanel} id=${id} name="state"><${StatePanel} /><//>
        <//>
      <//>
    `;
  }
}
