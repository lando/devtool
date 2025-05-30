import { describe, test, expect } from 'bun:test';
import parsePkg from '../utils/parse-package-name.js';

describe('parse-package-name', () => {
  test('should parse scoped package', () => {
    const res = parsePkg('@scope/pkg');
    expect(res.name).toBe('@scope/pkg');
    expect(res.package).toBe('pkg');
  });
});
