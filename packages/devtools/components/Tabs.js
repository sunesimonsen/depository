import { html } from "../dependencies/view.esm.js";
import { css, classes } from "../dependencies/stylewars.esm.js";

const tabStyles = css`
  & {
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    padding: 4px 16px;
    height: 26px;
  }

  &:focus {
    outline: none;
  }
`;

const activeStyles = css`
  & {
    border-bottom-color: #1976d2;
  }
`;

const activeTabById = (id) => `components.${id}.activeTab`;

const isActive = ({ id, name }) => ({
  inputs: {
    activeTab: activeTabById(id),
  },
  compute: ({ activeTab }) => activeTab === name,
});

export class Tab {
  constructor({ id, name }) {
    this.activate = (e) => {
      e.stopPropagation();

      this.dispatch({
        payload: { [activeTabById(id)]: name },
      });
    };
  }

  data({ id, name }) {
    return { isActive: isActive({ id, name }) };
  }

  render({ children, isActive, ...other }) {
    return html`<button
      class=${classes(tabStyles, isActive && activeStyles)}
      @click=${this.activate}
      ...${other}
    >
      ${children}
    </button>`;
  }
}

export class TabPanel {
  data({ id, name }) {
    return { isActive: isActive({ id, name }) };
  }

  render({ children, name, isActive }) {
    return isActive && children;
  }
}

const tabListStyles = css`
  & {
    background: #f5f5f5;
    border-bottom: 1px solid #cecece;
    overflow-y: visible;
    height: 25px;
  }
`;

export class TabList {
  render({ children }) {
    return html`<div class=${tabListStyles}>${children}</div>`;
  }
}

const tabsStyles = css`
  & {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export class Tabs {
  willMount() {
    const { id, active } = this.props;

    this.dispatch({
      payload: { [activeTabById(id)]: active },
    });
  }

  render({ children }) {
    return html`<div class=${tabsStyles}>${children}</div>`;
  }
}
