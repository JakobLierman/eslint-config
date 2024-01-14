/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'eslint-config-airbnb',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'prettier', // Prettier must be last
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'regexp',
    'no-secrets',
    'jsdoc',
  ],
  rules: {
    'import/order': ['error'],
    'import/no-unresolved': 'error',
    'newline-before-return': 'error',
    'no-secrets/no-secrets': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['UPPER_CASE'],
            selector: 'enumMember',
          },
        ],
      },
    },
  ],
};
