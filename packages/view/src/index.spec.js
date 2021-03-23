import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedSimon from "unexpected-sinon";
import { Store } from "@depository/store";
import { render, html } from "./index.js";
import sinon from "sinon";
import simulateEvents from "simulate-events";

const simulate = simulateEvents.default;
const expect = unexpected.clone().use(unexpectedSimon).use(unexpectedDom);

class ErrorBoundary {
  constructor({ name }) {
    this.didCatch = (e) => {
      this.dispatch({ payload: { [`errors.${name}`]: true } });
    };
  }

  data({ name }) {
    return { failed: `errors.${name}` };
  }

  render({ children, fallback, failed }) {
    return failed ? fallback : children;
  }
}

class ConditionalChildren {
  data() {
    return { visible: "visible" };
  }

  render({ visible, children }) {
    return visible ? children : null;
  }
}

describe("view", () => {
  let container, store, clock;

  beforeEach(() => {
    store = new Store();
    container = document.createElement("div");
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  describe("with simple markup", () => {
    it("renders the markup to DOM", () => {
      render(
        html`
          <section data-test-id="intro">
            <h1 class="title">Hello <b>DOM!</b></h1>
            <p>This will create some new DOM.</p>
          </section>
          <aside>You can have multiple root elements</aside>
        `,
        store,
        container
      );

      expect(
        container,
        "to satisfy",
        `<div><section data-test-id="intro"><h1 class="title">Hello <b>DOM!</b></h1><p>This will create some new DOM.</p></section><aside>You can have multiple root elements</aside></div>`
      );
    });
  });

  describe("with markup that contains a component", () => {
    it("renders the markup to DOM", () => {
      class Title {
        render({ children }) {
          return html`<h1 class="title">${children}</h1>`;
        }
      }

      render(html`<${Title}>Title<//>`, store, container);

      expect(
        container,
        "to satisfy",
        `<div><h1 class="title">Title</h1></div>`
      );
    });
  });

  describe("with markup that contains a component that uses the store", () => {
    it("renders the markup to DOM", () => {
      const store = new Store({
        message: "Message from the store",
      });

      class Title {
        data() {
          return { message: "message" };
        }

        render({ message }) {
          return html`<h1 class="title">${message}</h1>`;
        }
      }

      render(html`<${Title}>Title<//>`, store, container);

      expect(
        container,
        "to satisfy",
        `<div><h1 class="title">Message from the store</h1></div>`
      );
    });

    describe("when the data for the component changes", () => {
      it("re-renders", async () => {
        const store = new Store({
          message: "Message from the store",
        });

        class Title {
          data() {
            return { message: "message" };
          }

          render({ message }) {
            return html`<h1 class="title" title=${message}>${message}</h1>`;
          }
        }

        render(html`<${Title} />`, store, container);

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="Message from the store">Message from the store</h1></div>`
        );

        await store.dispatch({ payload: { message: "Updated!" } });

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="Updated!">Updated!</h1></div>`
        );
      });
    });

    describe("when the data subscription is updated with the props", () => {
      it("unsubscribes the old subscription and start listening for changes on the new data subscription", async () => {
        const mountSpy = sinon.spy();
        const updateSpy = sinon.spy();

        const store = new Store({
          currentId: "0",
          messages: {
            0: "First message",
            1: "Second message",
          },
        });

        class Message {
          constructor() {
            this.didMount = mountSpy;
            this.willUpdate = updateSpy;
          }

          data({ id }) {
            return { message: `messages.${id}` };
          }

          render({ id, message }) {
            return html`<h1 data-id=${id}>${message}</h1>`;
          }
        }

        class App {
          data() {
            return { id: "currentId" };
          }

          render({ id }) {
            return html`<${Message} id=${id} />`;
          }
        }

        render(html`<${App} />`, store, container);

        expect(
          container,
          "to satisfy",
          `<div><h1 data-id="0">First message</h1></div>`
        );

        await store.dispatch({ payload: { currentId: 1 } });
        await store.dispatch({ payload: { "messages.0": "Updated" } });

        expect(
          container,
          "to satisfy",
          `<div><h1 data-id="1">Second message</h1></div>`
        );

        expect([mountSpy, updateSpy], "to have calls satisfying", () => {
          mountSpy();
          updateSpy({ message: "Second message", id: 1, children: null });
        });
      });
    });

    describe("when the props for the component changes", () => {
      it("re-renders", async () => {
        const store = new Store({
          title: "This is a title",
          message: "Message from the store",
        });

        class Title {
          render({ title, children }) {
            return html`<h1 class="title" title=${title}>${children}</h1>`;
          }
        }

        class App {
          data() {
            return { title: "title", message: "message" };
          }

          render({ title, message }) {
            return html`<${Title} title=${title}>${message}<//>`;
          }
        }

        render(html`<${App} />`, store, container);

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="This is a title">Message from the store</h1></div>`
        );

        await store.dispatch({
          payload: { "(title|message)": "Updated!" },
        });

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="Updated!">Updated!</h1></div>`
        );
      });
    });

    describe("when the props and the data for the component changes", () => {
      it("re-renders", async () => {
        const store = new Store({
          title: "This is a title",
          message: "Message from the store",
        });

        class Title {
          data() {
            return { title: "title" };
          }

          render({ title, children }) {
            return html`<h1 class="title" title=${title}>${children}</h1>`;
          }
        }

        class App {
          data() {
            return { message: "message" };
          }

          render({ message }) {
            return html`<${Title}>${message}<//>`;
          }
        }

        render(html`<${App} />`, store, container);

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="This is a title">Message from the store</h1></div>`
        );

        await store.dispatch({
          payload: { "(title|message)": "Updated!" },
        });

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="Updated!">Updated!</h1></div>`
        );
      });
    });

    describe("when the children is changing", () => {
      describe("and the children is keyed", () => {
        it("updates the existing DOM", async () => {
          const store = new Store({ reversed: false });
          class Reversible {
            constructor() {
              this.items = ["one", "two", "three"];
            }

            data() {
              return { reversed: "reversed" };
            }

            render(props) {
              const items = props.reversed
                ? this.items.slice().reverse()
                : this.items;

              return html`
                <ul>
                  ${items.map((item) => html`<li #=${item}>${item}</li>`)}
                </ul>
              `;
            }
          }

          render(html`<${Reversible} />`, store, container);

          const firstItem = container.firstElementChild.firstElementChild;

          expect(
            container,
            "to satisfy",
            `<div><ul><li>one</li><li>two</li><li>three</li></ul></div>`
          );

          await store.dispatch({
            payload: { reversed: true },
          });

          const lastItem = container.firstElementChild.lastElementChild;

          expect(firstItem, "to be", lastItem);

          expect(
            container,
            "to satisfy",
            `<div><ul><li>three</li><li>two</li><li>one</li></ul></div>`
          );
        });
      });
    });
  });

  describe("with a component containing life-cycle methods", () => {
    it("calls the life-cycle methods in the correct order", async () => {
      const willMountSpy = sinon.spy().named("willMount");
      const didMountSpy = sinon.spy().named("didMount");
      const shouldUpdateSpy = sinon.stub().named("shouldUpdate").returns(true);
      const willUpdateSpy = sinon.spy().named("willUpdate");
      const didUpdateSpy = sinon.spy().named("didUpdate");
      const willUnmountSpy = sinon.spy().named("willUnmount");
      const didUnmountSpy = sinon.spy().named("didUnmount");

      const store = new Store({ visible: true, message: "Hello" });

      class TestComponent {
        constructor() {
          this.willMount = willMountSpy;
          this.didMount = didMountSpy;
          this.shouldUpdate = shouldUpdateSpy;
          this.willUpdate = willUpdateSpy;
          this.didUpdate = didUpdateSpy;
          this.willUnmount = willUnmountSpy;
          this.didUnmount = didUnmountSpy;
        }

        data() {
          return { message: "message" };
        }

        render({ message }) {
          return html`<h1>${message}</h1>`;
        }
      }

      class App {
        data() {
          return { visible: "visible" };
        }

        render({ visible }) {
          return visible ? html`<${TestComponent} />` : null;
        }
      }

      render(html`<${App} />`, store, container);

      await store.dispatch({
        payload: {
          message: "world",
        },
      });

      await store.dispatch({
        payload: {
          visible: false,
        },
      });

      expect(
        [
          willMountSpy,
          didMountSpy,
          shouldUpdateSpy,
          willUpdateSpy,
          didUpdateSpy,
          willUnmountSpy,
          didUnmountSpy,
        ],
        "to have calls satisfying",
        () => {
          willMountSpy();
          didMountSpy();
          shouldUpdateSpy({ message: "world", children: null });
          willUpdateSpy({ message: "world", children: null });
          didUpdateSpy({ message: "Hello", children: null });
          willUnmountSpy();
          didUnmountSpy();
        }
      );
    });

    it("returning false from shouldUpdate prevents the component to re-render", async () => {
      const didMountSpy = sinon.spy().named("didMount");
      const shouldUpdateSpy = sinon
        .stub()
        .returns(false)
        .named("shouldUpdate")
        .returns(false);
      const willUpdateSpy = sinon.spy().named("willUpdate");
      const didUpdateSpy = sinon.spy().named("didUpdate");
      const willUnmountSpy = sinon.spy().named("willUnmount");

      const store = new Store({ visible: true, message: "Hello" });

      class TestComponent {
        constructor() {
          this.didMount = didMountSpy;
          this.shouldUpdate = shouldUpdateSpy;
          this.willUpdate = willUpdateSpy;
          this.didUpdate = didUpdateSpy;
          this.willUnmount = willUnmountSpy;
        }

        data() {
          return { message: "message" };
        }

        render({ message }) {
          return html`<h1>${message}</h1>`;
        }
      }

      class App {
        data() {
          return { visible: "visible" };
        }

        render({ visible }) {
          return visible ? html`<${TestComponent} />` : null;
        }
      }

      render(html`<${App} />`, store, container);

      await store.dispatch({
        payload: {
          message: "world",
        },
      });

      expect(container, "to satisfy", "<div><h1>Hello</h1></div>");

      await store.dispatch({
        payload: {
          visible: false,
        },
      });

      expect(
        [
          didMountSpy,
          shouldUpdateSpy,
          willUpdateSpy,
          didUpdateSpy,
          willUnmountSpy,
        ],
        "to have calls satisfying",
        () => {
          didMountSpy();
          shouldUpdateSpy({
            message: "world",
            children: null,
          });
          willUnmountSpy();
        }
      );
    });

    describe("when didCatch is not defined and an error is throw", () => {
      it("throws from render", () => {
        class TestComponent {
          render() {
            throw new Error("Test failure");
          }
        }

        expect(() => {
          render(html`<${TestComponent} />`, store, container);
        }, "to throw");
      });
    });

    describe("when didCatch is defined", () => {
      const parentFallback = html`<h1 data-test-id="parent-failure">
        Parent failure
      </h1>`;
      const fallback = html`<h1 data-test-id="failure">Failure</h1>`;

      it("catches errors in constructors", async () => {
        class TestComponent {
          constructor() {
            throw new Error("Test failure");
          }

          render() {
            return null;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await clock.runAllAsync();

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in the data method", async () => {
        class TestComponent {
          data() {
            throw new Error("Test failure");
          }

          render() {
            return null;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await clock.runAllAsync();

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in willMount", async () => {
        class TestComponent {
          willMount() {
            throw new Error("Test failure");
          }

          render() {
            return null;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await clock.runAllAsync();

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in didMount", async () => {
        class TestComponent {
          didMount() {
            throw new Error("Test failure");
          }

          render() {
            return null;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await clock.runAllAsync();

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in render", async () => {
        class TestComponent {
          render() {
            throw new Error("Test failure");
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await clock.runAllAsync();

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in shouldUpdate", async () => {
        class TestComponent {
          data() {
            return { data: "data" };
          }

          shouldUpdate() {
            throw new Error("Test failure");
          }

          render({ data }) {
            return data;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await store.dispatch({ payload: { data: "stuff" } });

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in willUpdate", async () => {
        class TestComponent {
          data() {
            return { data: "data" };
          }

          willUpdate() {
            throw new Error("Test failure");
          }

          render({ data }) {
            return data;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await store.dispatch({ payload: { data: "stuff" } });

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in didUpdate", async () => {
        class TestComponent {
          data() {
            return { data: "data" };
          }

          didUpdate() {
            throw new Error("Test failure");
          }

          render({ data }) {
            return data;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}>
              <${TestComponent} />
            <//>
          <//>`,
          store,
          container
        );

        await store.dispatch({ payload: { data: "stuff" } });

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in willUnmount", async () => {
        store = new Store({ visible: true });

        class TestComponent {
          willUnmount() {
            throw new Error("Test failure");
          }

          render() {
            return null;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}
              ><${ConditionalChildren}> <${TestComponent} /> <//><//
          ><//>`,
          store,
          container
        );

        await store.dispatch({ payload: { visible: false } });

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });

      it("catches errors in didUnmount", async () => {
        store = new Store({ visible: true });

        class TestComponent {
          didUnmount() {
            throw new Error("Test failure");
          }

          render() {
            return null;
          }
        }

        render(
          html`<${ErrorBoundary} name="test-parent" fallback=${parentFallback}>
            <${ErrorBoundary} name="test" fallback=${fallback}
              ><${ConditionalChildren}> <${TestComponent} /> <//><//
          ><//>`,
          store,
          container
        );

        await store.dispatch({ payload: { visible: false } });

        expect(
          container,
          "to contain elements matching",
          "[data-test-id=failure]"
        );
      });
    });
  });

  describe("when using ref-props", () => {
    it("calls the ref, when the element is mounted", () => {
      class TestComponent {
        setId(dom) {
          dom.setAttribute("id", "title");
        }

        render() {
          return html`
            <section>
              <h1 ref=${this.setId}>Title</h1>
            </section>
          `;
        }
      }

      render(html`<${TestComponent} />`, store, container);

      expect(
        container,
        "to satisfy",
        '<div><section><h1 id="title">Title</h1></section></div>'
      );
    });

    describe("when the ref is replaced", () => {
      it("calls the new ref", async () => {
        const store = new Store({ method: "setId" });

        class TestComponent {
          setId(dom) {
            dom.setAttribute("id", "title");
          }

          setTitle(dom) {
            dom.setAttribute("title", "Hello!");
          }

          data() {
            return { method: "method" };
          }

          render({ method }) {
            return html`
              <section>
                <h1 ref=${this[method]}>Title</h1>
              </section>
            `;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(
          container,
          "to satisfy",
          '<div><section><h1 id="title">Title</h1></section></div>'
        );

        await store.dispatch({ payload: { method: "setTitle" } });

        expect(
          container,
          "to satisfy",
          '<div><section><h1 id="title" title="Hello!">Title</h1></section></div>'
        );
      });
    });
  });

  describe("when adding an event listener", () => {
    it("attaches the event listener to the DOM element", () => {
      const listener = sinon.spy();

      render(
        html`<button @click=${listener}>click me</button>`,
        store,
        container
      );

      const button = container.querySelector("button");

      simulate(button, "click");

      expect(listener, "to have calls satisfying", () => {
        listener({ type: "click", target: button });
      });
    });

    describe("and there was an earlier event listener attached", () => {
      it("deattaches the old listener and attaches the new one", async () => {
        const oldListener = sinon.spy();
        const newListener = sinon.spy();

        const store = new Store({ listener: "old" });

        class TestComponent {
          data() {
            return { listener: "listener" };
          }

          render({ listener }) {
            return html`<button
              @click=${listener === "old" ? oldListener : newListener}
            >
              click me
            </button>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        const button = container.querySelector("button");

        simulate(button, "click");

        await store.dispatch({ payload: { listener: "new" } });

        simulate(button, "click");

        expect([oldListener, newListener], "to have calls satisfying", () => {
          oldListener({ type: "click", target: button });
          newListener({ type: "click", target: button });
        });
      });
    });

    describe("and removing it again", () => {
      it("no longer calls the event handler", async () => {
        const listener = sinon.spy();

        const store = new Store({ enabled: true });

        class TestComponent {
          data() {
            return { enabled: "enabled" };
          }

          render({ enabled }) {
            return html`<button @click=${enabled && listener}>
              click me
            </button>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        const button = container.querySelector("button");

        simulate(button, "click");

        await store.dispatch({ payload: { enabled: false } });

        simulate(button, "click");

        expect(listener, "to have calls satisfying", () => {
          listener({ type: "click", target: button });
        });
      });
    });

    describe("and removing the attribute", () => {
      it("no longer calls the event handler", async () => {
        const listener = sinon.spy();

        const store = new Store({ enabled: true });

        class TestComponent {
          data() {
            return { enabled: "enabled" };
          }

          render({ enabled }) {
            return enabled
              ? html`<button @click=${listener}>click me</button>`
              : html`<button>click me</button>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        const button = container.querySelector("button");

        simulate(button, "click");

        await store.dispatch({ payload: { enabled: false } });

        simulate(button, "click");

        expect(listener, "to have calls satisfying", () => {
          listener({ type: "click", target: button });
        });
      });
    });
  });

  describe("when adding an event listener in the capturing phase", () => {
    it("attaches the event listener to the DOM element", () => {
      const listener = (e) => {
        e.stopPropagation();
      };
      const captureListener = sinon.spy();

      render(
        html`<div @clickCapture=${captureListener}>
          <button @click=${listener}>click me</button>
        </div>`,
        store,
        container
      );

      const button = container.querySelector("button");

      simulate(button, "click", { bubbles: true });

      expect(captureListener, "to have calls satisfying", () => {
        captureListener({ type: "click", target: button });
      });
    });

    describe("and there was an earlier event listener attached", () => {
      it("deattaches the old listener and attaches the new one", async () => {
        const oldListener = sinon.spy();
        const newListener = sinon.spy();

        const store = new Store({ listener: "old" });

        class TestComponent {
          data() {
            return { listener: "listener" };
          }

          render({ listener }) {
            return html`<button
              @clickCapture=${listener === "old" ? oldListener : newListener}
            >
              click me
            </button>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        const button = container.querySelector("button");

        simulate(button, "click");

        await store.dispatch({ payload: { listener: "new" } });

        simulate(button, "click");

        expect([oldListener, newListener], "to have calls satisfying", () => {
          oldListener({ type: "click", target: button });
          newListener({ type: "click", target: button });
        });
      });
    });

    describe("and removing it again", () => {
      it("no longer calls the event handler", async () => {
        const listener = sinon.spy();

        const store = new Store({ enabled: true });

        class TestComponent {
          data() {
            return { enabled: "enabled" };
          }

          render({ enabled }) {
            return html`<button @clickCapture=${enabled && listener}>
              click me
            </button>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        const button = container.querySelector("button");

        simulate(button, "click");

        await store.dispatch({ payload: { enabled: false } });

        simulate(button, "click");

        expect(listener, "to have calls satisfying", () => {
          listener({ type: "click", target: button });
        });
      });
    });

    describe("and removing the attribute", () => {
      it("no longer calls the event handler", async () => {
        const listener = sinon.spy();

        const store = new Store({ enabled: true });

        class TestComponent {
          data() {
            return { enabled: "enabled" };
          }

          render({ enabled }) {
            return enabled
              ? html`<button @clickCapture=${listener}>click me</button>`
              : html`<button>click me</button>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        const button = container.querySelector("button");

        simulate(button, "click");

        await store.dispatch({ payload: { enabled: false } });

        simulate(button, "click");

        expect(listener, "to have calls satisfying", () => {
          listener({ type: "click", target: button });
        });
      });
    });
  });

  describe("when adding a DOM property", () => {
    it("sets the DOM property", () => {
      render(html`<input .value="My value" />`, store, container);

      expect(container, "queried for first", "input", "to have properties", {
        value: "My value",
      });
    });

    describe("when updating the property", () => {
      it("updates the DOM property", async () => {
        const store = new Store({
          value: "Initial value",
        });

        class TestComponent {
          data() {
            return { value: "value" };
          }

          render({ value }) {
            return html`<input .value=${value} />`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(container, "queried for first", "input", "to have properties", {
          value: "Initial value",
        });

        await store.dispatch({ payload: { value: "Updated value" } });

        expect(container, "queried for first", "input", "to have properties", {
          value: "Updated value",
        });
      });
    });

    describe("when removing the property", () => {
      it("the DOM property is left unchanged", async () => {
        const store = new Store({
          hasValue: true,
        });

        class TestComponent {
          data() {
            return { hasValue: "hasValue" };
          }

          render({ hasValue }) {
            return hasValue
              ? html`<input .value="My value" />`
              : html`<input />`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(container, "queried for first", "input", "to have properties", {
          value: "My value",
        });

        await store.dispatch({ payload: { hasValue: false } });

        expect(container, "queried for first", "input", "to have properties", {
          value: "My value",
        });
      });
    });
  });

  describe("with a custom component returning an array", () => {
    describe("and its only the items that changes", () => {
      it("still updates the DOM", async () => {
        const store = new Store({
          number: 0,
        });

        class TestComponent {
          data() {
            return { number: "number" };
          }

          render({ number }) {
            return [
              html`<span>${number}</span>`,
              html`<span>${number + 1}</span>`,
              html`<span>${number + 2}</span>`,
            ];
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(
          container,
          "to satisfy",
          "<div><span>0</span><span>1</span><span>2</span></div>"
        );

        await store.dispatch({
          payload: { number: 10 },
        });

        expect(
          container,
          "to satisfy",
          "<div><span>10</span><span>11</span><span>12</span></div>"
        );
      });
    });

    it("renders the array to the DOM", async () => {
      const store = new Store({
        items: ["one", "two", "three"],
      });

      class TestComponent {
        data() {
          return { items: "items" };
        }

        render({ items }) {
          return items.map((item) => html`<span>${item}</span>`);
        }
      }

      render(html`<${TestComponent} />`, store, container);

      expect(
        container,
        "to satisfy",
        "<div><span>one</span><span>two</span><span>three</span></div>"
      );

      await store.dispatch({
        payload: { items: ["one", "two", "three", "four"] },
      });

      expect(
        container,
        "to satisfy",
        "<div><span>one</span><span>two</span><span>three</span><span>four</span></div>"
      );
    });

    it("renders a keyed array to the DOM", async () => {
      const store = new Store({
        items: ["one", "two", "three"],
      });

      class TestComponent {
        data() {
          return { items: "items" };
        }

        render({ items }) {
          return items.map((item, i) => html`<span #=${i}>${item}</span>`);
        }
      }

      render(html`<${TestComponent} />`, store, container);

      expect(
        container,
        "to satisfy",
        "<div><span>one</span><span>two</span><span>three</span></div>"
      );

      await store.dispatch({
        payload: { items: ["one", "two", "three", "four"] },
      });

      expect(
        container,
        "to satisfy",
        "<div><span>one</span><span>two</span><span>three</span><span>four</span></div>"
      );
    });
  });

  describe("portal", () => {
    describe("on first render", () => {
      it("renders the children in the portal target", () => {
        const target = document.createElement("div");
        class TestComponent {
          render() {
            return html`<portal target=${target}>
              <h1>Hello from the portal</h1>
            </portal>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(container, "to satisfy", "<div><!--hidden--></div>");

        expect(
          target,
          "to satisfy",
          "<div><h1>Hello from the portal</h1></div>"
        );
      });

      describe("when the target is not specified", () => {
        it("renders the children in the portal document body", async () => {
          store = new Store({ visible: true });
          class TestComponent {
            render() {
              return html`<portal>
                  <h1>Hello from the portal</h1>
                </portal>
                <section>
                  <portal>
                    <p>this is another portal</p>
                  </portal>
                </section>`;
            }
          }

          render(
            html`<${ConditionalChildren}><${TestComponent} /><//>`,
            store,
            container
          );

          expect(
            container,
            "to satisfy",
            "<div><!--hidden--><section><!--hidden--></section></div>"
          );

          expect(document.body.childNodes, "to satisfy", [
            "<h1>Hello from the portal</h1>",
            "<p>this is another portal</p>",
          ]);

          await store.dispatch({ payload: { visible: false } });

          expect(document.body.childNodes, "to satisfy", []);
        });
      });
    });

    describe("when the portal has children", () => {
      let target, store;

      beforeEach(() => {
        store = new Store({ message: "Hello from the portal" });

        target = document.createElement("div");

        class TestComponent {
          data() {
            return { message: "message" };
          }

          render({ message }) {
            return html`<portal target=${target}>${message}</portal>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(container, "to satisfy", "<div><!--hidden--></div>");
        expect(target, "to satisfy", "<div>Hello from the portal</div>");
      });

      describe("and updating the portal children", () => {
        it("updates the portal DOM", async () => {
          await store.dispatch({ payload: { message: "Updated portal!" } });

          expect(target, "to satisfy", "<div>Updated portal!</div>");
        });
      });

      describe("and removing the children", () => {
        it("removes the portal DOM", async () => {
          await store.dispatch({ payload: { message: null } });

          expect(target, "to satisfy", "<div><!--hidden--></div>");
        });
      });
    });

    describe("when the portal is empty", () => {
      let target, store;

      beforeEach(() => {
        store = new Store({ message: null });

        target = document.createElement("div");

        class TestComponent {
          data() {
            return { message: "message" };
          }

          render({ message }) {
            return html`<portal target=${target}>${message}</portal>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(container, "to satisfy", "<div><!--hidden--></div>");
        expect(target, "to satisfy", "<div><!--hidden--></div>");
      });

      describe("and setting the portal children", () => {
        it("updates the portal DOM", async () => {
          await store.dispatch({ payload: { message: "Updated portal!" } });

          expect(target, "to satisfy", "<div>Updated portal!</div>");
        });
      });

      describe("and the portal is updated to be emtpy", () => {
        it("keeps the empty portal", async () => {
          await store.dispatch({ payload: { message: null } });

          expect(target, "to satisfy", "<div><!--hidden--></div>");
        });
      });
    });

    describe("when the target is changed", () => {
      it("moves the children to the new target", async () => {
        const store = new Store({ target: "target1" });

        const target1 = document.createElement("div");
        const target2 = document.createElement("div");

        class TestComponent {
          data() {
            return { target: "target" };
          }

          render({ target }) {
            return html`<portal
              target=${target === "target1" ? target1 : target2}
            >
              This is a portal
            </portal>`;
          }
        }

        render(html`<${TestComponent} />`, store, container);

        expect(container, "to satisfy", "<div><!--hidden--></div>");
        expect(target1, "to satisfy", "<div>This is a portal</div>");

        await store.dispatch({ payload: { target: "target2" } });

        expect(target1, "to satisfy", "<div></div>");
        expect(target2, "to satisfy", "<div>This is a portal</div>");
      });
    });
  });

  describe("defaultProps", () => {
    class Welcome {
      static defaultProps() {
        return { greeting: "Hello, " };
      }

      render({ greeting, name }) {
        return greeting + name;
      }
    }

    it("is used when props isn't provided", () => {
      render(html`<${Welcome} name="Jane Doe" />`, store, container);

      expect(container, "to satisfy", "<div>Hello, Jane Doe</div>");
    });

    it("is overridable", () => {
      render(
        html`<${Welcome} greeting="Hi!, " name="Jane Doe" />`,
        store,
        container
      );

      expect(container, "to satisfy", "<div>Hi!, Jane Doe</div>");
    });
  });

  describe("context", () => {
    it("allows you to pass down references to components from the initial render", () => {
      class Welcome {
        render({ name }, { greeting }) {
          return greeting + name;
        }
      }

      render(html`<${Welcome} name="Jane Doe" />`, store, container, {
        greeting: "Hi!, ",
      });

      expect(container, "to satisfy", "<div>Hi!, Jane Doe</div>");
    });

    it("doesn't allow chaning the context", async () => {
      class Welcome {
        willMount() {
          this.context.greeting = "HALLO!, ";
        }

        render({ name }, { greeting }) {
          return greeting + name;
        }
      }

      const fallback = html`<div data-test-id="failed">Failed</div>`;

      render(
        html`<${ErrorBoundary} fallback=${fallback}>
          <${Welcome} name="Jane Doe" />
        <//>`,
        store,
        container,
        { greeting: "Hi!, " }
      );

      await clock.runAllAsync();

      expect(container, "to contain test id", "failed");
    });
  });
});
