import type { Compiler, compilation } from 'webpack';

export default class GitignoreBuildWebpackPlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler: Compiler): void {
    const isProductionLikeMode = compiler.options.mode === 'production' || !compiler.options.mode;

    if (!isProductionLikeMode) return;

    compiler.hooks.emit.tapAsync(
      'GitignoreBuildWebpackPlugin',
      (webpackCompilation: compilation.Compilation, callback: () => void) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,no-param-reassign
        webpackCompilation.assets['.gitignore'] = {
          source() {
            return '*';
          },
          size() {
            return 1;
          },
        };

        callback();
      },
    );
  }
}
