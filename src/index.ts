import { resolve } from 'path';
import { ConfigAPI } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import { importDeclaration, stringLiteral } from '@babel/types';
import transformImport from './lib/transform-import';
import withExtension from './lib/with-extension';

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

  if (opts && opts.ignore && !Array.isArray(opts.ignore)) {
    console.error(`Expected type string[] for "ignore", got ${typeof opts.ignore}`);
  }

  // Options
  const dir = (opts && opts.dir) || 'web_modules';
  const addJS = (opts && !!opts.addJS) || true;
  const ignore = (opts && opts.ignore) || [];

  return {
    visitor: {
      ImportDeclaration(path: ImportPath, state: ImportState) {
        let moduleName = path.node.source.value;

        // Ignore if in ignore array
        if (ignore.includes(moduleName)) {
          return;
        }

        let token = moduleName;

        // If adding extension
        if (addJS) {
          token = withExtension(token);
        }

        // If import is absolute
        if (token[0] !== '.') {
          const { filename, cwd } = state.file.opts;
          token = transformImport({
            filename,
            moduleName: token,
            webModulesDir: resolve(cwd, dir),
          });
        }

        path.replaceWith(importDeclaration(path.node.specifiers, stringLiteral(token)));
      },
    },
    post() {},
  };
});
