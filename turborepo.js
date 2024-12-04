const path = require('node:path');
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
        packageDir: [
          __dirname,
          path.join(__dirname, '../..'), // Package directories for monorepos
        ],
      },
    ],
  },
};
