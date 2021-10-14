import { Cache } from "@depository/cache";

export class Store {
  constructor(data) {
    this.cache = new Cache(data);
    this._apply = (action) => {
      let payload = action.payload;
      if (payload !== null) {
        if (typeof payload === "function" && action.inputs) {
          payload = payload(this.cache.get(action.inputs));
        }

        Object.entries(payload).forEach(([pathPattern, value]) => {
          this.cache.set(pathPattern, value);
        });
      }
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
}
