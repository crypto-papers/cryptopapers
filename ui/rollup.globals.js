const del = require('rollup-plugin-delete');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: './src/globals.ts',
  output: {
    file: './dist/globals.js',
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
    del({
      hook: 'writeBundle',
      targets: './dist/globals.js',
    }),
  ],
};
