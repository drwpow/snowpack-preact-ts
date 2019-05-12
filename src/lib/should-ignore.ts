function shouldIgnore(token: string, opts?: BabelPluginImportPikaWeb.Options): boolean {
  if (token[0] === '.') {
    return true;
  }

  if (opts && Array.isArray(opts.ignore)) {
    if (opts.ignore.includes(token)) {
      return true;
    }
  }

  return false;
}

export default shouldIgnore;
