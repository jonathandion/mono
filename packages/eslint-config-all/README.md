# @jdion/eslint-config

[![npm](https://img.shields.io/npm/v/@jdion/eslint-config?color=238636&label=)](https://npmjs.com/package/@jdion/eslint-config)

- Lint and format code (No Prettier)
- Designed to work with TypeScript, React
- Supports lint for json, yaml, markdown files

## Install

```bash
pnpm add -D eslint @jdion/eslint-config
```

## Usage

Create a ESLint configuration file `.eslintrc` with:

```json
{
  "extends": "@jdion"
}
```

### Add lint scripts

In your `package.json` add the following scripts:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Jonathan Dion](https://github.com/jonathandion)
