import { resolve } from 'path';
import { ConfigAPI } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import { importDeclaration, stringLiteral } from '@babel/types';
import shouldIgnore from './lib/should-ignore';
import transformImport from './lib/transform-import';

interface ImportPath {
  replaceWith(node: any): void;
  node: {
    specifiers: any;
    source: {
      value: string;
    };
  };
}

interface ImportState {
  file: {
    opts: {
      filename: string;
      cwd: string;
    };
  };
}

export default declare((api: ConfigAPI, opts?: BabelPluginImportPikaWeb.Options) => {
  api.assertVersion(7);

  const dir = (opts && opts.dir) || 'web_modules';

  return {
    visitor: {
      ImportDeclaration(path: ImportPath, state: ImportState) {
        let moduleName = path.node.source.value;

        if (shouldIgnore(moduleName, opts)) {
          return;
        }

        const { filename, cwd } = state.file.opts;

        path.replaceWith(
          importDeclaration(
            path.node.specifiers,
            stringLiteral(
              transformImport({ filename, moduleName, webModulesDir: resolve(cwd, dir) })
            )
          )
        );
      },
    },
    post() {},
  };
});
