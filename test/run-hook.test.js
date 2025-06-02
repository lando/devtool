import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import runHook from '../utils/run-hook.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hook-'));
const esmHookFile = path.join(dir, 'hook-esm.test.mjs');
fs.writeFileSync(esmHookFile, 'export default async () => { return 5; }');

const cjsHookFile = path.join(dir, 'hook-cjs.test.js');
fs.writeFileSync(cjsHookFile, 'module.exports = () => { return 6; }');

const hooks = { test: [cjsHookFile, esmHookFile] };

describe('run-hook', () => {
  test('should run cjs hooks', async () => {
    const res = await runHook('test', {}, hooks);
    expect(res.successes.length).toBe(2);
    expect(res.successes[0].result).toBe(6);
  });

  test('should run esm hooks', async () => {
    const res = await runHook('test', {}, hooks);
    expect(res.successes[1].result).toBe(5);
  });
});
