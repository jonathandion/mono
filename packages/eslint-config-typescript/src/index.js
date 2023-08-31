const basic = require('@jdion/eslint-config-core')

const fs = require('fs')
const { join } = require('node:path')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

module.exports = {
  extends: [
    '@jdion/eslint-config-core',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: basic.overrides.concat(
    !fs.existsSync(join(process.cwd(), tsconfig))
      ? []
      : [{
        parserOptions: {
          tsconfigRootDir: process.cwd(),
          project: [
            tsconfig,
            './**/*/tsconfig.*',
          ],
        },
        parser: '@typescript-eslint/parser',
        excludedFiles: ['**/*.md/*.*'],
        files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
        rules: {
          // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
          'no-throw-literal': 'off',
          '@typescript-eslint/no-throw-literal': 'error',
          'no-implied-eval': 'off',
          '@typescript-eslint/no-implied-eval': 'error',
          'dot-notation': 'off',
          '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
          '@typescript-eslint/no-floating-promises': 'error',
          '@typescript-eslint/no-misused-promises': 'error',
          '@typescript-eslint/await-thenable': 'error',
          '@typescript-eslint/no-for-in-array': 'error',
          '@typescript-eslint/no-unnecessary-type-assertion': 'error',
          '@typescript-eslint/no-unsafe-argument': 'error',
          '@typescript-eslint/no-unsafe-assignment': 'error',
          '@typescript-eslint/no-unsafe-call': 'error',
          '@typescript-eslint/no-unsafe-member-access': 'error',
          '@typescript-eslint/no-unsafe-return': 'error',
          'require-await': 'off',
          '@typescript-eslint/require-await': 'error',
          '@typescript-eslint/restrict-plus-operands': 'error',
          '@typescript-eslint/restrict-template-expressions': 'error',
          '@typescript-eslint/unbound-method': 'error',
          '@typescript-eslint/prefer-optional-chain': 'error',
          '@typescript-eslint/naming-convention': [
            'error',
            {
              selector: 'default',
              format: ['strictCamelCase', 'StrictPascalCase', 'snake_case'],
              leadingUnderscore: 'allow',
            },
            {
              selector: 'variable',
              format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
              leadingUnderscore: 'allow',
            },
            {
              selector: ['enum', 'enumMember', 'typeLike'],
              format: ['StrictPascalCase'],
              leadingUnderscore: 'allow',
            },
            {
              // Allows destructured properties to retain their original name
              selector: 'variable',
              modifiers: ['destructured'],
              format: null,
            },
            {
              // Removes the convention for property names that requires quoting (for example, HTTP headers)
              selector: 'default',
              format: null,
              modifiers: ['requiresQuotes'],
            },
          ],
        },
      }, {
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        files: ['**/__tests__/**/*.tsx', '**/*.spec.tsx', '**/*.test.tsx'],
        plugins: ['jest', 'jest-dom'],
        extends: ['plugin:jest/all', 'plugin:jest-dom/recommended'],
        rules: {
          // you should turn the original rule off *only* for test files
          '@typescript-eslint/unbound-method': 'off',
          'jest/unbound-method': 'error',
        },
      }],
  ),
  // https://typescript-eslint.io/rules/
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': true,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],
    // Extensions
    'no-useless-constructor': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],

    // Formatting
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
  },
}
