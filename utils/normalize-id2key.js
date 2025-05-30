/*
 * Takes an object or array of plugins and standarizes them for strcuture and content
 */
export default function normalizeId2Key(id, delimiter = '.') {
  // if array then join and return
  if (Array.isArray(id)) return id.join(delimiter);
  // otherwise just return
  return id;
}
