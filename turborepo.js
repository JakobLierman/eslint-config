const { rules: baseRules } = require('./index');

const baseRule = baseRules['import/no-extraneous-dependencies'];

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['plugin:turbo/recommended'], // https://github.com/vercel/turborepo/pull/9978/files#r1974406494
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
