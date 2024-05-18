/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  plugins: ['jest'],
  env: { 'jest/globals': true },
};
