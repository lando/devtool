import { describe, test, expect } from 'bun:test';
import getKeys from '../utils/get-object-keys.js';

describe('get-object-keys', () => {
  test('should list nested keys with dot notation', () => {
    const obj = { a: { b: 1 }, c: [1,2] };
    const keys = getKeys(obj);
    expect(keys.sort()).toEqual(['a.b','c.0','c.1']);
  });
});
