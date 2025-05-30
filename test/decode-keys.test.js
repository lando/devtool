import { describe, test, expect } from 'bun:test';
import decodeKeys from '../utils/decode-keys.js';

describe('decode-keys', () => {
  test('should camelCase object keys deeply', () => {
    const input = { 'foo-bar': 1, nested: { 'bar-baz': 2 } };
    const result = decodeKeys(input);
    expect(result).toEqual({ fooBar: 1, nested: { barBaz: 2 } });
  });

  test('should return non objects unchanged', () => {
    expect(decodeKeys('string')).toBe('string');
  });
});
