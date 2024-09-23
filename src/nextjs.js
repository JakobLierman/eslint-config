/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./react-old.js', 'next/core-web-vitals'],
  rules: {
    'unicorn/prefer-node-protocol': 'off',
  },
};
