const updateIn = require("./updateIn");
const isPathAffected = require("./isPathAffected");
const getIn = require("./getIn");

const normalizePath = (path) => {
  if (!path) return [];
  if (typeof path === "string") return [path];
  return path;
};

class Store {
  constructor(data = {}) {
    this.data = data;
    this.subscriptions = [];

    this.dispatch = (action) => {
      const path = normalizePath(action.path);
      const apply = action.apply;

      this.data = updateIn(this.data, path, (value) => apply(value, this));
      this.subscriptions.forEach((subscription) => {
        if (isPathAffected(subscription.path, path)) {
          subscription.listener(this.get(subscription.path), this);
        }
      });
      return action;
    };
  }

  useMiddleware(middleware) {
    const next = this.dispatch;

    this.dispatch = (action) =>
      middleware({
        store: this,
        next,
        action: { path: normalizePath(action.path), ...action },
      });
  }

  use(plugin) {
    plugin(this);
    return this;
  }

  get(path) {
    return getIn(this.data, normalizePath(path));
  }

  set(path, value) {
    this.dispatch({
      name: "set",
      path: normalizePath(path),
      apply: () => value,
    });
  }

  update(...args) {
    let apply, path;

    if (args.length === 1) {
      path = [];
      apply = args[0];
    } else {
      path = args[0];
      apply = args[1];
    }

    this.dispatch({ name: "update", path: normalizePath(path), apply });
  }

  subscribe(...args) {
    let path, listener;

    if (args.length === 1) {
      path = [];
      listener = args[0];
    } else {
      path = args[0];
      listener = args[1];
    }

    const subscription = {
      path: normalizePath(path),
      listener,
      unsubscribe: () => {
        this.subscriptions = this.subscriptions.filter(
          (s) => s != subscription
        );
      },
    };

    this.subscriptions.push(subscription);

    return subscription;
  }
}

module.exports = Store;
