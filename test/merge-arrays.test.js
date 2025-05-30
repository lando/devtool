import { describe, test, expect } from 'bun:test';
import mergeArrays from '../utils/merge-arrays.js';

describe('merge-arrays', () => {
  test('should merge arrays of objects by id', () => {
    const a = [{id:1,val:'a'}];
    const b = [{id:1,val:'b'}];
    const res = mergeArrays(a,b,'merge:id');
    expect(res).toEqual([{id:1,val:'b'}]);
  });

  test('should concatenate arrays', () => {
    expect(mergeArrays([1],[2],'concat')).toEqual([1,2]);
  });
});
