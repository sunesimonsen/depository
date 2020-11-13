const updateIn = (data, path, apply) => {
  if (path.length === 0) {
    return apply(data);
  }

  const field = path[0];

  return {
    ...data,
    [field]: updateIn(data[field] || {}, path.slice(1), apply),
  };
};

module.exports = updateIn;
