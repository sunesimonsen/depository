const getIn = (data, path) => {
  let current = data;
  for (let i = 0; i < path.length; i++) {
    const segment = path[i];
    if (segment in current) {
      current = current[segment];
    } else {
      return;
    }
  }

  return current;
};

module.exports = getIn;
