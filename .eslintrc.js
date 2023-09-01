module.exports = {
  extends: [
    '@jdion',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
    },
  },
}
