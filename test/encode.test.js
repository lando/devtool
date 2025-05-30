import { describe, test, expect } from 'bun:test';
import encode from '../utils/encode.js';

describe('encode', () => {
  test('should kebab-case dotted strings', () => {
    expect(encode('fooBar.bazQux')).toBe('foo-bar.baz-qux');
  });

  test('should map arrays of strings', () => {
    const input = ['alphaBeta', 'gammaDelta'];
    expect(encode(input)).toEqual(['alpha-beta', 'gamma-delta']);
  });
});
