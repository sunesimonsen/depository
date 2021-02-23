const port = chrome.runtime.connect({ name: "page" });

port.postMessage({ type: "connected" });

const reloadStateKey = "__DEPOSITORY_RELOAD__";

class ActionStore {
  constructor() {
    this.active = 0;
    this.updates = [];
  }

  broadcastUpdates() {
    port.postMessage({
      type: "updates",
      payload: {
        active: this.active,
        updates: this.updates,
      },
    });
  }

  init({ state }) {
    this.active = 0;
    this.updates = [{ action: { name: "init" }, state }];

    this.broadcastUpdates();
  }

  prepareReload() {
    sessionStorage.setItem(
      reloadStateKey,
      JSON.stringify({
        active: this.active,
        updates: this.updates,
      })
    );
  }

  revive({ active, updates }) {
    this.active = active;
    this.updates = updates;
    this.broadcastUpdates();
  }

  update(update) {
    this.active++;
    this.updates = this.updates.slice(0, this.active);
    this.updates.push(update);

    this.broadcastUpdates();
  }
}

const actionStore = new ActionStore();

const sendMessageToPage = ({ type, payload }) =>
  window.postMessage(
    {
      source: "depository-devtools",
      type,
      payload,
    },
    "*"
  );

const restore = (selectedUpdate) => {
  const update = actionStore.updates[selectedUpdate];
  actionStore.active = selectedUpdate;
  actionStore.broadcastUpdates();
  sendMessageToPage({
    type: "setState",
    payload: update.state,
  });
};

port.onMessage.addListener((message) => {
  switch (message.type) {
    case "connectDevtools":
      actionStore.broadcastUpdates();
      break;
    case "restore":
      restore(message.payload);
      break;
  }
});

window.addEventListener("message", (event) => {
  // Only accept messages from the same frame
  const sameFrame = event.source === window;
  const message = event.data;

  // Only accept messages that we know are ours
  const fromMiddleware =
    message && message.source === "depository-devtools-plugin";

  if (sameFrame && fromMiddleware) {
    switch (message.type) {
      case "prepareReload":
        actionStore.prepareReload();
        break;
      case "revive":
        actionStore.revive(message.payload);
        break;
      case "init":
        actionStore.init(message.payload);
        break;
      case "update":
        actionStore.update(message.payload);
        break;
    }
  }
});

const injectScript = (filePath) => {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", filePath);
  (document.head || document.documentElement).appendChild(script);
};

injectScript(chrome.extension.getURL("plugin.js"));
