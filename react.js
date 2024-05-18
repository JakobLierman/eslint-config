/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:xss/recommended',
  ],
  plugins: ['react', 'xss'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
        ignoreFilesWithoutCode: true,
      },
    ],
    'react/require-default-props': 'off',
  },
};
