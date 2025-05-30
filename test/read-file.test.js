import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import read from '../utils/read-file.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'read-'));
const file = path.join(dir, 'data.json');
fs.writeFileSync(file, '{"a":1}');

describe('read-file', () => {
  test('should read json file', () => {
    expect(read(file)).toEqual({ a: 1 });
  });
});
