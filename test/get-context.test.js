// get-context.test.js
import { afterEach, describe, expect, mock, test } from 'bun:test';

import getContext from '../utils/get-context.js';

// https://github.com/oven-sh/bun/issues/7823
import getEnvironment from '../utils/get-environment.js?GET_FRESH';
import getPlatform from '../utils/get-platform.js?GET_FRESH';

describe('get-context', () => {
  afterEach(() => {
    mock.module('../utils/get-environment.js', () => ({ default: getEnvironment }));
    mock.module('../utils/get-platform.js', () => ({ default: getPlatform }));
  });

  test('should return "remote" when GITPOD_WORKSPACE_ID is set', async () => {
    mock.module('../utils/get-environment.js', () => ({
      default: () => ({ GITPOD_WORKSPACE_ID: 'workspace-123' }),
    }));

    expect(getContext()).toBe('remote');
  });

  test('should return "remote" when CODESPACES is set', async () => {
    mock.module('../utils/get-environment.js', () => ({
      default: () => ({ CODESPACES: '1' }),
    }));

    expect(getContext()).toBe('remote');
  });

  test('should return "server" when on linux with SSH_* and no DISPLAY or CI', async () => {
    mock.module('../utils/get-environment.js', () => ({
      default: () => ({ SSH_CLIENT: 'riker-theta-epsilon' }),
    }));
    mock.module('../utils/get-platform.js', () => ({
      default: () => 'linux',
    }));

    expect(getContext()).toBe('server');
  });

  test('should return "ci" when CI is set', async () => {
    mock.module('../utils/get-environment.js', () => ({
      default: () => ({ CI: 'yes' }),
    }));

    expect(getContext()).toBe('ci');
  });

  test('should return "local" when no relevant env vars are set', async () => {
    mock.module('../utils/get-environment.js', () => ({
      default: () => ({}),
    }));

    expect(getContext()).toBe('local');
  });
});
