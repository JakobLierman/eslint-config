/* eslint @stylistic/migrate/migrate-js: "error" -- Migrate built-in rules to @stylistic/js namespace */
/* eslint @stylistic/migrate/migrate-ts: "error" -- Migrate `@typescript-eslint` rules to @stylistic/ts namespace */

import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import noSecrets from 'eslint-plugin-no-secrets';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import stylistic from '@stylistic/eslint-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import n from 'eslint-plugin-n';
import regexp from 'eslint-plugin-regexp';
import jsdoc from 'eslint-plugin-jsdoc';
import filenamesSimple from 'eslint-plugin-filenames-simple';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import importX from 'eslint-plugin-import-x';
import eslintCommentsConfigs
  from '@eslint-community/eslint-plugin-eslint-comments/configs';
import security from 'eslint-plugin-security';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default tseslint.config(
  js.configs.recommended,
  ...compat.extends('eslint-config-airbnb'), // https://github.com/airbnb/javascript/issues/2961
  n.configs['flat/recommended'],
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  regexp.configs['flat/recommended'],
  jsdoc.configs['flat/recommended'],
  ...compat.extends('plugin:filenames-simple/recommended'), // https://github.com/epaew/eslint-plugin-filenames-simple/issues/705
  unicorn.configs['flat/recommended'],
  eslintCommentsConfigs.recommended,
  // ...compat.extends('plugin:eslint-comments/recommended'), // https://github.com/mysticatea/eslint-plugin-eslint-comments/issues/82
  security.configs.recommended,
  prettier,
  {
    plugins: {
      'unused-imports': unusedImports,
      'no-secrets': noSecrets,
      jsdoc: jsdoc,
      'prefer-arrow-functions': preferArrowFunctions,
      'filenames-simple': filenamesSimple, // https://github.com/epaew/eslint-plugin-filenames-simple/issues/705
      '@stylistic': stylistic,
    },
    // languageOptions: {
    //   parser: tsParser,
    // },
    settings: {
      'import-x/resolver': { typescript: { alwaysTryTypes: true } },
      'filenames-simple': {
        allowedExtensions: [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx',
          '.d.ts',
          '.ts',
          '.tsx',
          '.vue',
          '.mts',
          '.cts',
        ],
      },
    },
    rules: {
      'dot-notation': ['error', { allowKeywords: false }],
      'import-x/extensions': 'off',
      'import-x/order': ['error'],
      'import-x/no-default-export': 'off',
      'import-x/no-unresolved': 'error',
      'n/no-missing-import': 'off',
      'newline-before-return': 'error',
      'no-secrets/no-secrets': 'error',
      'no-void': ['warn', { allowAsStatement: true }],
      'unused-imports/no-unused-imports': 'error',
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
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/test/*',
            '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}',
            '{vitest,jest}.config.{js,mjs,cjs,ts,mts,cts}',
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
      'unicorn/prevent-abbreviations': [
        'warn',
        {
          replacements: {
            acc: false,
            arg: false,
            args: false,
            dev: false,
            env: false,
            fn: false,
            param: false,
            params: false,
            props: false,
            ref: false,
            var: false,
          },
        },
      ],
      'unicorn/switch-case-braces': 'off',
      '@eslint-community/eslint-comments/require-description': 'warn',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: { project: ['./tsconfig.json'] },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { format: ['UPPER_CASE'], selector: 'enumMember' },
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },
  eslintConfigPrettier,
);
