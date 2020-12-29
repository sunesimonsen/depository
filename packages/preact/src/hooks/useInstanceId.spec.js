import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import simulate from "simulate-events";
import { Store } from "@depository/store";
import {
  StoreProvider,
  useObservable,
  useInstanceId,
  useDispatch,
} from "./index.js";
import { h, render } from "preact";
import htm from "htm";

const delay = (timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const html = htm.bind(h);

const expect = unexpected.clone().use(unexpectedDom);

const incrementCounter = (instanceId) => ({
  apply: (cache) => {
    cache.update(`widgets.${instanceId}.counter`, (v) => v + 1, 0);
  },
});

const counterByInstance = (instanceId) => `widgets.${instanceId}.counter`;

const Widget = ({ id }) => {
  const dispatch = useDispatch();
  const instanceId = useInstanceId();
  const count = useObservable(counterByInstance(instanceId));
  const onClick = () => {
    dispatch(incrementCounter(instanceId));
  };

  return html`
    <div id=${id}>
      <span data-test-id="instanceId">${instanceId}<//>
      <span data-test-id="count">${count}<//>
      <button data-test-id="increment" onClick=${onClick}>Increment<//>
    </div>
  `;
};

const Testable = () => html`
  <${Widget} id="widget-one" />
  <${Widget} id="widget-two" />
`;

describe("useObservable", () => {
  let container, store;

  beforeEach(() => {
    container = document.createElement("div");

    store = new Store();

    render(
      html`<${StoreProvider} value=${store}><${Testable} /><//>`,
      container
    );
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
