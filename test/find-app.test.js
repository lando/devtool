import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import findApp from '../utils/find-app.js';

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'findapp-'));
const sub = path.join(tmp, 'sub');
fs.mkdirSync(sub);
const target = path.join(tmp, 'myfile');
fs.writeFileSync(target, 'data');

describe('find-app', () => {
  test('should find file upwards from starting directory', () => {
    const result = findApp(['myfile'], sub);
    expect(result).toBe(target);
  });

  test('should return undefined when not found', () => {
    expect(findApp(['nofile'], sub)).toBeUndefined();
  });
});
