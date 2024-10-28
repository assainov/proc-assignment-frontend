import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jest from 'eslint-plugin-jest';
import pluginCypress from 'eslint-plugin-cypress/flat';

const config = [
  pluginCypress.configs.recommended,
  { ignores: ['dist'] },
  {
    files: ['test/**'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      semi: ['error', 'always'],
      'react/prefer-stateless-function': 'error',
      'react/button-has-type': 'error',
      'react/no-unused-prop-types': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-script-url': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/jsx-fragments': 'error',
      'react/destructuring-assignment': [
        'error',
        'always',
        { destructureInSignature: 'always' },
      ],
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
      'react/jsx-max-depth': ['error', { max: 5 }],
      'react/function-component-definition': [
        'warn',
        { namedComponents: 'arrow-function' },
      ],
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/no-typos': 'warn',
      'react/display-name': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-sort-props': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/prop-types': 'off',
      quotes: ['error', 'single'],
      'indent': ['error', 2],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'react/jsx-newline': ['error', { 'prevent': true }],
      'arrow-body-style': 'warn',
      'prefer-arrow-callback': [
        'warn',
        {
          allowNamedFunctions: true,
        },
      ],
      'no-trailing-spaces': ['error', { 'ignoreComments': true }],
      'jsx-quotes'       : 'error',
      'react/forbid-prop-types': 'off',
      'react/jsx-boolean-value': 'error',
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-curly-spacing': 'error',
      'react/jsx-handler-names': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-no-bind': 'off',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-literals': 'off',
      'react/jsx-no-undef': 'error',
      'react/jsx-sort-prop-types': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-deprecated': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-is-mounted': 'error',
      'react/no-multi-comp': 'off',
      'react/no-set-state': 'error',
      'react/no-string-refs': 'off',
      'react/no-unknown-property': 'error',
      'react/prefer-es6-class': 'error',
      'react/sort-comp': 'error',
    },
  },
];

export default config;