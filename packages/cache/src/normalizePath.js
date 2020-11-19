const normalizePath = (path) => {
  if (!path) return [];
  if (typeof path === "string") return path.split(".");
  return path;
};

module.exports = normalizePath;
