import { describe, test, expect } from 'bun:test';
import getProcess from '../utils/get-process.js';

describe('get-process', () => {
  test('should detect node process', () => {
    expect(getProcess()).toBe('node');
  });
});
