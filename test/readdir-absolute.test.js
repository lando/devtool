import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import readdirAbs from '../utils/readdir-absolute.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dirs-'));
const sub = path.join(dir, 'sub');
fs.mkdirSync(sub);
fs.writeFileSync(path.join(dir, 'file.txt'), '');

const result = readdirAbs(dir);

describe('readdir-absolute', () => {
  test('should list subdirectories only', () => {
    expect(result).toEqual([sub]);
  });
});
