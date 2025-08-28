/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./react.js', 'next/core-web-vitals', 'next/typescript'],
  rules: {
    'unicorn/prefer-node-protocol': 'off',
  },
};
