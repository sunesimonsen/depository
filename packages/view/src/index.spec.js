import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import unexpectedSimon from "unexpected-sinon";
import { Store } from "@depository/store";
import { render, html } from "./index.js";
import sinon from "sinon";

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
        get data() {
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
          get data() {
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
          get data() {
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
          get data() {
            return { title: "title" };
          }

          render({ title, children }) {
            return html`<h1 class="title" title=${title}>${children}</h1>`;
          }
        }

        class App {
          get data() {
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

            get data() {
              return { reversed: "reversed" };
            }

            render(props) {
              const items = props.reversed
                ? this.items.slice().reverse()
                : this.items;

              return html`
                <ul>
                  ${items.map((item) => html`<li key=${item}>${item}</li>`)}
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
        get data() {
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
        get data() {
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
              dispatch: expect.it("to be a function"),
              children: [],
            },
            {
              message: "Hello",
              dispatch: expect.it("to be a function"),
              children: [],
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
        get data() {
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
        get data() {
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
            dispatch: expect.it("to be a function"),
            children: [],
          });
          unmountSpy();
        }
      );
    });
  });

  describe("when ref-props", () => {
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
});
