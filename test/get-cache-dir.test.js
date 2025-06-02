import { describe, test, expect } from 'bun:test';
import path from 'path';
import getCacheDir from '../utils/get-cache-dir.js';

describe('get-cache-dir', () => {
  test('should compute cache directory for product', () => {
    if (process.platform === 'darwin') {
      expect(getCacheDir('foo')).toBe(path.join(process.env.HOME, 'Library', 'Caches', 'foo'));
    } else {
      expect(getCacheDir('foo')).toBe(path.join(process.env.XDG_CACHE_HOME || path.join(process.env.HOME, '.cache'), 'foo'));
    }
  });
});
