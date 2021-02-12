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
        ["Hello", html`<img src="https://example.com" />`],
        [
          html`<img src="https://example.com" />`,
          html`<img src="https://www.example.com" />`,
        ],
        [html`<h1>Hello</h1>`, html`<h1>world</h1>`],
        [html`<h1>Hello</h1>`, 42],
        [html`<h1>Hello</h1>`, html`<h1>Hello ${42}</h1>`],
        [html`<h1>Hello</h1>`, html`<h2>world</h2>`],
        [html`<h1>Hello</h1>`, html`<h2>world</h2>`],
        [
          html`<input type="checkbox" checked />`,
          html`<input type="checkbox" />`,
        ],
        [
          html`<input type="checkbox" />`,
          html`<input type="checkbox" checked />`,
        ],
        [
          html`<input type="checkbox" checked />`,
          html`<input type="checkbox" checked=${false} />`,
        ],
        [html`<${Title}>Hello<//>`, html`<${Title}>world<//>`],
        [html`<${Title}>Hello<//>`, html`<${Title}><span>world</span><//>`],
        [
          html`<${Title}>Hello<//>`,
          html`<${Title}>Hello <span>world</span><//>`,
        ],
        [html`<${Title}>Hello<//>`, html`<h1>Hello</h1>`],
        [
          html`<${Box} title="Hello"><em>content</em><//>`,
          html`<h1>Hello</h1>`,
        ],
        [
          html`<ul></ul>`,
          html`<ul>
            <li>0</li>
            <li>1</li>
          </ul>`,
        ],
        [
          html`<ul>
            <li>0</li>
            <li>1</li>
          </ul>`,
          html`<ul></ul>`,
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
          html`<ul></ul>`,
          html`<ul>
            <li #="1">1</li>
            <li #="0">0</li>
          </ul>`,
        ],
        [
          html`<ul></ul>`,
          html`<ul>
            <li #="1">1</li>
            <li #="0">0</li>
          </ul>`,
        ],
        [
          html`<ul>
            <li #="0">0</li>
            <li #="1">1</li>
            <li #="2">2</li>
          </ul>`,
          html`<ul>
            <li #="1">1</li>
            <li #="0">0</li>
          </ul>`,
        ],
        [
          html`<ul>
            <li #="0">0</li>
            <li #="1">1</li>
            <li #="2">2</li>
          </ul>`,
          html`<ul>
            <li #="0">0</li>
            <li #="1">one</li>
            <li #="2">2</li>
          </ul>`,
        ],
        [
          html`<ul>
            <li #="0">0</li>
            <li #="1">1</li>
            <li #="2">2</li>
          </ul>`,
          html`<ul>
            <li #="4">4</li>
            <li #="5">5</li>
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
