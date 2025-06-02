import { describe, test, expect } from 'bun:test';

import getEnvironment from '../utils/get-environment.js';

describe('get-environment', () => {
  test('should return process.env', () => {
    expect(getEnvironment()).toBe(process.env);
  });
});
