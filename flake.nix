{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs =
    { self
    , nixpkgs
    , devenv
    , systems
    , ...
    } @ inputs:
    let
      forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      packages = forEachSystem (system: {
        devenv-up = self.devShells.${system}.default.config.procfileScript;
      });

      devShells =
        forEachSystem
          (system:
            let
              pkgs = nixpkgs.legacyPackages.${system};
            in
            {
              default = devenv.lib.mkShell {
                inherit inputs pkgs;
                modules = [
                  {
                    packages = with pkgs; [
                      git
                      nodePackages.prettier
                      nodePackages.typescript-language-server
                      nodePackages."@astrojs/language-server"
                    ];

                    languages.typescript.enable = true;
                    languages.javascript = {
                      enable = true;
                      bun.enable = true;
                    };

                    pre-commit.hooks = {
                      # eslint.enable = true;
                      prettier.enable = true;
                      # editorconfig-checker.enable = true;
                    };
                  }
                ];
              };
            });
    };
}
