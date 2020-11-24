const Cache = require("@depository/cache");

class Store {
  constructor(data) {
    this.cache = new Cache(data);
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
    this.cache.notify();

    return action;
  }

  get(...args) {
    return this.cache.get(...args);
  }

  has(...args) {
    return this.cache.has(...args);
  }

  observe(...args) {
    return this.cache.observe(...args);
  }

  computed(...args) {
    return this.cache.computed(...args);
  }

  waitFor(...args) {
    return this.cache.waitFor(...args);
  }
}

module.exports = Store;
