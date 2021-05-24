import { render, html } from "./dependencies/view.esm.js";
import { Store } from "./dependencies/store.esm.js";
import { Root } from "./components/Root.js";

const store = new Store({
  active: 0,
  selectedUpdate: 0,
});

store.useMiddleware(({ store, next, action }) => {
  if (action.type === "connect") {
    port.postMessage({
      type: "connectDevtools",
      dest: chrome.devtools.inspectedWindow.tabId,
    });
  } else if (action.type === "restore") {
    const selectedUpdate = store.get("selectedUpdate");

    port.postMessage({
      type: "restore",
      dest: chrome.devtools.inspectedWindow.tabId,
      payload: selectedUpdate,
    });
  } else {
    return next(action);
  }
});

const port = chrome.runtime.connect({ name: "panel" });

port.onMessage.addListener(({ type, payload }) => {
  if (type === "updates") {
    store.dispatch({ payload });
  }
});

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  port.postMessage({
    type: "connectDevtools",
    dest: chrome.devtools.inspectedWindow.tabId,
  });
});

render(html`<${Root} />`, store, window.document.body);
