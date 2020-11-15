const normalizePath = (path) => {
  if (!path) return [];
  if (typeof path === "string") return [path];
  return path;
};

module.exports = normalizePath;
