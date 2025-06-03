import { describe, test, expect } from 'bun:test';
import legacyWrapper from '../utils/legacy-logger-wrapper.js';

describe('legacy-logger-wrapper', () => {
  test('should expose log level methods', () => {
    const logger = legacyWrapper(() => () => {});
    for (const m of ['error', 'warn', 'info', 'verbose', 'debug', 'silly']) {
      expect(typeof logger[m]).toBe('function');
    }
  });
});
