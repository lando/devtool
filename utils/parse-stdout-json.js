import { execSync } from 'child_process';

/**
 * Execute a shell command and parse its JSON output.
 *
 * @param {string} cmd - The command to run.
 * @param {object} [options] - Any execSync options (cwd, env, etc).
 * @returns {any} - The parsed JSON result.
 */
export default function parseStdOut(cmd, options = {}) {
  const stdout = execSync(cmd, {
    maxBuffer: 10 * 1024 * 1024, // 10 MB
    encoding: 'utf-8',
    ...options,
  });
  return JSON.parse(stdout);
}
