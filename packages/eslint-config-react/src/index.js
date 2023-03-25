module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: '18.0',
    },
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/button-has-type': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
  },
}
