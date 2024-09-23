import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import xxs from 'eslint-plugin-xss';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import tailwind from 'eslint-plugin-tailwindcss';
import baseConfig from './base.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...baseConfig,
  react.configs.recommended,
  react.configs['jsx-runtime'],
  ...compat.extends('plugin:react-hooks/recommended'), // https://github.com/facebook/react/issues/28313
  xxs.configs.recommended,
  tanstackQuery.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      react: react,
      'react-hooks': fixupPluginRules(reactHooks),
      xss: xxs,
      '@tanstack/query': tanstackQuery,
    },
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        callees: [
          'classnames',
          'clsx',
          'ctl',
          'cva',
          'tv',
          'cn',
          'twJoin',
          'twMerge',
        ],
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
        { extensions: ['.jsx', '.tsx'], ignoreFilesWithoutCode: true },
      ],
      'react/require-default-props': 'off',
      'unicorn/consistent-function-scoping': 'off',
    },
  },
];
