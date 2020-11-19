const updateIn = require("./updateIn");

const setIn = (data, path, value) => updateIn(data, path, (_) => value);

module.exports = setIn;
