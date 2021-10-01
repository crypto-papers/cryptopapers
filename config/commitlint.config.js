module.exports = {
  extends: ['@cryptopapers/commitlint-config'],
  rules: {
    'scope-enum': [2, 'always', ['admin', 'api', 'front', 'ui']],
  },
};
