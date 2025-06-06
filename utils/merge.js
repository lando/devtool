import isObject from 'lodash-es/isPlainObject.js';
import lomerge from 'lodash-es/merge.js';
import mergeArrays from './merge-arrays.js';

// @TODO: error handling
/**
 * Deep merge objects with special array handling strategies.
 *
 * @param {object} object - Destination object.
 * @param {object|object[]} sources - Sources to merge from.
 * @param {string|string[]} [ams=['merge:id','replace']] - Array merge strategies.
 * @returns {object} The merged object.
 */
export default function merge(object, sources, ams = ['merge:id', 'replace']) {
  // if sources is not an array then make it so
  if (!Array.isArray(sources)) sources = [sources];

  // normalize ams into array
  ams = Array.isArray(ams) ? ams : [ams];
  // then break into the things we need
  const first = ams[0].split(':')[0];
  const by = ams[0].split(':')[1] || 'id';
  const fallback = ams[1] || 'replace';

  // then return the merge
  return lomerge(object, ...sources, (objValue, srcValue) => {
    // if not an arrayjust proceed normally
    if (!Array.isArray(objValue)) return undefined;
    // if first strategy is replace then also proceed normally
    if (first === 'replace') return undefined;
    // if first strategy is merge and some part of objvalue has an object then try to merge with by
    if (first === 'merge') {
      // if mergable object detected in array then proceed
      if (objValue.some((element) => isObject(element))) return mergeArrays(objValue, srcValue, `merge:${by}`);
      // otherwise return the fallback
      return mergeArrays(objValue, srcValue, fallback);
    }
    // if we get here then just pass it through to mergeArrays
    return mergeArrays(objValue, srcValue, first);
  });
}
