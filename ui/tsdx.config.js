const postcss = require('rollup-plugin-postcss');
const svgr = require('@svgr/rollup').default;

module.exports = {
  rollup(config) {
    config.plugins.push(
      svgr(),
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
