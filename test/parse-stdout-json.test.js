import { describe, test, expect } from 'bun:test';
import parseStdOut from '../utils/parse-stdout-json.js';

describe('parse-stdout-json', () => {
  test('should run command and parse json output', () => {
    const res = parseStdOut('echo "{"a":1}"');
    expect(res).toEqual({ a: 1 });
  });
});
