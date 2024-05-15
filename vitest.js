/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'plugin:vitest/recommended',
    require.resolve('@vercel/style-guide/eslint/vitest'),
  ],
};
