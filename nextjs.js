/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    './react.js',
    require.resolve('@vercel/style-guide/eslint/next'),
    'next/core-web-vitals',
  ],
};
