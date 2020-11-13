const updateIn = require("./updateIn");

class Store {
  constructor(data = {}) {
    this.data = data;
  }

  dispatch({ path = "", apply }) {
    this.data = updateIn(this.data, path, apply);
  }
}

module.exports = Store;
