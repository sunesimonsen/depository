import { html } from "@depository/view";
import { css } from "stylewars";
import { IconButton } from "@depository/components";
import { JSFiddleLogo } from "./JSFiddleLogo.js";

const formStyles = css`
  & {
    display: inline;
  }
`;

const importmap = `
<script type="importmap">
{
  "imports": {
    "stylewars": "https://unpkg.com/stylewars@1.7.1/dist/bundle.esm.js",
    "@depository/store": "https://unpkg.com/@depository/store@0.30.0/dist/store.esm.js",
    "@depository/view": "https://unpkg.com/@depository/view@0.30.0/dist/view.esm.js",
    "@depository/components/icons/": "https://unpkg.com/@depository/components@0.30.0/src/icons/",
    "@depository/components": "https://unpkg.com/@depository/components@0.30.0/dist/components.esm.js"
  }
}
</script>
`;

const jsFiddleCSS = `\
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
}
`;

const template = (content) => `\
import { render } from '@depository/view';
import { Store } from "@depository/store";

${content}

render(html\`<\${Example} />\`, new Store());
`;

const fetchContent = (src) =>
  fetch(src)
    .then(async (response) => response.text())
    .catch((e) => {
      console.error(e);
    });

export class JSFiddleButton {
  constructor() {
    this.onClick = () => {
      const src = this.props.src;

      return fetchContent(src).then((content) => {
        const form = this._formRef;

        form.querySelector("input[name=js]").value = template(content);
        form.querySelector("input[name=html]").value = importmap;
        form.submit();
      });
    };

    this._setFormRef = (ref) => {
      this._formRef = ref;
    };
  }

  render() {
    return html`
      <${IconButton} basic @click=${this.onClick}>
        <${JSFiddleLogo} />
      <//>
      <form
        ref=${this._setFormRef}
        method="post"
        target="_blank"
        action="https://jsfiddle.net/api/post/library/pure/"
        class=${formStyles}
      >
        <input type="hidden" name="title" value="@depository/components" />
        <input
          type="hidden"
          name="description"
          value="See https://depository-components.surge.sh/ for more information"
        />
        <input type="hidden" name="js" />
        <input type="hidden" name="html" />
        <input type="hidden" name="css" value=${jsFiddleCSS} />
      </form>
    `;
  }
}
