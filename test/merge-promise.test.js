import { describe, test, expect } from 'bun:test';
import mergePromise from '../utils/merge-promise.js';

describe('merge-promise', () => {
  test('should add promise methods to object', async () => {
    const obj = {};
    mergePromise(obj, Promise.resolve('ok'));
    const val = await obj.then((v)=>v);
    expect(val).toBe('ok');
  });
});
