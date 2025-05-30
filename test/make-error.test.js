import { describe, test, expect } from 'bun:test';
import makeError from '../utils/make-error.js';

describe('make-error', () => {
  test('should create Error with properties', () => {
    const err = makeError({ stdout: 'out', stderr: 'err', command: 'cmd', args: [] });
    expect(err).toBeInstanceOf(Error);
    expect(err.stdout).toBe('out');
    expect(err.stderr).toBe('err');
    expect(err.command).toBe('cmd');
  });
});
