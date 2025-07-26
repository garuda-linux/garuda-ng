{
  description = "Garuda-ng ❄️";

  inputs = {
    devshell = {
      url = "github:numtide/devshell";
      flake = false;
    };
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    pre-commit-hooks = {
      url = "github:cachix/pre-commit-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = {
    flake-parts,
    nixpkgs,
    pre-commit-hooks,
    self,
    ...
  } @ inp: let
    inputs = inp;
    perSystem = {
      pkgs,
      system,
      ...
    }: {
      apps.default = self.outputs.devShells.${system}.default.flakeApp;
      checks.pre-commit-check = pre-commit-hooks.lib.${system}.run {
        hooks = {
          actionlint.enable = true;
          alejandra-quiet = {
            description = "Run Alejandra in quiet mode";
            enable = true;
            entry = ''
              ${pkgs.alejandra}/bin/alejandra --quiet
            '';
            files = "\\.nix$";
            name = "alejandra";
          };
          commitizen.enable = true;
          # Eslint pulls ~1GB of nix derivations, let's reuse node_modules instead
          eslint = {
            description = "Run eslint";
            enable = true;
            entry = ''
              ${pkgs.pnpm}/bin/pnpm run lint
            '';
            name = "eslint";
            pass_filenames = false;
          };
          flake-checker.enable = true;
          hadolint.enable = true;
          prettier.enable = true;
          shellcheck.enable = true;
          shfmt.enable = true;
          yamllint.enable = true;
        };
        src = ./.;
      };

      # Handy devshell for working with this flake
      devShells = let
        # Import the devshell module as module rather than a flake input
        makeDevshell = import "${inp.devshell}/modules" pkgs;
        mkShell = config:
          (makeDevshell {
            configuration = {
              inherit config;
              imports = [];
            };
          })
          .shell;
      in rec {
        default = garuda-ng;
        garuda-ng = mkShell {
          commands = [
            {package = "jq";}
            {package = "pre-commit";}
            {
              category = "garuda-ng";
              command = ''
                VERSION=$(git-cliff --bumped-version)
                git tag "$VERSION" -m "$VERSION"
                cat <<< $(JQ_VERSION=$VERSION jq '.version=env.JQ_VERSION' ./core/package.json) > ./core/package.json
              '';
              help = "Bump the version of the project dynamically and create a new tag";
              name = "release";
            }
            {
              category = "garuda-ng";
              command = "pre-commit run --all-files";
              help = "Lint and format all files of the project";
              name = "lint";
            }
            {
              category = "garuda-ng";
              command = "cz";
              help = "Commit using commitizen";
              name = "commit";
            }
            {
              category = "garuda-ng";
              command = "nx run docs:serve";
              help = "Start the development server for the documentation";
              name = "serve-docs";
            }
            {
              category = "garuda-ng";
              command = "nx run-many --target=build --all";
              help = "Build all the projects";
              name = "build";
            }
          ];
          devshell = {
            name = "garuda-ng";
            startup.preCommitHooks.text = ''
              ${self.checks.${system}.pre-commit-check.shellHook}

              if [ ! -d node_modules ]; then
                ${pkgs.pnpm}/bin/pnpm install
              else
                outcome=$(${pkgs.pnpm}/bin/pnpm install)
                if  [[ !  "$outcome" =~ "Lockfile is up to date" ]]; then
                  echo "Dependencies have been updated"
                fi
              fi
            '';
          };
          env = [
            {
              name = "NIX_PATH";
              value = "${nixpkgs}";
            }
          ];
        };
      };

      # By default, alejandra is WAY to verbose
      formatter = pkgs.writeShellScriptBin "alejandra" ''
        exec ${pkgs.alejandra}/bin/alejandra --quiet "$@"
      '';
    };
  in
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.pre-commit-hooks.flakeModule
      ];
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin"];
      inherit perSystem;
    };
}
