const svgr = require('@svgr/webpack');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: true,
  },
  webpackFinal: async (config, { configType }) => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
    // Exclude SVG from the default storybook file-loader.
    assetRule.exclude = /\.svg$/;

    // Add svgr loader to handle SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: [require.resolve('@svgr/webpack')],
    });

    console.log(config);

    return config;
  },
};
