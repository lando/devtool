import { describe, test, expect } from 'bun:test';
import merge from '../utils/merge.js';

describe('merge', () => {
  test('should deep merge objects', () => {
    const res = merge({ a: [{ id: 1, val: 'a' }] }, { a: [{ id: 1, val: 'b' }] });
    expect(res.a).toEqual([{ id: 1, val: 'b' }]);
  });
});
