import { describe, test, expect } from 'bun:test';
import getObjectSizes from '../utils/get-object-sizes.js';

describe('get-object-sizes', () => {
  test('should compute sizes for object values', () => {
    const obj = { a: { b: [1, 2] }, c: 'test' };
    const sizes = getObjectSizes(obj);
    expect(sizes.a.b).toBe(2);
    expect(sizes.c).toBe(4);
  });
});
