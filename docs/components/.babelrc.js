const path = require("path");
const publicDir = path.join(__dirname, "public");

module.exports = {
  plugins: [
    "stylewars",
    [
      "htm",
      {
        import: "@depository/view",
        useBuiltIns: true,
        useNativeSpread: true,
      },
    ],
  ],
};
