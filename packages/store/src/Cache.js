const updateIn = require("./updateIn");
const isPathAffected = require("./isPathAffected");
const getIn = require("./getIn");
const normalizePath = require("./normalizePath");
const Computed = require("./Computed");

class Cache {
  constructor(data = {}) {
    this._data = data;
    this.subscriptions = [];
  }

  _setData = (data) => {
    this._data = data;
  };

  get data() {
    return this._data;
  }

  get(path) {
    return getIn(this.data, normalizePath(path));
  }

  set(...args) {
    let path, value;

    if (args.length === 1) {
      path = [];
      value = args[0];
    } else {
      path = args[0];
      value = args[1];
    }

    this.update(path, () => value);

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

    path = normalizePath(path);

    this._setData(updateIn(this.data, path, (value) => apply(value, this)));
    this.subscriptions.forEach((subscription) => {
      if (isPathAffected(subscription.path, path)) {
        subscription.listener(getIn(this.data, subscription.path), this);
      }
    });

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

  computed(options) {
    return new Computed({ cache: this, ...options });
  }

  waitFor(...args) {
    let path, predicate;

    if (args.length === 1) {
      path = [];
      predicate = args[0];
    } else {
      path = args[0];
      predicate = args[1];
    }

    return new Promise((resolve) => {
      const initialValue = this.get(path);
      if (predicate(initialValue)) {
        resolve(initialValue);
      }

      const subscription = this.subscribe(path, (value) => {
        if (predicate(value)) {
          subscription.unsubscribe();
          resolve(value);
        }
      });
    });
  }
}

module.exports = Cache;
