import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import simulateEvents from "simulate-events";
import { h, render } from "preact";
import htm from "htm";
import { createMemoryHistory } from "@nano-router/history";
import { nanoRouterPlugin } from "../index.js";
import { useObservable, StoreProvider } from "@depository/preact/hooks";
import { Store } from "@depository/store";
import { Routes, Route, ExternalRoute } from "@nano-router/router";
import { useLink } from "./index.js";

const simulate = simulateEvents.default;
const createEvent = simulateEvents.createEvent;
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

const NewView = () => html`<div data-test-id="new-view" />`;

const PostsView = () => {
  const showNewPost = useLink("posts/new");

  const showNewPostInNewWindow = useLink({
    route: "posts/new",
    target: "_blank",
  });

  const showExternal = useLink({ route: "external", params: { id: 42 } });

  return html`
    <a data-test-id="external" ...${showExternal}> External </a>
    <a data-test-id="new" ...${showNewPost}> New post </a>
    <a data-test-id="new-open" ...${showNewPostInNewWindow}>
      New post (new window)
    </a>
  `;
};

const RootView = () => {
  const route = useObservable("routing.route");

  switch (route) {
    case "posts/new":
      return html`<${NewView} />`;
    default:
      return html`<${PostsView} />`;
  }
};

describe("useLink", () => {
  let container, store;

  beforeEach(async () => {
    const history = createMemoryHistory({ initialEntries: ["/posts"] });
    container = document.createElement("div");
    store = new Store();
    store.use(nanoRouterPlugin({ routes, history }));

    render(
      html`<${StoreProvider} value=${store}><${RootView} /><//>`,
      container
    );

    await delay();
  });

  it("sets the href", () => {
    expect(container, "queried for test id", "new", "to have attributes", {
      href: "/posts/new",
    });
  });

  describe("when a target is specified", () => {
    it("sets the href, rel and target", () => {
      expect(
        container,
        "queried for test id",
        "new-open",
        "to have attributes",
        {
          href: "/posts/new",
          target: "_blank",
          rel: "noopener",
        }
      );
    });
  });

  describe("when navigating", () => {
    beforeEach(async () => {
      const newLink = container.querySelector("[data-test-id=new]");
      simulate(newLink, "click");
      await delay();
    });

    it("re-renders the subscribed parts", () => {
      expect(container, "to contain test id", "new-view");
    });
  });

  describe("when pressing a modifyer key", () => {
    beforeEach(async () => {
      const newLink = container.querySelector("[data-test-id=new]");
      const event = createEvent("click");
      event.ctrlKey = true;
      event.button = 1;
      simulate(newLink, event);

      await delay();
    });

    it("doesn't prevent default", () => {
      expect(container, "not to contain test id", "new-view");
    });
  });

  it("supports external routes", () => {
    expect(container, "queried for test id", "external", "to have attributes", {
      href: "https://www.example.com/blog/42",
    });
  });
});
