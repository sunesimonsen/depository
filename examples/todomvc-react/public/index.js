import { html, render } from "@depository/react/html";
import { Application } from "./components/Application.js";

render(html`<${Application} />`, document.getElementById("app"));
