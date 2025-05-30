import { describe, test, expect } from 'bun:test';
import os from 'os';
import getPlatform from '../utils/get-platform.js';

describe('get-platform', () => {
  test('should detect platform', () => {
    let expected = os.platform();
    if (expected === 'linux' && os.release().toLowerCase().includes('microsoft')) expected = 'wsl';
    expect(getPlatform()).toBe(expected);
  });
});
