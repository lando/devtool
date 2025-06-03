import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import findPlugins from '../utils/find-plugins.js';

const base = fs.mkdtempSync(path.join(os.tmpdir(), 'plugins-'));
const pluginDir = path.join(base, 'p1');
fs.mkdirSync(pluginDir);
fs.writeFileSync(path.join(pluginDir, 'plugin.js'), '');

const deepDir = path.join(base, 'deep', 'p2');
fs.mkdirSync(path.join(base, 'deep'), { recursive: true });
fs.mkdirSync(deepDir);
fs.writeFileSync(path.join(deepDir, 'plugin.yaml'), '');

describe('find-plugins', () => {
  test('should discover plugin directories', () => {
    const result = findPlugins(base, 2);
    expect(result.sort()).toEqual([pluginDir, deepDir].sort());
  });

  test('should return empty array when dir missing', () => {
    expect(findPlugins(path.join(base, 'missing'))).toEqual([]);
  });
});
