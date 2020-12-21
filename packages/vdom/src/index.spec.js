import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import { render } from "./index.js";
import htm from "htm";

const h = (type, props, ...children) => {
  return { type, props: props || {}, children: children.flat() };
};

const html = htm.bind(h);

const expect = unexpected.clone().use(unexpectedDom);

describe("render", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  describe("on first render", () => {
    it("renders the virtual DOM to the target element", () => {
      render(
        html`
          <section data-test-id="intro">
            <h1 class="title">Hello <b>DOM!</b></h1>
            <p>This will create some new DOM.</p>
          </section>
          <aside>You can have multiple root elements</aside>
        `,
        container
      );

      expect(
        container,
        "to satisfy",
        `<div><section data-test-id="intro"><h1 class="title">Hello <b>DOM!</b></h1><p>This will create some new DOM.</p></section><aside>You can have multiple root elements</aside></div>`
      );
    });
  });

  describe("with an existing DOM that is different", () => {
    it("replaces the existing DOM", () => {
      render(
        html`
          <section data-test-id="intro">
            <h1>Hello <b>DOM!</b></h1>
          </section>
        `,
        container
      );

      render(
        html`
          <section data-test-id="intro">
            <h1 class="title">Hello <b>DOM!</b></h1>
            <p>This will create some new DOM.</p>
          </section>
        `,
        container
      );

      expect(
        container,
        "to satisfy",
        `<div><section data-test-id="intro"><h1 class="title">Hello <b>DOM!</b></h1><p>This will create some new DOM.</p></section></div>`
      );
    });
  });

  describe("with an existing DOM", () => {
    it("updates the existing DOM", () => {
      render(
        html`
          <section data-test-id="intro">
            <h1>Hello DOM!</h1>
            ${false}
          </section>
        `,
        container
      );

      expect(
        container,
        "to satisfy",
        `<div><section data-test-id="intro"><h1>Hello DOM!</h1><!--hidden--></section></div>`
      );

      render(
        html`
          <section data-test-id="intro">
            <h1 class="title">Hello <b>DOM!</b></h1>
            <p>This will create some new DOM.</p>
          </section>
        `,
        container
      );

      expect(
        container,
        "to satisfy",
        `<div><section data-test-id="intro"><h1 class="title">Hello <b>DOM!</b></h1><p>This will create some new DOM.</p></section></div>`
      );
    });
  });

  describe("with an existing DOM containing keys", () => {
    it("updates the existing DOM", () => {
      const children = [];
      for (let i = 0; i < 5; i++) {
        children.push(html`<li key=${i}>${i}</li>`);
      }

      render(
        html`
          <ul>
            ${children}
          </ul>
        `,
        container
      );

      const firstItem = container.firstElementChild.firstElementChild;

      render(
        html`
          <ul>
            ${children.slice().reverse()}
          </ul>
        `,
        container
      );

      const lastItem = container.firstElementChild.lastElementChild;

      expect(firstItem, "to be", lastItem);

      expect(
        container,
        "to satisfy",
        `<div><ul><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li></ul></div>`
      );
    });

    it("handles strings, null and false", () => {
      const children = [];
      for (let i = 0; i < 6; i++) {
        if (i % 3 === 0) {
          children.push(false);
        } else if (i % 3 === 1) {
          children.push(`Item ${i}`);
        } else {
          children.push(html`<span key=${i}>${i}</span>`);
        }
      }

      render(html`<div>${children}</div>`, container);

      expect(
        container,
        "to satisfy",
        `<div><div><!--hidden-->Item 1<span>2</span><!--hidden-->Item 4<span>5</span></div></div>`
      );

      const firstItem = container.firstElementChild.firstElementChild;

      render(html`<div>${children.slice().reverse()}</div>`, container);

      const lastItem = container.firstElementChild.lastElementChild;

      expect(firstItem, "to be", lastItem);

      expect(
        container,
        "to satisfy",
        `<div><div><span key="5">5</span>Item 4<!--hidden--><span key="2">2</span>Item 1<!--hidden--></div></div>`
      );
    });
  });
});
