import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdefl', 17);

/*
 * TBD
 */
export default function generateId() {
  return nanoid();
}
