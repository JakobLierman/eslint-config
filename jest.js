/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    require.resolve('@vercel/style-guide/eslint/jest'),
  ],
  plugins: ['jest'],
  env: { 'jest/globals': true },
};
