/* eslint @stylistic/migrate/migrate-js: "error" -- Migrate built-in rules to @stylistic/js namespace */
/* eslint @stylistic/migrate/migrate-ts: "error" -- Migrate `@typescript-eslint` rules to @stylistic/ts namespace */

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:n/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:regexp/recommended',
    'plugin:jsdoc/recommended',
    'plugin:filenames-simple/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
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
    'prefer-arrow-functions',
    'filenames-simple',
    'unicorn',
    '@stylistic',
    '@stylistic/migrate',
  ],
  rules: {
    'dot-notation': ['error', { allowKeywords: false }],
    'import/extensions': 'off',
    'import/order': ['error'],
    'import/no-default-export': 'off',
    'import/no-unresolved': 'error',
    'n/no-missing-import': 'off', // Cannot handle Typescript path aliases
    'n/no-unsupported-features/node-builtins': 'warn',
    'newline-before-return': 'error',
    'no-secrets/no-secrets': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test/*',
          '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}',
          '*.config.{js,mjs,cjs,ts,mts,cts}',
        ],
      },
    ],
    'filenames-simple/named-export': 'off',
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      { returnStyle: 'implicit' },
    ],
    'unicorn/filename-case': 'off',
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          acc: false,
          dev: false,
          env: false,
          params: false,
          props: false,
          ref: false,
          var: false,
        },
      },
    ],
    'eslint-comments/require-description': 'warn',
    // TESTING: TODO: Remove this rule
    'n/no-extraneous-import': 'off',
    'n/no-extraneous-require': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
      'filenames-simple': {
        allowedExtensions: [
          '.js',
          '.ts',
          '.d.ts',
          '.cjs',
          '.mjs',
          '.mts',
          '.cts',
          '.jsx',
          '.tsx',
          '.vue',
        ],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'], // TypeScript files extensions
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
        '@typescript-eslint/no-inferrable-types': 'off',
      },
    },
  ],
};
