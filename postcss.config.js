const cssnano = require("cssnano");
const postcssEasyImport = require("postcss-easy-import");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssEasyImport(),
    postcssPresetEnv({
      features: { "nesting-rules": true }
    }),
    cssnano()
  ]
};
