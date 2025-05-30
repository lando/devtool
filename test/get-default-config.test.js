import { describe, test, expect } from 'bun:test';
import getDefaultConfig from '../utils/get-default-config.js';

describe('get-default-config', () => {
  test('should set system id to product', () => {
    const cfg = getDefaultConfig('foo');
    expect(cfg.system.id).toBe('foo');
    expect(cfg.system.product).toBe('foo');
  });
});
