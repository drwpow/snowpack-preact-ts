import { dirname, relative } from 'path';

interface TransformImportParams {
  filename: string;
  moduleName: string;
  webModulesDir: string;
}

export function forwardSlash(str: string): string {
  return str.replace(/\\/g, '/');
}

function transformImport({ filename, moduleName, webModulesDir }: TransformImportParams): string {
  let newImport = `${relative(dirname(filename), webModulesDir)}/${moduleName}`;
  if (newImport[0] !== '.') {
    newImport = `./${newImport}`;
  }
  return forwardSlash(newImport);
}

export default transformImport;
