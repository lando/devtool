import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import write from '../utils/write-file.js';
import read from '../utils/read-file.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'write-'));
const file = path.join(dir, 'out.json');

describe('write-file', () => {
  test('should write json file', () => {
    write(file, { a: 1 });
    expect(read(file)).toEqual({ a: 1 });
  });
});
