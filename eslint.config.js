import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';

import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import boundaries from 'eslint-plugin-boundaries';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactRefresh.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      boundaries,
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        {
          mode: 'full',
          type: 'common',
          pattern: [
            'src/common/components/**/*',
            'src/common/constants/**/*',
            'src/common/contexts/**/*',
            'src/common/hooks/**/*',
            'src/common/icons/**/*',
            'src/common/layouts/**/*',
            'src/common/models/**/*',
            'src/common/services/**/*',
            'src/common/utils/**/*',
            'src/common/validators/**/*',
            'src/common/widgets/**/*',
          ],
        },
        {
          mode: 'full',
          type: 'feature',
          capture: ['featureName'],
          pattern: ['src/features/*/**/*'],
        },
        {
          mode: 'full',
          type: 'router',
          pattern: ['src/router/**/*'],
        },
        {
          mode: 'full',
          type: 'scss',
          pattern: ['src/scss/**/*'],
        },
        {
          mode: 'full',
          type: 'store',
          pattern: ['src/store/**/*'],
        },
        {
          mode: 'full',
          type: 'assets',
          pattern: ['src/assets/**/*'],
        },
      ],
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/vite.config.{js,ts}', '**/*.test.{js,jsx,ts,tsx}', '**/setupTests.{js,ts}'],
        },
      ],
      'import/extensions': 'off',
      'max-len': ['error', { code: 200 }],
      'no-shadow': 'off',
      'linebreak-style': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'no-console': 'warn',
      'import/prefer-default-export': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
        },
      ],
      'boundaries/no-unknown': 'error',
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: ['common'],
              allow: ['common', 'scss', 'assets'],
            },
            {
              from: ['feature'],
              allow: ['common', 'scss', 'store', ['feature', { featureName: '${from.featureName}' }]],
            },
            {
              from: ['router', 'store'],
              allow: ['router', 'feature'],
            },
            {
              from: ['scss'],
              allow: ['scss', 'assets'],
            },
          ],
        },
      ],
    },
    ignores: ['dist', 'eslint.config.js'],
  }
);
