import { create, update, html, mount } from "./vdom.js";
import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";
import { Store } from "@depository/store";
import sinon from "sinon";

const renderIntoContainer = (vdom) => {
  const dom = mount(vdom);
  const container = document.createElement("div");
  if (Array.isArray(dom)) {
    dom.forEach((child) => {
      container.appendChild(child);
    });
  } else {
    container.appendChild(dom);
  }
  return container;
};

const expect = unexpected
  .clone()
  .use(unexpectedDom)
  .addAssertion("<any> to update to <any>", (expect, a, b) => {
    const clock = sinon.useFakeTimers();
    const store = new Store();
    const aVDom = create(a, store);
    const bVDom = create(b, store);
    const aContainer = renderIntoContainer(aVDom);
    const bContainer = renderIntoContainer(bVDom);

    try {
      update(b, aVDom, store);

      clock.runAll();

      expect(aContainer, "to equal", bContainer);
    } finally {
      clock.restore();
    }
  });

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

class Numbers {
  render() {
    return html`
      <li>one</li>
      <li>two</li>
      <li>three</li>
    `;
  }
}

class Childish {
  render({ children }) {
    return children;
  }
}

describe("vdom", () => {
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
          html`<div><span>something</span><${Title}>Hello<//></div>`,
          html`<div>
            <span>something</span>
            <h1>Hello</h1>
          </div>`,
        ],
        [
          html`<div>
            <span>something</span>
            <h1>Hello</h1>
          </div>`,
          html`<div><span>something</span><${Title}>Hello<//></div>`,
        ],
        [
          html`<div>Hello</div>`,
          html`<span>one</span><span>two</span><span>three</span>`,
        ],
        [
          html`<span>one</span><span>two</span><span>three</span>`,
          html`<div>Hello</div>`,
        ],
        [
          html`<ul>
            <${Numbers} />
          </ul>`,
          html`<ul>
            <li>zero</li>
            <${Numbers} />
          </ul>`,
        ],
        [
          html`<ul>
            <li>zero</li>
            <${Numbers} />
          </ul>`,
          html`<ul>
            <${Numbers} />
          </ul>`,
        ],
        [
          html`<ul>
            <${Numbers} />
          </ul>`,
          html`<ul>
            <${Numbers} />
            <li>four</li>
          </ul>`,
        ],
        [
          html`<ul>
            <${Numbers} />
            <li>four</li>
          </ul>`,
          html`<ul>
            <${Numbers} />
          </ul>`,
        ],
        [html`<${Childish}><//>`, html`<${Childish}><span>0</span><//>`],
        [html`<${Childish}><span>0</span><//>`, html`<${Childish}><//>`],
        [
          html`<${Childish}><span #="0">0</span><//>`,
          html`<${Childish}><span #="0">0</span><span #="1">1</span><//>`,
        ],
        [
          html`<${Childish}><${Title} #="0">0<//><//>`,
          html`<${Childish}><${Title} #="0">0<//><${Title} #="1">1<//><//>`,
        ],
        [
          html`<ul>
            <${Numbers} #="0" />
          </ul>`,
          html`<ul>
            <${Numbers} #="0" />
            <${Childish}><li>four</li><//>
          </ul>`,
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
          </ul>`,
          html`<ul>
            <li #="0">0</li>
            <li #="1">1</li>
            <li #="2">2</li>
          </ul>`,
        ],
        [
          html`<ul>
            <li #="0">0</li>
            <li #="1">1</li>
            <${Numbers} #3 />
          </ul>`,
          html`<ul>
            <li #="0">0</li>
            <li #="1">1</li>
            <li #="2">2</li>
            <${Numbers} #3 />
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
            <li #="1">1</li>
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
        [
          html`<div style="color: white; background-color: black">Hello</div>`,
          html`<div>Hello</div>`,
        ],
        [
          html`<div
            style="background: -moz-linear-gradient(top, #000 0%, #fff 100%)"
          >
            Hello
          </div>`,
          html`<div>Hello</div>`,
        ],
        [
          html`<div>Hello</div>`,
          html`<div style="color: white; background-color: black">Hello</div>`,
        ],
        [
          html`<div style="color: red">Hello</div>`,
          html`<div style="color: white; background-color: black">Hello</div>`,
        ],
        [
          html`<div style="color: white; background-color: black">Hello</div>`,
          html`<div style="color: red">Hello</div>`,
        ],
        [
          html`<div style="color: white; background-color: black">Hello</div>`,
          html`<div style=${{ color: "red" }}>Hello</div>`,
        ],
        [
          html`<div style="color: red">Hello</div>`,
          html`<div style=${{ color: "white", backgroundColor: "black" }}>
            Hello
          </div>`,
        ],
        [
          html`<div style=${{ color: "red" }}>Hello</div>`,
          html`<div>Hello</div>`,
        ],
        [
          html`<div>Hello</div>`,
          html`<div style=${{ color: "red" }}>Hello</div>`,
        ],
        [
          html`<div style=${{ color: "red" }}>Hello</div>`,
          html`<div style=${{ color: "white", backgroundColor: "black" }}>
            Hello
          </div>`,
        ],
        [
          html`<div style=${{ color: "white", backgroundColor: "black" }}>
            Hello
          </div>`,
          html`<div style=${{ color: "red" }}>Hello</div>`,
        ],
        [
          html`
            <svg height="100" width="100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="black"
                stroke-width="3"
                fill="red"
              />
            </svg>
          `,
          html`
            <svg height="100" width="100">
              <circle
                cx="100"
                cy="100"
                r="40"
                stroke="black"
                stroke-width="3"
                fill="red"
              />
            </svg>
          `,
        ],
        [
          html`<span>Something else</span>`,
          html`
            <svg height="100" width="100">
              <circle
                cx="100"
                cy="100"
                r="40"
                stroke="black"
                stroke-width="3"
                fill="red"
              />
            </svg>
          `,
        ],
        [
          html`
            <svg height="100" width="100">
              <circle
                cx="100"
                cy="100"
                r="40"
                stroke="black"
                stroke-width="3"
                fill="red"
              />
            </svg>
          `,
          html`<span>Something else</span>`,
        ],
      ].forEach(([a, b]) => {
        expect(a, "to update to", b);
      });
    });
  });
});
