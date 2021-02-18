const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }: { config: Object, mode: string }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: { modules: true, localIdentName: '[local]_[hash:base64:5]' },
      },
      { loader: 'sass-loader' },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
