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
  })
);
