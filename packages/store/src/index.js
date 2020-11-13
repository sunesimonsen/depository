const updateIn = require("./updateIn");
const isPathAffected = require("./isPathAffected");
const getIn = require("./getIn");

class Store {
  constructor(data = {}) {
    this.data = data;
    this.subscriptions = [];
  }

  get(path) {
    return getIn(this.data, path);
  }

  dispatch({ path = [], apply }) {
    this.data = updateIn(this.data, path, (value) => apply(value, this));
    this.subscriptions.forEach((subscription) => {
      if (isPathAffected(subscription.path, path)) {
        subscription.listener(this.get(subscription.path), this);
      }
    });
  }

  subscribe(path, listener) {
    this.subscriptions.push({
      path,
      listener,
    });
  }
}

module.exports = Store;
