import { describe, test, expect } from 'bun:test';
import os from 'os';
import path from 'path';
import getSystemDataDir from '../utils/get-system-data-dir.js';

describe('get-system-data-dir', () => {
  test('should compute path based on platform', () => {
    const platform = os.platform();
    let expected;
    switch (platform === 'linux' && os.release().toLowerCase().includes('microsoft') ? 'wsl' : platform) {
      case 'darwin':
        expected = path.join('/', 'Library', 'Application Support', 'Foo');
        break;
      case 'linux':
      case 'wsl':
        expected = path.join('/', 'srv', 'foo');
        break;
      case 'win32':
        expected = path.join(process.env.PROGRAMDATA || process.env.ProgramData, 'Foo');
        break;
    }
    expect(getSystemDataDir('foo')).toBe(expected);
  });
});
