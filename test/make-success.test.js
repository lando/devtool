import { describe, test, expect } from 'bun:test';
import makeSuccess from '../utils/make-success.js';

describe('make-success', () => {
  test('should create success object', () => {
    const res = makeSuccess({ all: 'a', args: [], command: 'cmd', stdout: 'o', stderr: 'e' });
    expect(res.exitCode).toBe(0);
    expect(res.command).toBe('cmd');
    expect(res.stdout).toBe('o');
  });
});
