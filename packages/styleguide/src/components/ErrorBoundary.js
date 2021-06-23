import { html } from "@depository/view";
import { Center } from "@depository/components";

const fallback = html`<${Center} stretched><h2>Crashed</h2><//>`;

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
    return failed ? fallback : children;
  }
}
