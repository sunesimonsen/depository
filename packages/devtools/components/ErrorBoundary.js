import { html } from "../dependencies/view.esm.js";

export class ErrorBoundary {
  constructor({ name }) {
    this.didCatch = (e) => {
      console.error(e);
      this.dispatch({ payload: { [`errors.${name}`]: true } });
    };
  }

  data({ name }) {
    return { failed: `errors.${name}` };
  }

  render({ children, failed }) {
    return failed ? html`<h2>Crashed</h2>` : children;
  }
}
