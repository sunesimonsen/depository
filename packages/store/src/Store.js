import { Cache } from "@depository/cache";

export class Store {
  constructor(data) {
    this.cache = new Cache(data);
    this._apply = (action) => {
      action.apply(this.cache, action);
    };
  }

  useMiddleware(middleware) {
    const next = this._apply.bind(this);

    this._apply = (action) =>
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

  async dispatch(action) {
    try {
      await this._apply(action);
    } catch (e) {
      console.error(e);
    } finally {
      this.cache.notify();
    }
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
