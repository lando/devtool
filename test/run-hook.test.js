import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import runHook from '../utils/run-hook.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hook-'));
const file = path.join(dir, 'hook.js');
fs.writeFileSync(file, 'export default async () => { return 5; }');

const hooks = { test: [file] };

describe('run-hook', () => {
  test('should run hook modules', async () => {
    const res = await runHook('test', {}, hooks);
    expect(res.successes.length).toBe(1);
  });
});
