import shouldIgnore from '../src/lib/should-ignore';

describe('shouldIgnore', () => {
  it('ignores relative modules', () => {
    expect(shouldIgnore('./components/Button')).toBe(true);
    expect(shouldIgnore('components/Button')).toBe(false);
  });

  it('ignores modules that match ignore array exactly', () => {
    expect(shouldIgnore('components/Button', { ignore: ['components/Button'] })).toBe(true);
    expect(shouldIgnore('components/Button', { ignore: ['components'] })).toBe(false);
  });
});
