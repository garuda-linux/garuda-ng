[![Run tests](https://github.com/FilipTLW/garuda-ng/actions/workflows/ci.yml/badge.svg)](https://github.com/FilipTLW/garuda-ng/actions/workflows/ci.yml)
[![Release management](https://github.com/FilipTLW/garuda-ng/actions/workflows/cd.yml/badge.svg)](https://github.com/FilipTLW/garuda-ng/actions/workflows/cd.yml)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/FilipTLW/garuda-ng/main)
![GitHub Tag](https://img.shields.io/github/v/tag/FilipTLW/garuda-ng)
![GitHub License](https://img.shields.io/github/license/FilipTLW/garuda-ng)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# GarudaNG

This is the component library for the website-based projects of Garuda Linux.

## Introduction

GarudaNG is a set of components to use in any kind of Angular project. It is built on [Optimus UI](https://www.optimusthemes.com/).

## Documentation

The latest tagged version of the documentation can be found [here](https://garuda-ng.pages.dev/),
for the latest changes instead have a look at the [development version](https://dev.garuda-ng.pages.dev).

## Modules

The library is organised into self-contained modules. Each one is published as its own secondary entry point
(`@garudalinux/core/<module>`), so an app only ships the modules it imports and can lazy load heavy ones such as
`charts` or `log-viewer` (for example behind a lazy route or `@defer`). The package root re-exports everything for
backwards compatibility, but importing from the entry points is preferred.

| Module                                                                                                 | Contents                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `card`                                                                                                 | `garuda-card` product showcase card with its directives                                                                                                                                  |
| `charts`                                                                                               | `GarudaChart` component, Catppuccin chart theme helpers, `garudaLineChartOptions()`, crosshair / external-tooltip / gradient-fill plugins, `groupOverTimeChart()`                        |
| `document-section`                                                                                     | `garuda-document-section` anchored sections for long documents                                                                                                                           |
| `formatting`                                                                                           | `garudaBytes`, `garudaCpuTime`, `garudaDuration`, `garudaLocaleDate`, `garudaRelativeTime`, `garudaStripPrefix` pipes and the `formatBytes` / `formatDuration` / `formatCpuTime` helpers |
| `loading`                                                                                              | `LoadingService` and the `loadingInterceptor` HTTP interceptor                                                                                                                           |
| `not-found`                                                                                            | `garuda-not-found` 404 page                                                                                                                                                              |
| `shell`                                                                                                | `garuda-shell` application shell                                                                                                                                                         |
| `table-pagination`                                                                                     | `createLazyTablePagination()` state helper for lazy PrimeNG tables                                                                                                                       |
| `title`                                                                                                | `garuda-title` page heading block                                                                                                                                                        |
| `utils`                                                                                                | `backendErrorMessage()`                                                                                                                                                                  |
| `message-toast`, `news`, `footer`, `search`, `jokes`, `config`, `models`, `services`, `feature-detail` | existing components and services                                                                                                                                                         |

`GarudaChart` downloads chart.js on its first render, and `garuda-log-viewer` fetches the xterm WebGL renderer on
demand, so those dependencies stay out of the bundle until they are actually needed.

The `@garudalinux/themes` package ships the PrimeNG presets (Catppuccin, Dr460nized, ...), each in its own entry
point (e.g. `@garudalinux/themes/catppuccin/aura`) plus lazy loaders in `garudaThemes` for runtime switching, and the
`styles/glass-surfaces.css` stylesheet for the shared translucent surface treatment of `p-card`, `p-panel`, `p-tabs`,
`p-datatable` and `.garuda-surface` elements. See the [documentation](https://garuda-ng.pages.dev/) for details.

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

```ts
import { provideGarudaNG } from '@garudalinux/core/config';
import { CatppuccinAura } from '@garudalinux/themes/catppuccin/aura';
```

Requires Node.js 24 or newer and pnpm 12 or newer for development.

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
