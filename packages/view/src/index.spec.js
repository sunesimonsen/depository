import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedSimon from "unexpected-sinon";
import { Store } from "@depository/store";
import { render, html } from "./index.js";
import sinon from "sinon";
import simulateEvents from "simulate-events";

const simulate = simulateEvents.default;
const expect = unexpected.clone().use(unexpectedSimon).use(unexpectedDom);

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

        clock.runAll();

        expect(
          container,
          "to satisfy",
          `<div><h1 class="title" title="Updated!">Updated!</h1></div>`
        );
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

        clock.runAll();

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

        clock.runAll();

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

          clock.runAll();

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
      const mountSpy = sinon.spy().named("didMount");
      const updateSpy = sinon.spy().named("didUpdate");
      const unmountSpy = sinon.spy().named("willUnmount");

      const store = new Store({ visible: true, message: "Hello" });

      class TestComponent {
        data() {
          return { message: "message" };
        }

        didMount() {
          mountSpy();
        }

        didUpdate(prevProps) {
          updateSpy(this.props, prevProps);
        }

        willUnmount() {
          unmountSpy();
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

      clock.runAll();

      expect(
        [mountSpy, updateSpy, unmountSpy],
        "to have calls satisfying",
        () => {
          mountSpy();
          updateSpy(
            {
              message: "world",
              children: null,
            },
            {
              message: "Hello",
              children: null,
            }
          );
          unmountSpy();
        }
      );
    });

    it("returning falls from shouldUpdate prevents the component to re-render", async () => {
      const mountSpy = sinon.spy().named("didMount");
      const shouldUpdateSpy = sinon.spy().named("shouldUpdate");
      const updateSpy = sinon.spy().named("didUpdate");
      const unmountSpy = sinon.spy().named("willUnmount");

      const store = new Store({ visible: true, message: "Hello" });

      class TestComponent {
        data() {
          return { message: "message" };
        }

        didMount() {
          mountSpy();
        }

        didUpdate(prevProps) {
          updateSpy(this.props, prevProps);
        }

        shouldUpdate(nextProps) {
          shouldUpdateSpy(nextProps);
          return false;
        }

        willUnmount() {
          unmountSpy();
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

      clock.runAll();

      expect(
        [mountSpy, shouldUpdateSpy, updateSpy, unmountSpy],
        "to have calls satisfying",
        () => {
          mountSpy();
          shouldUpdateSpy({
            message: "Hello",
            children: null,
          });
          unmountSpy();
        }
      );
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

      clock.runAll();

      expect(
        container,
        "to satisfy",
        '<div><section><h1 id="title">Title</h1></section></div>'
      );
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

        clock.runAll();

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

        clock.runAll();

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

        clock.runAll();

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

        clock.runAll();

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

        clock.runAll();

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

        clock.runAll();

        simulate(button, "click");

        expect(listener, "to have calls satisfying", () => {
          listener({ type: "click", target: button });
        });
      });
    });
  });
});
