import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedReaction from "unexpected-reaction";
import { Store } from "@depository/store";
import { functionMiddleware } from "@depository/function-middleware";
import { StoreProvider, connect } from "./index.js";
import { html } from "./html.js";

const simulate = unexpectedReaction.simulate;
const mount = unexpectedReaction.mount;

const delay = (timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const expect = unexpected.clone().use(unexpectedDom).use(unexpectedReaction);

const sum = {
  inputs: { a: "a", b: "b" },
  compute: ({ a, b }) => a + b,
};

const increment = () => ({
  inputs: { a: "a", b: "b" },
  payload: ({ a, b }) => {
    return {
      a: a + 1,
      b: b + 1,
    };
  },
});

const Calculator = connect(
  { a: "a", b: "b", sum },
  ({ a, b, sum, dispatch }) => {
    const onClick = () => {
      dispatch(increment());
    };

    return html`
      <div>
        <span data-test-id="sum">${a}+${b}=${sum}<//>
        <button data-test-id="increment" onClick=${onClick}>Increment<//>
      </div>
    `;
  }
);

describe("react", () => {
  let store;
  let component;

  beforeEach(() => {
    store = new Store({
      a: 10,
      b: 10,
    });

    store.useMiddleware(functionMiddleware());

    component = mount(
      html`<${StoreProvider} value=${store}><${Calculator} /><//>`
    );
  });

  it("handles rendering paths and computeds", () => {
    expect(component, "queried for test id", "sum", "to have text", "10+10=20");
  });

  it("handles dispatching actions", async () => {
    simulate(component, {
      type: "click",
      target: "[data-test-id=increment]",
    });

    await delay();

    expect(component, "queried for test id", "sum", "to have text", "11+11=22");
  });
});
