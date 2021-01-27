import { html, render } from "htm/preact";
import { Application } from "./components/Application.js";

render(html`<${Application} />`, document.getElementById("app"));
