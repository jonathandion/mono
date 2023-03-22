# Web Configs

![build status](https://img.shields.io/github/actions/workflow/status/jonathandion/web-configs/release.yml?color=238636&label=build)

This repository contains common configurations for building web apps.

## Configs

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own README and documentation describing usage.

| Config | Version | Description
|-|-|-|
| [eslint-config-all](/packages/eslint-config-all/README.md) | [![npm](https://img.shields.io/npm/v/@jdion/eslint-config?color=238636&label=)](https://npmjs.com/package/@jdion/eslint-config) | Lint config for TypeScript, React, Tailwind CSS projects

## FAQ

> Why not using Prettier?

I prefer to use ESLint for formatting my code as it provides more fine-grained customization options. In addition to linting, ESLint can also be used to format code according to your preferences. Personally, I don't find the `printWidth` feature in Prettier to be particularly useful for my projects, so I choose to stick with ESLint.

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Jonathan Dion](https://github.com/jonathandion)
