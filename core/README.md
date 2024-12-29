[![Run tests](https://github.com/FilipTLW/garuda-ng/actions/workflows/ci.yml/badge.svg)](https://github.com/FilipTLW/garuda-ng/actions/workflows/ci.yml)
[![Release management](https://github.com/FilipTLW/garuda-ng/actions/workflows/cd.yml/badge.svg)](https://github.com/FilipTLW/garuda-ng/actions/workflows/cd.yml)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/FilipTLW/garuda-ng/main)
![GitHub Tag](https://img.shields.io/github/v/tag/FilipTLW/garuda-ng)
![GitHub License](https://img.shields.io/github/license/FilipTLW/garuda-ng)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# GarudaNG

This is the component library for the website-based projects of Garuda Linux.

## Introduction

GarudaNG is a set of components to use in any kind of Angular project. It is built on [PrimeNG](https://primeng.org/).

## Documentation

The latest tagged version of the documentation can be found [here](https://garuda-ng.pages.dev/),
for the latest changes instead have a look at the [development version](https://dev.garuda-ng.pages.dev).

## Usage

The library can be installed using your favourite node package manager.

```shell
# pnpm
pnpm add @garudalinux/core

# yarn
yarn add @garudalinux/core

# npm
npm install @garudalinux/core
```

## Changelog

Learn about the latest improvements by [reading the changelog](https://github.com/FilipTLW/garuda-ng/blob/main/CHANGELOG.md).

## Development

### Getting started

To get started with development, clone the repository and install the dependencies.
This repository includes a Nix flakes configuration, so you can use Nix to get started like this:

```shell
nix develop
```

This sets up all pre-commit hooks and installs the dependencies as well.
If you don't have Nix available, you can also just use `pnpm`:

```shell
pnpm install
```

### Building the library

To build all the projects, run the following command:

```shell
pnpm build
```

### Running the documentation server

To run the documentation server, use the following command:

```shell
pnpm "serve docs"
```

### Running the tests

To run the tests, use the following command:

```shell
pnpm test
```

## Contributing

If you want to contribute to the project, please read the [contributing guidelines](https://github.com/FilipTLW/garuda-ng/blob/main/CONTRIBUTING.md).

\
**Like the library? Give us a star ⭐!**
