/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['turbo'],
  rules: {
    'turbo/no-undeclared-env-vars': ['error', { allowList: ['CI', 'TZ'] }],
  },
};
