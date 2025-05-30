import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import load from '../utils/module-loader.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mod-'));
const file = path.join(dir, 'm.js');
fs.writeFileSync(file, 'export default function(){ return 42; }');

describe('module-loader', () => {
  test('should load module and return value', async () => {
    const { module } = await load(file);
    expect(module()).toBe(42);
  });
});
