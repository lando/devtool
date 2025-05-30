import fs from 'node:fs';
import path from 'node:path';

/*
 * Like readdirsync but returns absolute paths and only directories
 *
 * NOTE: we are using something like this mostly just for bootstrapping eg
 * we want it to have minimal deps eg no LODASH or GLOB
 */
export default (dir) =>
  fs
    .readdirSync(dir)
    .map((file) => path.join(dir, file))
    .filter((file) => fs.statSync(file).isDirectory());
