import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginReact from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: [
      '**/package-lock.json',
      '**/tsconfig*.json',
      'dist/**',
      'coverage/**',
    ],
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
    rules: {
      'css/font-family-fallbacks': 'off',
    },
  },
  eslintConfigPrettier,
  // @ts-expect-error - storybook plugin types are incompatible with defineConfig
  ...storybook.configs['flat/recommended'],
]);
