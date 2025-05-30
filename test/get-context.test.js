import { describe, test, expect } from 'bun:test';
import getContext from '../utils/get-context.js';

describe('get-context', () => {
  test('should detect local context', () => {
    expect(getContext()).toBe('local');
  });
});
