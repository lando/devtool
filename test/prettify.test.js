import { describe, test, expect } from 'bun:test';
import prettify from '../utils/prettify.js';

describe('prettify', () => {
  test('should join string arrays', () => {
    expect(prettify(['a', 'b'])).toBe('a, b');
  });
  test('should format array of objects', () => {
    const res = prettify([{ a: 1 }, { b: 2 }]);
    expect(res).toContain('a: 1');
    expect(res).toContain('b: 2');
  });
});
