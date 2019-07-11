require('dotenv').config();

const Dotenv = require('dotenv-webpack');
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withSASS = require('@zeit/next-sass');

module.exports = withBundleAnalyzer(
  withSASS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]_[hash:base64:5]',
    },
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/contribute': { page: '/contribute' },
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
  })
);
