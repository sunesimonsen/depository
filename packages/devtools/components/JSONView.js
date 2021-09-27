import { html } from "../dependencies/view.esm.js";
import { css, classes } from "../dependencies/stylewars.esm.js";
import { escapePath } from "../dependencies/escapePath.js";

const numberStyles = css`
  & {
    color: var(--json-color-number);
  }
`;

class JSONNumber {
  render({ value }) {
    return html`<span className=${numberStyles}>${value}</span>`;
  }
}

const stringStyles = css`
  & {
    color: var(--json-color-string);
  }
`;

class JSONString {
  render({ value }) {
    return html`<span className=${stringStyles}>"${String(value)}"</span>`;
  }
}

const booleanStyles = css`
  & {
    color: var(--json-color-boolean);
  }
`;

class JSONBoolean {
  render({ value }) {
    return html`<span className=${booleanStyles}>${String(value)}</span>`;
  }
}

const undefinedStyles = css`
  & {
    color: var(--json-color-undefined);
  }
`;

class JSONUndefined {
  render({ value }) {
    return html`<span className=${undefinedStyles}>${String(value)}</span>`;
  }
}

const nullStyles = css`
  & {
    color: var(--json-color-null);
  }
`;

class JSONNull {
  render({ value }) {
    return html`<span className=${nullStyles}>${String(value)}</span>`;
  }
}

const keyStyles = css`
  & {
    color: var(--json-color-key);
    margin-right: 0.5ex;
  }
`;

class JSONEntry {
  render({ id, key, value }) {
    return html`<div key=${key}>
      <span className=${keyStyles}>${key}:</span>
      <${JSONValue} id=${id} value=${value} />
    </div>`;
  }
}

const itemCountStyles = css`
  & {
    color: var(--json-color-comment);
    padding: 0 0.5em;
    cursor: pointer;
    user-select: none;
  }
`;

const toggleAction = (id) => ({
  inputs: {
    collapsed: collapsedById(id),
  },
  payload: ({ collapsed }) => ({
    [collapsedById(id)]: !collapsed,
  }),
});

class ItemCount {
  constructor({ id }) {
    this.toggle = () => {
      this.dispatch(toggleAction(id));
    };
  }

  render({ count }) {
    const label = `${count} ${count === 1 ? "item" : "items"}`;

    return html`
      <span onClick=${this.toggle} className=${itemCountStyles}>${label}</span>
    `;
  }
}

const jsonCollectionBodyStyles = css`
  & {
    padding-left: 2em;
    cursor: pointer;
    user-select: none;
  }
`;

const ignoreClickStyles = css`
  & {
    cursor: initial;
  }
`;

const stopPropagation = (e) => e.stopPropagation();
const collapsedById = (id) => `components.JSONView.${id}.collapsed`;

class JSONCollectionBody {
  constructor({ id }) {
    this.toggle = () => {
      this.dispatch(toggleAction(id));
    };
  }

  render({ id, entries }) {
    return html`
      <${ItemCount} id=${id} count=${entries.length} />
      <div onClick=${this.toggle} className=${jsonCollectionBodyStyles}>
        <div onClick=${stopPropagation} className=${ignoreClickStyles}>
          ${entries.map(
            ([key, value]) =>
              html`<${JSONEntry}
                id=${id + escapePath(key)}
                key=${key}
                key=${key}
                value=${value}
              />`
          )}
        </div>
      </div>
    `;
  }
}

class JSONCollection {
  data({ id }) {
    return { collapsed: collapsedById(id) };
  }

  render({ id, collapsed, value, prefix, suffix }) {
    const entries = Object.entries(value);

    return html`
      <span>${prefix}</span>
      ${collapsed
        ? html`<${ItemCount} id=${id} count=${entries.length} />`
        : html`<${JSONCollectionBody} id=${id} entries=${entries} />`}
      <span>${suffix}</span>
    `;
  }
}

class JSONArray {
  render({ id, value }) {
    return html`<${JSONCollection}
      id=${id}
      value=${value}
      prefix="["
      suffix="]"
    />`;
  }
}

class JSONObject {
  render({ id, value }) {
    return html`<${JSONCollection}
      id=${id}
      value=${value}
      prefix="{"
      suffix="}"
    />`;
  }
}

class JSONValue {
  render({ id, value }) {
    const type = typeof value;

    switch (type) {
      case "bigint":
      case "number":
        return html`<${JSONNumber} value=${value} />`;
      case "boolean":
        return html`<${JSONBoolean} value=${value} />`;
      case "undefined":
        return html`<${JSONUndefined} value=${value} />`;
      case "string":
      case "function":
      case "symbol":
        return html`<${JSONString} value=${String(value)} />`;
    }

    if (!value) {
      return html`<${JSONNull} value=${value} />`;
    }

    if (Array.isArray(value)) {
      return html`<${JSONArray} id=${id} value=${value} />`;
    }

    return html`<${JSONObject} id=${id} value=${value} />`;
  }
}

const theme = css`
  & {
    --json-color-key: #032f62;
    --json-color-comment: #6a737d;
    --json-color-string: #d73a49;
    --json-color-number: #005cc5;
    --json-color-boolean: #6f42c1;
    --json-color-undefined: #6f42c1;
    --json-color-null: #6f42c1;
  }
`;

export class JSONView {
  render({ id, value }) {
    return html`
      <div className=${classes(theme)}>
        <${JSONValue} id=${id + ".view"} value=${value} />
      </div>
    `;
  }
}
