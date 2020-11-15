const updateIn = require("./updateIn");
const isPathAffected = require("./isPathAffected");
const getIn = require("./getIn");

class Store {
  constructor(data = {}) {
    this.data = data;
    this.subscriptions = [];

    this.dispatch = (action) => {
      const { path = [], apply } = action;
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
        action: action.path ? action : { path: [], ...action },
      });
  }

  get(path) {
    return getIn(this.data, path);
  }

  set(path, value) {
    this.dispatch({ name: "set", path, apply: () => value });
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

    this.dispatch({ name: "update", path, apply });
  }

  subscribe(path, listener) {
    const subscription = {
      path,
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
