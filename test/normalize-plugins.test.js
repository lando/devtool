import { describe, test, expect } from 'bun:test';
import normalize from '../utils/normalize-plugins.js';

describe('normalize-plugins', () => {
  test('should index array by name', () => {
    const plugins = [{ name: 'a' }, { name: 'b' }];
    expect(normalize(plugins)).toEqual({ a: { name: 'a' }, b: { name: 'b' } });
  });
});
