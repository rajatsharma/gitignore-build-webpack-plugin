import type { Compiler } from 'webpack';
import fs from 'fs';
import path from 'path';

export default class GitignoreBuildWebpackPlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler: Compiler): void {
    const isProductionLikeMode = compiler.options.mode === 'production' || !compiler.options.mode;

    if (!isProductionLikeMode) return;

    compiler.hooks.emit.tapAsync(
      'GitignoreBuildWebpackPlugin',
      (_, callback: () => void) => {
        if (!compiler.options.output?.path) {
          callback();
          return;
        }

        fs.writeFile(path.resolve(compiler.options.output?.path, '.gitignore'), '*', 'utf8', (err) => {
          if (err) console.log(err);
          callback();
        });
      },
    );
  }
}
