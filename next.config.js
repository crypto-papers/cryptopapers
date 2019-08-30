require('dotenv').config();

const Dotenv = require('dotenv-webpack');
const path = require('path');
const compose = require('next-compose');

const withBundleAnalyzer = require('@next/bundle-analyzer');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.md|mdx?$/,
});
const withSASS = require('@zeit/next-sass');

const analyzerConfig = { enabled: process.env.ANALYZE === 'true' };
const mdxConfig = {};
const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]_[hash:base64:5]',
  },
};

module.exports = compose([
  [withBundleAnalyzer, analyzerConfig],
  [withSASS, sassConfig],
  [withMDX, mdxConfig],
  {
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/contribute': { page: '/contribute' },
        '/currencies': { page: '/currencies' },
        '/resources': { page: '/resources' },
      };
    },
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];

      return config;
    },
  },
]);
