const { rules: baseRules } = require('./index');

const baseRule = baseRules['import/no-extraneous-dependencies'];

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['turbo'],
  rules: {
    'turbo/no-undeclared-env-vars': ['error', { allowList: ['CI', 'TZ'] }],
    'import/no-extraneous-dependencies': [
      baseRule[0],
      {
        ...baseRule[1],
        packageDir: ['.', '../..'], // Package directories for monorepos
      },
    ],
  },
};
