import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import getComponent from '../utils/get-component.js';
import Config from '../lib/config.js';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gcomp-'));
const compFile = path.join(dir, 'comp.js');
fs.writeFileSync(compFile, `export default class Test {}`);

const registry = new Config({ id: 'reg', data: { test: compFile } });

describe('get-component', () => {
  test('should load class from registry', () => {
    const Cls = getComponent('test', registry);
    expect(typeof Cls).toBe('function');
  });
});
