const Cache = require("@depository/cache");

class Store {
  constructor(data) {
    this.cache = new Cache(data);
    this.subscriptions = [];
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
    action.apply(this.cache, action);

    return action;
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
