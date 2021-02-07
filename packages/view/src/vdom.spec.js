import { create, update, html, mount } from "./vdom.js";
import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import { Store } from "@depository/store";
import sinon from "sinon";

const expect = unexpected.clone().use(unexpectedDom);

class Title {
  render({ children }) {
    return html`<h1>${children}</h1>`;
  }
}

class Box {
  render({ title, children }) {
    return html`<div class="box">
      <${Title}>${title}<//>
      <div class="body">${children}</div>
    </div>`;
  }
}

describe("vdom", () => {
  let store, clock;

  beforeEach(() => {
    store = new Store();
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  const renderIntoContainer = (vdom) => {
    const dom = mount(vdom);
    const container = document.createElement("div");
    container.appendChild(dom);
    return container;
  };

  describe("update", () => {
    it("create(b) === update(b, create(a))", () => {
      [
        [false, false],
        [10, false],
        [20, 10],
        ["Hello", "world"],
        ["Hello", 42],
        [html`<h1>Hello</h1>`, html`<h1>world</h1>`],
        [html`<h1>Hello</h1>`, 42],
        [html`<h1>Hello</h1>`, html`<h2>world</h2>`],
        [html`<h1>Hello</h1>`, html`<h2>world</h2>`],
        [html`<${Title}>Hello<//>`, html`<${Title}>world<//>`],
        [html`<${Title}>Hello<//>`, html`<h1>Hello</h1>`],
        [
          html`<${Box} title="Hello"><em>content</em><//>`,
          html`<h1>Hello</h1>`,
        ],
        [
          html`<ul>
            <li>0</li>
            <li>1</li>
            <li>2</li>
          </ul>`,
          html`<ul>
            <li>0</li>
            <li>1</li>
            ${false}
          </ul>`,
        ],
        [
          html`<ul>
            <li key="0">0</li>
            <li key="1">1</li>
            <li key="2">2</li>
          </ul>`,
          html`<ul>
            <li key="1">1</li>
            <li key="0">0</li>
          </ul>`,
        ],
        [
          html`<ul>
            <li key="0">0</li>
            <li key="1">1</li>
            <li key="2">2</li>
          </ul>`,
          html`<ul>
            <li key="0">0</li>
            <li key="1">one</li>
            <li key="2">2</li>
          </ul>`,
        ],
      ].forEach(([a, b]) => {
        const aVDom = create(a, store);
        const bVDom = create(b, store);
        const aContainer = renderIntoContainer(aVDom);
        const bContainer = renderIntoContainer(bVDom);

        update(b, aVDom, store);

        clock.runAll();

        expect(aContainer, "to equal", bContainer);
      });
    });
  });
});