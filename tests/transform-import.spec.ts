import transformImport, { forwardSlash } from '../src/lib/transform-import';

describe('transformImport method', () => {
  it('works for the same root', () => {
    const params = {
      filename: '/user/test/code/app.js',
      moduleName: 'vue',
      webModulesDir: '/user/test/code/web_modules',
    };
    expect(transformImport(params)).toBe('./web_modules/vue.js');
  });

  it('works for parent roots', () => {
    const params = {
      filename: '/user/test/code/components/button.js',
      moduleName: 'vue',
      webModulesDir: '/user/test/code/web_modules',
    };
    expect(transformImport(params)).toBe('../web_modules/vue.js');
  });
});

describe('forwardSlash', () => {
  it('replaces backslashes with forward slashes', () => {
    expect(forwardSlash('path\\to\\module')).toBe('path/to/module');
  });

  it('ignores forward slashes', () => {
    expect(forwardSlash('path/to/module')).toBe('path/to/module');
  });
});
