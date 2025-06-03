import { describe, test, expect } from 'bun:test';
import StandardError from '../utils/standard-error.js';

describe('standard-error', () => {
  test('should extend Error', () => {
    const err = new StandardError('oops');
    expect(err).toBeInstanceOf(Error);
  });
});
