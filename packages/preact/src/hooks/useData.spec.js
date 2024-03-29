import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import { Store } from "@depository/store";
import { StoreProvider, useData, useDispatch } from "./index.js";
import { h, render } from "preact";
import htm from "htm";

const delay = (timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const html = htm.bind(h);

const expect = unexpected.clone().use(unexpectedDom);

const computedSum = {
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

const Calculator = () => {
  const dispatch = useDispatch();
  const { a, b, sum } = useData({ a: "a", b: "b", sum: computedSum });

  const onClick = () => {
    dispatch(increment());
  };

  return html`
    <div>
      <span data-test-id="sum">${a}+${b}=${sum}<//>
      <button data-test-id="increment" onClick=${onClick}>Increment<//>
    </div>
  `;
};

describe("useData", () => {
  let container, store;

  beforeEach(() => {
    container = document.createElement("div");

    store = new Store({
      a: 10,
      b: 10,
    });

    render(
      html`<${StoreProvider} value=${store}><${Calculator} /><//>`,
      container
    );
  });

  it("handles rendering paths and computeds", () => {
    expect(container, "queried for test id", "sum", "to have text", "10+10=20");
  });

  it("handles dispatching actions", async () => {
    const incrementButton = container.querySelector("[data-test-id=increment]");
    incrementButton.dispatchEvent(new CustomEvent("click"));

    await delay();

    expect(container, "queried for test id", "sum", "to have text", "11+11=22");
  });
});
