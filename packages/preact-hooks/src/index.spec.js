import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import simulate from "simulate-events";
import { Store } from "@depository/store";
import {
  StoreProvider,
  useObservable,
  useInstanceId,
  useAction,
} from "./index.js";
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
  apply: (cache) => {
    cache.update("(a|b)", (v) => v + 1);
  },
});

const Calculator = () => {
  const a = useObservable("a");
  const b = useObservable("b");
  const sum = useObservable(computedSum);
  const onClick = useAction(increment());

  return html`
    <div>
      <span data-test-id="sum">${a}+${b}=${sum}<//>
      <button data-test-id="increment" onClick=${onClick}>Increment<//>
    </div>
  `;
};

const incrementCounter = (instanceId) => ({
  apply: (cache) => {
    cache.update(`widgets.${instanceId}.counter`, (v) => v + 1, 0);
  },
});

const counterByInstance = (instanceId) => `widgets.${instanceId}.counter`;

const Widget = ({ id }) => {
  const instanceId = useInstanceId();
  const count = useObservable(counterByInstance(instanceId));
  const onClick = useAction(incrementCounter(instanceId));

  return html`
    <div id=${id}>
      <span data-test-id="instanceId">${instanceId}<//>
      <span data-test-id="count">${count}<//>
      <button data-test-id="increment" onClick=${onClick}>Increment<//>
    </div>
  `;
};

const Testable = () => html`
  <${Calculator} />
  <${Widget} id="widget-one" />
  <${Widget} id="widget-two" />
`;

describe("preact", () => {
  let container, store;

  beforeEach(() => {
    container = document.createElement("div");

    store = new Store({
      a: 10,
      b: 10,
    });

    render(
      html`<${StoreProvider} value=${store}><${Testable} /><//>`,
      container
    );
  });

  it("handles rendering paths and computeds", () => {
    expect(container, "queried for test id", "sum", "to have text", "10+10=20");
  });

  it("handles dispatching actions", async () => {
    simulate(container.querySelector("[data-test-id=increment]"), "click");

    await delay();

    expect(container, "queried for test id", "sum", "to have text", "11+11=22");
  });

  it("allows storing separate state based on instance ids", async () => {
    const widgetOne = container.querySelector("#widget-one");
    const widgetTwo = container.querySelector("#widget-two");

    simulate(widgetOne.querySelector("[data-test-id=increment]"), "click");

    simulate(widgetTwo.querySelector("[data-test-id=increment]"), "click");
    simulate(widgetTwo.querySelector("[data-test-id=increment]"), "click");

    await delay();

    expect(widgetOne, "queried for test id", "count", "to have text", "1");
    expect(widgetTwo, "queried for test id", "count", "to have text", "2");
  });
});
