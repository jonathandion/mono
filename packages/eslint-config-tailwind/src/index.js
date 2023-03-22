module.exports = {
  extends: [
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'tailwindcss',
  ],
  rules: {
    'tailwindcss/classnames-order': 'off', // conflicts with prettier-plugin-tailwindcss
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-custom-classname': 'error',
  },
};
