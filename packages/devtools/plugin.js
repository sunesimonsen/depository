window.__DEPOSITORY__ = window.__DEPOSITORY__ || {};

window.__DEPOSITORY__.plugin = (options) => (store) => {
  window.addEventListener("message", (event) => {
    // Only accept messages from the same frame
    const sameFrame = event.source === window;
    const message = event.data;

    // Only accept messages that we know are ours
    const fromMiddleware = message && message.source === "depository-devtools";

    if (sameFrame && fromMiddleware) {
      // Message from the Devtools
      if (message.type === "setState") {
        store.cache.set(message.payload);
        store.cache.notify();
      }
    }
  });

  const sendMessage = ({ type, payload }) => {
    window.postMessage(
      { type, source: "depository-devtools-plugin", payload },
      "*"
    );
  };

  window.__DEPOSITORY__.prepareReload = () => {
    sendMessage({ type: "prepareReload" });
  };

  if (window.liveStyle) {
    window.liveStyle.reload = () => {
      window.__DEPOSITORY__.prepareReload();
      window.location.reload();
    };
  }

  const storedString = sessionStorage.getItem("__DEPOSITORY_RELOAD__");
  if (storedString) {
    sessionStorage.removeItem("__DEPOSITORY_RELOAD__");
    const revivedState = JSON.parse(storedString);
    const initialState =
      (revivedState.updates[revivedState.active] || {}).state || {};

    store.cache.set(initialState);
    store.cache.notify();

    sendMessage({
      type: "revive",
      payload: revivedState,
    });
  } else {
    sendMessage({
      type: "init",
      payload: { state: store.get() },
    });
  }

  store.useMiddleware(({ store, next, action }) => {
    const result = next(action);

    if (action.payload !== null) {
      sendMessage({
        type: "update",
        payload: {
          action:
            typeof action.payload === "function"
              ? {
                  ...action,
                  payload: action.payload(store.cache.readonly),
                }
              : action,
          state: store.get(),
        },
      });
    }

    return result;
  });
};
