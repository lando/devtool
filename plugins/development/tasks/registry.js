export default (cli) => ({
  command: 'registry',
  describe: 'displays the registry for this context',
  run: async (options, { ctx }) => {
    cli.log(ctx.getRegistry());
  },
});
