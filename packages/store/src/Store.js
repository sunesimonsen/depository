const updateIn = require("./updateIn");
const isPathAffected = require("./isPathAffected");
const getIn = require("./getIn");
const normalizePath = require("./normalizePath");
const Computed = require("./Computed");

class Store {
  constructor(data = {}) {
    this.data = data;
    this.subscriptions = [];
    this.scope = [];
  }

  scopePath(path) {
    if (this.scope.length > 0) {
      return [...this.scope, ...normalizePath(path)];
    } else {
      return normalizePath(path);
    }
  }

  scopeAction(action) {
    if (action.scoped) {
      return action;
    }

    return {
      ...action,
      scoped: true,
      path: this.scopePath(action.path),
    };
  }

  useMiddleware(middleware) {
    const next = this.dispatch.bind(this);

    this.dispatch = (action) =>
      middleware({
        store: this,
        next,
        action: this.scopeAction(action),
      });

    return this;
  }

  use(plugin) {
    plugin(this);
    return this;
  }

  dispatch(action) {
    const { path, apply } = this.scopeAction(action);

    this.data = updateIn(this.data, path, (value) => apply(value, this));
    this.subscriptions.forEach((subscription) => {
      if (isPathAffected(subscription.path, path)) {
        subscription.listener(getIn(this.data, subscription.path), this);
      }
    });
    return action;
  }

  get(path) {
    return getIn(this.data, this.scopePath(path));
  }

  set(path, value) {
    this.dispatch({
      name: "set",
      path,
      apply: () => value,
    });

    return this;
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

    return this;
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
      path: this.scopePath(path),
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

  scoped(scope) {
    const scopedStore = Object.create(this);
    scopedStore.wat = true;
    scopedStore.scope = [...scopedStore.scope, ...normalizePath(scope)];
    return scopedStore;
  }

  computed(options) {
    return new Computed({ store: this, ...options });
  }
}

module.exports = Store;
