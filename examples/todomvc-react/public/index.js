import { html, render } from "@depository/react/html";
import { Application } from "./components/Application.js";

render(html`<${Application} />`, document.getElementById("app"));

if (import.meta.hot && window.__DEPOSITORY__) {
  import.meta.hot.on("vite:beforeFullReload", () => {
    window.__DEPOSITORY__.prepareReload();
  });
}
