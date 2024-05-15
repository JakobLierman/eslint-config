/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [require.resolve('@vercel/style-guide/eslint/playwright-test')],
};
