import createDebug from '../lib/debug.js';
import getComponent from './get-component.js';

import Config from '../lib/config.js';

/*
 * TBD
 */
export default async function getComponentInstance(
  component,
  constructor,
  {
    aliases = {},
    cache = true,
    debug = createDebug('@lando/core:get-component-instance'),
    config = {},
    defaults = {},
    init = true,
    registry = new Config({ id: 'component-registry' }), // eslint-disable-line new-cap
  } = {},
) {
  // get class component and instantiate
  const Component = getComponent(component, registry, { aliases, cache, config, debug });

  // get an instance
  const instance = Array.isArray(constructor) ? new Component(...constructor) : new Component(constructor);

  // and run its init func if applicable
  if (instance.init && typeof instance.init === 'function' && init) {
    await instance.init(constructor, { config, registry, cache, defaults, init });
  }

  // debug
  debug('instantiated %o with init %o', component, init);
  // and return
  return instance;
}
