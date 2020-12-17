import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import { html, render } from "htm/preact";
import { Application } from "./components/Application.js";

render(html`<${Application} />`, document.getElementById("app"));
