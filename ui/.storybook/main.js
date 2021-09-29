module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  typescript: {
    check: true,
  }
};
