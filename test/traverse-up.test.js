import { describe, test, expect } from 'bun:test';
import path from 'path';

import traverseUp from '../utils/traverse-up.js';

import getPlatform from '../utils/get-platform.js';

describe('traverse-up', () => {
  test('should generate paths upwards', () => {
    const start = path.resolve('/', 'a', 'b', 'c');
    const res = traverseUp(['f'], start);
    const root = getPlatform() === 'win32' ? 'C:\\f' : 'f';
    expect(res[0]).toBe(path.join(start, 'f'));
    expect(res[res.length - 1]).toBe(path.join(root));
  });
});
