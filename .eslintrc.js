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
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as', // Angle bracket notation, while preferred, doesn't play well with JSX.
          },
        ],
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react/display-name': 'off',
      },
    },
  ],
  parser: '@babel/eslint-parser',
};
