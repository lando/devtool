import { describe, test, expect } from 'bun:test';
import fs from 'fs';
import path from 'path';
import os from 'os';
import getCommitHash from '../utils/get-commit-hash.js';

const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'gitrepo-'));
const gitDir = path.join(repo, '.git');
fs.mkdirSync(path.join(gitDir, 'refs', 'heads'), { recursive: true });
const commit = '1234567890abcdef1234567890abcdef12345678';
fs.writeFileSync(path.join(gitDir, 'HEAD'), 'ref: refs/heads/main');
fs.writeFileSync(path.join(gitDir, 'refs', 'heads', 'main'), `${commit}\n`);

describe('get-commit-hash', () => {
  test('should read commit hash from repo', () => {
    expect(getCommitHash(repo)).toBe(commit);
  });

  test('should return short hash when short option set', () => {
    expect(getCommitHash(repo, { short: true })).toBe(commit.slice(0, 7));
  });

  test('should return false when ref file missing', () => {
    expect(getCommitHash(path.join(repo, 'missing'))).toBe(false);
  });
});
