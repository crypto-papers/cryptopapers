module.exports = {
  extends: ['@cryptopapers/eslint-config', '@cryptopapers/eslint-config/react'],
  ignorePatterns: ['**/.next/', 'docs/', 'front/', '**/dist/', '**/out/'],
  overrides: [
    {
      extends: [
        '@cryptopapers/eslint-config',
        '@cryptopapers/eslint-config/react',
        '@cryptopapers/eslint-config/typescript',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'warn',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react/display-name': 'off'
      }
    }
  ],
  parser: '@babel/eslint-parser',
};
