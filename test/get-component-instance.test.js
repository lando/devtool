import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import getComponentInstance from '../utils/get-component-instance.js';
import Config from '../lib/config.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'comp-'));
const compFile = path.join(dir, 'component-2.test.js');
fs.writeFileSync(compFile, `export default class Test {\n  constructor(arg){ this.arg = arg; }\n  async init(){ this.inited = true; }\n}`);

const registry = new Config({ id: 'reg', data: { test: compFile } });

describe('get-component-instance', () => {
  test('should instantiate and init component', async () => {
    const inst = await getComponentInstance('test', 'foo', { registry });
    expect(inst.arg).toBe('foo');
    expect(inst.inited).toBe(true);
  });
});
