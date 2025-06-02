import { describe, test, expect } from 'bun:test';
import path from 'path';

import getCacheDir from '../utils/get-cache-dir.js';
import getPlatform from '../utils/get-platform.js';

describe('get-cache-dir', () => {
  test('should compute cache directory for product', () => {
    if (getPlatform() === 'darwin') {
      expect(getCacheDir('foo')).toBe(path.join(process.env.HOME, 'Library', 'Caches', 'foo'));
    } else if (getPlatform() === 'win32') {
      const cacheDir =
        process.env.XDG_CACHE_HOME ??
        process.env.LOCALAPPDATA ??
        process.env.HOME ??
        (process.env.HOMEDRIVE && process.env.HOMEPATH && path.join(process.env.HOMEDRIVE, process.env.HOMEPATH)) ??
        process.env.USERPROFILE;
      expect(getCacheDir('foo')).toBe(path.join(cacheDir, 'foo'));
    } else {
      const cacheDir = process.env.XDG_CACHE_HOME ?? process.env.HOME;
      expect(getCacheDir('foo')).toBe(path.join(cacheDir, 'foo'));
    }
  });
});
