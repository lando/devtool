import { describe, test, expect } from 'bun:test';
import encodeKeys from '../utils/encode-keys.js';

describe('encode-keys', () => {
  test('should convert object keys to kebab-case', () => {
    const input = { fooBar: 1, nested: { barBaz: 2 } };
    const result = encodeKeys(input);
    expect(result).toEqual({ 'foo-bar': 1, 'nested': { 'bar-baz': 2 } });
  });

  test('should return non objects unchanged', () => {
    expect(encodeKeys(5)).toBe(5);
  });
});
