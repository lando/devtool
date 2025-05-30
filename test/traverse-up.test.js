import { describe, test, expect } from 'bun:test';
import path from 'path';
import traverseUp from '../utils/traverse-up.js';

describe('traverse-up', () => {
  test('should generate paths upwards', () => {
    const start = path.join('a','b','c');
    const res = traverseUp(['f'], start);
    expect(res[0]).toBe(path.join(start, 'f'));
    expect(res[res.length-1]).toBe(path.join('f'));
  });
});
