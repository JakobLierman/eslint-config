/* eslint @stylistic/migrate/migrate-js: "error" -- Migrate built-in rules to @stylistic/js namespace */
/* eslint @stylistic/migrate/migrate-ts: "error" -- Migrate `@typescript-eslint` rules to @stylistic/ts namespace */

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
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
    'jsdoc',
    'prefer-arrow-functions',
    'filenames-simple',
    'unicorn',
    '@stylistic',
    '@stylistic/migrate',
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'build/',
    'out/',
    'public/',
    'tmp/',
  ], // TODO: Update to flat config: https://eslint.org/docs/latest/use/configure/ignore
  rules: {
    'dot-notation': ['error', { allowKeywords: false }],
    'import/extensions': 'off',
    'import/order': ['error'], // TODO: Finetune (https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
    'import/no-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off', // Well, I simply don't prefer it
    'jsdoc/no-defaults': 'off', // Some editors like this syntax, and extra documentation can't hurt
    'jsdoc/require-param': ['warn', { checkDestructured: false }], // Disable destructured checks, as they are not always necessary
    'jsdoc/check-param-names': ['warn', { checkDestructured: false }], // Disable destructured checks, as they are not always necessary
    'n/no-missing-import': 'off', // Cannot handle Typescript path aliases
    'n/no-unsupported-features/node-builtins': 'warn',
    'newline-before-return': 'error',
    'no-case-declarations': 'off', // Too strict, even for my liking
    'unused-imports/no-unused-imports': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test/*',
          '**/tests/*',
          '**/scripts/*',
          '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}',
          '*.config.{js,mjs,cjs,ts,mts,cts}',
          '*tailwind*.{js,mjs,cjs,ts,mts,cts}',
        ],
      },
    ],
    'filenames-simple/named-export': 'off',
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      { returnStyle: 'implicit' },
    ],
    'unicorn/filename-case': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/prefer-global-this': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'eslint-comments/require-description': 'warn',
    'no-void': ['warn', { allowAsStatement: true }],
  },
  settings: {
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
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
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
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: { attributes: false } },
        ],
        'jsdoc/no-types': 'warn', // Types not needed in JSDoc comments, TypeScript does this
        'jsdoc/no-undefined-types': 'off', // Types not needed in JSDoc comments, TypeScript does this
        'jsdoc/require-param-type': 'off', // Not needed, TypeScript does this
        'jsdoc/require-property-type': 'off', // Not needed, TypeScript does this
        'jsdoc/require-returns-type': 'off', // Not needed, TypeScript does this
      },
    },
    {
      files: ['*.test.*'], // Test files
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
