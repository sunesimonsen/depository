import { html } from "../dependencies/view.esm.js";
import { css, classes } from "../dependencies/stylewars.esm.js";

const actionStyles = css`
  & {
    background: transparent;
    border: none;
    padding: 0.7em 1em;
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  &:focus {
    background: #1976d2;
    color: white;
    outline: none;
  }

  & > .restore {
    visibility: hidden;
  }

  &:hover > .restore {
    visibility: visible;
  }

  & > .restore {
    padding: 2px 8px;
    border-radius: 2px;
    border: thin solid #a0a0a0;
  }

  &:focus > .restore {
    border-color: white;
  }
`;

const selectedStyles = css`
  & {
    background: #d0d0d0;
  }
`;

const labelStyles = css`
  & {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const isSelected = (index) => ({
  inputs: {
    selected: "selectedUpdate",
  },
  compute: ({ selected }) => index === selected,
});

const computedName = (index) => ({
  inputs: {
    name: `updates.${index}.action.name`,
    status: `updates.${index}.action.status`,
  },
  compute: ({ name = "Action", status }) =>
    status ? `${name} (${status})` : name,
});

export class Action {
  constructor({ index }) {
    const show = () => {
      this.dispatch({ payload: { selectedUpdate: index } });
    };

    const restore = () => {
      this.dispatch({ type: "restore" });
    };

    this.onRestore = (e) => {
      e.stopPropagation();
      show();
      restore();
    };

    this.onShow = (e) => {
      show();
    };

    this.onKeyDown = (e) => {
      if (e.key === "Enter") {
        // TODO use https://github.com/ianstormtaylor/is-hotkey
        if (e.ctrlKey || e.metaKey) {
          show();
          restore();
        } else {
          show();
        }
      }
    };

    this.setRef = (ref) => (this.ref = ref);
  }

  data({ index }) {
    return {
      isSelected: isSelected(index),
      name: computedName(index),
    };
  }

  didMount() {
    if (this.props.index === this.props.selectedUpdate) {
      this.ref.focus();
    }
  }

  render({ name, isSelected }) {
    return html`<div
      ref=${this.setRef}
      class=${classes(actionStyles, isSelected && selectedStyles)}
      onClick=${this.onShow}
      onKeyDown=${this.onKeyDown}
      tabindex="0"
    >
      <div class=${labelStyles}>${name}</div>
      <div class="restore" onClick=${this.onRestore}>Restore</div>
    </div>`;
  }
}
