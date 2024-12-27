# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any unneeded installation or build dependencies are removed,
   and that the `pnpm build` command is run before committing your changes.
   This will ensure that the `dist` directory is up to date and that the tests pass.
   If you have made changes to the documentation, please also run `pnpm build:docs` before committing your changes.
   This will ensure that the documentation is up to date and that the documentation server can be started.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any example files and the README.md to the new version that this
   Pull Request would represent.
   The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of one other developer, or if you
   do not have permission to do that, you may request someone to merge it for you.

## Code of Conduct

The code of conduct is described in [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## License

This project is licensed under the GPLv3 — see the [LICENSE.md](LICENSE) file for details.

## Commitizen

This project uses [Commitizen](http://commitizen.github.io/cz-cli/) to ensure a consistent commit message format.
Please use `git cz` instead of `git commit` to commit your changes.

## Linting / Formatting

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to ensure a consistent code style.
Please run `pnpm lint` and `pnpm format` before committing your changes.
Our CI pipeline will fail if the code does not pass the linting, and we will not accept PRs that do not pass the linting.
