import getEnvironment from './get-environment.js';
import getPlatform from './get-platform.js';

const env = getEnvironment();

/**
 * Determine the runtime context of the current process.
 *
 * @returns {string} One of `remote`, `server`, `ci`, or `local`.
 */
export default function getContext() {
  // running on a remote development option
  if (env.GITPOD_WORKSPACE_ID || env.CODESPACES) return 'remote';
  // running on a remote linux server
  if (getPlatform() === 'linux' && (env.SSH_CLIENT || env.SSH_TTY) && !env.DISPLAY) return 'server';
  // running in a CI environment
  if (env.CI) return 'ci';
  // running locally
  return 'local';
}
