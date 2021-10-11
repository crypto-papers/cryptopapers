const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        extract: 'cp-ui.css',
        minimize: true,
        modules: {
          generateScopedName: 'cpui_[local]_[hash:base64:8]',
        },
      })
    );

    return config;
  },
};
