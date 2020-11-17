const updateIn = require("./updateIn");
const isPathAffected = require("./isPathAffected");
const getIn = require("./getIn");
const normalizePath = require("./normalizePath");
const Computed = require("./Computed");
const Cache = require("./Cache");

class Store {
  constructor(data) {
    this.cache = new Cache(data);
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
        action,
      });

    return this;
  }

  use(plugin) {
    plugin(this);
    return this;
  }

  dispatch(action) {
    action.apply(this.cache.scoped(action.path), action);

    return action;
  }

  scoped(scope) {
    const scopedStore = Object.create(this);
    scopedStore.cache = this.cache.scoped(scope);
    return scopedStore;
  }

  set(...args) {
    this.cache.set(...args);
    return this;
  }

  update(...args) {
    this.cache.update(...args);
    return this;
  }

  get(...args) {
    return this.cache.get(...args);
  }

  subscribe(...args) {
    return this.cache.subscribe(...args);
  }

  computed(...args) {
    return this.cache.computed(...args);
  }

  waitFor(...args) {
    return this.cache.waitFor(...args);
  }
}

module.exports = Store;
