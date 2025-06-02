import { describe, test, expect } from 'bun:test';
import isWSLInteropt from '../utils/is-wsl-interopt.js';

describe('is-wsl-interopt', () => {
  test('should return false in this environment', () => {
    expect(isWSLInteropt()).toBe(false);
  });
});
