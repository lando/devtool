import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import normalizeManifestPaths from '../utils/normalize-manifest-paths.js';

const base = fs.mkdtempSync(path.join(os.tmpdir(), 'manifest-'));
const data = { hooks: { start: './hook.js' } };
const result = normalizeManifestPaths(data, base);

describe('normalize-manifest-paths', () => {
  test('should resolve relative paths', () => {
    expect(result.hooks.start).toBe(path.join(base, 'hook.js'));
  });
});
