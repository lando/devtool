import { describe, test, expect } from 'bun:test';
import normalize from '../utils/normalize-id2key.js';

describe('normalize-id2key', () => {
  test('should join array id with delimiter', () => {
    expect(normalize(['a', 'b'], '/')).toBe('a/b');
  });
  test('should return string as is', () => {
    expect(normalize('x')).toBe('x');
  });
});
