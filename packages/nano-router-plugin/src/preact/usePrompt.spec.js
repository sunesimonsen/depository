import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import simulateEvents from "simulate-events";
import { h, render } from "preact";
import htm from "htm";
import { createMemoryHistory } from "@nano-router/history";
import { nanoRouterPlugin } from "../index.js";

import {
  useDispatch,
  useObservable,
  StoreProvider,
} from "@depository/preact/hooks";

import { Store } from "@depository/store";

import { Routes, Route, ExternalRoute } from "@nano-router/router";
import { usePrompt, useLink } from "./index.js";

const simulate = simulateEvents.default;
const html = htm.bind(h);

const expect = unexpected.clone().use(unexpectedDom);

const delay = (timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const routes = new Routes(
  new Route("posts/new", "/posts/new"),
  new Route("posts", "/posts"),
  new ExternalRoute("external", "https://www.example.com/blog/:id")
);

const namePath = "global.name";
const isDirty = {
  inputs: { name: namePath },
  compute: ({ name }) => Boolean(name),
};

const updateName = (newName) => ({
  payload: newName,
  apply: { [namePath]: newName },
});

const NewView = () => {
  const dispatch = useDispatch();
  const name = useObservable(namePath);
  const confirmation = usePrompt(isDirty);

  const showPosts = useLink("posts");
  const showExternal = useLink({ route: "external", params: { id: 42 } });

  const onChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const onSave = () => {
    dispatch({
      type: "navigate",
      payload: { route: "posts", state: { skipPrompt: true } },
    });
  };

  return html`
    <div>
      <input data-test-id="name" value=${name} onChange=${onChange} />
      ${confirmation.isVisible &&
      html`
        <div>
          <button data-test-id="reject" onClick=${confirmation.reject}>
            Reject
          </button>
          <button data-test-id="approve" onClick=${confirmation.approve}>
            Approve
          </button>
        </div>
      `}
      <button data-test-id="save" onClick=${onSave}>Save</button>
      <a data-test-id="show-list" ...${showPosts}>Show list</a>
      <a data-test-id="external" ...${showExternal}>External</a>
    </div>
  `;
};

const RootView = () => {
  const route = useObservable("routing.route");

  switch (route) {
    case "posts/new":
      return html`<${NewView} />`;
    default:
      return html`<div data-test-id="posts-list" />`;
  }
};

describe("usePrompt", () => {
  let container, store;

  const userEvent = (testId, event, options = {}) => {
    const testIdSelector = `[data-test-id=${testId}]`;
    expect(container, "to contain elements matching", testIdSelector);

    const target = container.querySelector(testIdSelector);
    if ("target" in options) {
      Object.entries(options.target).forEach(([name, value]) => {
        target[name] = value;
      });
    }

    simulate(target, event, options);
    return delay();
  };

  beforeEach(async () => {
    const history = createMemoryHistory({ initialEntries: ["/posts/new"] });
    container = document.createElement("div");
    store = new Store();
    store.use(nanoRouterPlugin({ routes, history }));

    render(
      html`<${StoreProvider} value=${store}><${RootView} /><//>`,
      container
    );

    await delay();
  });

  describe("when navigation is blocked", () => {
    beforeEach(async () => {
      const nameElement = container.querySelector("[data-test-id=name]");
      nameElement.value = "Sune";
      const changeEvent = new CustomEvent("change");
      nameElement.dispatchEvent(changeEvent);
      await delay();
      await userEvent("show-list", "click");
    });

    it("shows a confirmation", () => {
      expect(container, "to contain test id", "approve");
    });
  });

  describe("when navigation is blocked to an external route", () => {
    beforeEach(async () => {
      await userEvent("name", "change", { target: { value: "Sune" } });
      await userEvent("external", "click");
    });

    it("shows a confirmation", () => {
      expect(container, "to contain test id", "approve");
    });
  });

  describe("when block navigation is confirmed", () => {
    beforeEach(async () => {
      await userEvent("name", "change", { target: { value: "Sune" } });
      await userEvent("show-list", "click");
      await userEvent("approve", "click");
    });

    it("navigates", () => {
      expect(container, "to contain test id", "posts-list");
    });
  });

  describe("when block navigation is rejected", () => {
    beforeEach(async () => {
      await userEvent("name", "change", { target: { value: "Sune" } });
      await userEvent("show-list", "click");
      await userEvent("reject", "click");
    });

    it("removes the confirmation but it doesn't navigate", () => {
      expect(container, "not to contain test id", "approve").and(
        "not to contain test id",
        "posts-list"
      );
    });
  });

  describe("when block navigation is rejected multiple times", () => {
    beforeEach(async () => {
      await userEvent("name", "change", { target: { value: "Sune" } });
      await userEvent("show-list", "click");
      await userEvent("reject", "click");
      await userEvent("show-list", "click");
      await userEvent("reject", "click");
    });

    it("removes the confirmation but it doesn't navigate", () => {
      expect(container, "not to contain test id", "approve").and(
        "not to contain test id",
        "posts-list"
      );
    });
  });

  describe("when removing a confirmation", () => {
    beforeEach(async () => {
      await userEvent("name", "change", { target: { value: "Sune" } });
      await userEvent("save", "click");
    });

    it("won't prompt on navigation", () => {
      expect(container, "to contain test id", "posts-list");
    });
  });
});
