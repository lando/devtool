// Modules
import _ from 'lodash-es';

export default (cli, lando) => {
  return {
    command: 'list',
    describe: 'Lists all running lando apps and containers',
    level: 'engine',
    // options: _.merge({}, cli.formatOptions(), {
    //   all: {
    //     describe: 'Show all containers, even those not running',
    //     alias: ['a'],
    //     boolean: true,
    //   },
    //   app: {
    //     describe: 'Show containers for only a particular app',
    //     string: true,
    //   },
    // }),
    run: (options) => {
      // List all the apps
      return (
        lando.engine
          .list(options)
          // Map each app to a summary and print results
          .then((containers) =>
            console.log(
              cli.formatData(
                _(containers)
                  .map((container) => _.omit(container, ['lando', 'id', 'instance']))
                  .value(),
                options,
              ),
            ),
          )
      );
    },
  };
};
