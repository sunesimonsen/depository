const isPathAffected = (path, changedPath) => {
  const minLength = Math.min(path.length, changedPath.length);
  for (let i = 0; i < minLength; i++) {
    if (path[i] !== changedPath[i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPathAffected;
