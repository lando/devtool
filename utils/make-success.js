/*
 * Attempts to produce a standardized error object
 */
export default function makeSuccess({ all, args, command, stdout, stderr }) {
  return {
    command,
    args,
    exitCode: 0,
    stdout,
    stderr,
    all,
  };
}
