// decode.test.js
import { describe, test, expect } from 'bun:test';
import decode from '../utils/decode.js';

describe('decode()', () => {
  test('should return null when passed null', () => {
    expect(decode(null)).toBeNull();
  });

  test('should return undefined when passed undefined', () => {
    expect(decode(undefined)).toBeUndefined();
  });

  test('should leave a simple string untouched', () => {
    expect(decode('simple')).toBe('simple');
  });

  test('should camel-case each segment of a dotted string', () => {
    const input = 'foo-bar.baz_qux';
    expect(decode(input)).toBe('fooBar.bazQux');
  });

  test('should handle an empty string', () => {
    expect(decode('')).toBe('');
  });

  test('should map over an array of strings', () => {
    const input = ['one-two.three_four', 'alpha-beta'];
    expect(decode(input)).toEqual(['oneTwo.threeFour', 'alphaBeta']);
  });

  test('should handle an empty array', () => {
    expect(decode([])).toEqual([]);
  });

  test('should deep-camel-case an object’s keys', () => {
    const input = {
      'first-key': 1,
      'second_key': 2,
    };
    expect(decode(input)).toEqual({
      firstKey: 1,
      secondKey: 2,
    });
  });

  test('should recursively camel-case nested objects', () => {
    const input = {
      'outer-key': {
        'inner-key-one': 10,
        'inner_key_two': 20,
      },
      'another_one': {
        deep_nested: {
          mixed_case: 30,
        },
      },
    };
    expect(decode(input)).toEqual({
      outerKey: {
        innerKeyOne: 10,
        innerKeyTwo: 20,
      },
      anotherOne: {
        deepNested: {
          mixedCase: 30,
        },
      },
    });
  });
});
