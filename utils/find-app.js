import fs from 'node:fs';
import traverseUp from './traverse-up.js';

export default function findApp(files, startFrom) {
  return traverseUp(files, startFrom).find((file) => fs.existsSync(file));
}
