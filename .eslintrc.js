module.exports = {
  extends: ['@cryptopapers/eslint-config', '@cryptopapers/eslint-config/react'],
  ignorePatterns: ['**/dist/'],
  overrides: [
    {
      extends: [
        '@cryptopapers/eslint-config',
        '@cryptopapers/eslint-config/react',
        '@cryptopapers/eslint-config/typescript',
      ],
      files: ['**/*.ts', '**/*.tsx'],
    },
  ],
  parser: '@babel/eslint-parser',
};
