import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedReaction from "unexpected-reaction";
import { Store } from "@depository/store";
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

const Quote = connect(
  ({ id }) => ({ quote: `quote.${id}` }),
  ({ quote }) => quote
);

const Quotes = connect(
  { quoteId: "selectedQuote" },
  ({ quoteId }) => html`<${Quote} id=${quoteId} />`
);

describe("react", () => {
  let store;
  let component;

  const renderCalculator = () => {
    store = new Store({ a: 10, b: 10 });

    component = mount(
      html`<${StoreProvider} value=${store}><${Calculator} /><//>`
    );
  };

  it("handles rendering paths and computeds", () => {
    renderCalculator();
    expect(component, "queried for test id", "sum", "to have text", "10+10=20");
  });

  it("handles dispatching actions", async () => {
    renderCalculator();

    simulate(component, {
      type: "click",
      target: "[data-test-id=increment]",
    });

    await delay();

    expect(component, "queried for test id", "sum", "to have text", "11+11=22");
  });

  const renderQuotes = () => {
    store = new Store({
      selectedQuote: 0,
      quote: {
        0: "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        1: "The way to get started is to quit talking and begin doing. -Walt Disney",
      },
    });

    component = mount(html`<${StoreProvider} value=${store}><${Quotes} /><//>`);
  };

  it("handles function bindings with changing props", async () => {
    renderQuotes();

    expect(
      component,
      "to satisfy",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
    );

    await store.dispatch({ payload: { selectedQuote: 1 } });

    expect(
      component,
      "to satisfy",
      "The way to get started is to quit talking and begin doing. -Walt Disney"
    );
  });
});
