import { describe, test, expect } from 'bun:test';
import getSize from '../utils/get-size.js';

describe('get-size', () => {
  test('should measure arrays', () => {
    expect(getSize([1,2,3])).toBe(3);
  });
  test('should measure objects', () => {
    expect(getSize({a:1,b:2})).toBe(2);
  });
  test('should return length for strings', () => {
    expect(getSize('abc')).toBe(3);
  });
});
