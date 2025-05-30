import { describe, test, expect } from 'bun:test';
import generateId from '../utils/generate-id.js';

describe('generate-id', () => {
  test('should generate a 17 character id', () => {
    const id = generateId();
    expect(id).toHaveLength(17);
  });
});
