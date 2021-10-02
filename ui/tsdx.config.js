const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        minimize: true,
        modules: true,
      })
    );

    return config;
  },
};
