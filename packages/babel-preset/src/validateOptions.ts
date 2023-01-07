import Ajv from 'ajv';

import { configSchema } from './schema';
import { BabelPluginOptions } from './types';

const ajv = new Ajv();

/**
 * Validates options for transformPlugin with a schema.
 */
export function validateOptions(pluginOptions: BabelPluginOptions): BabelPluginOptions {
  const valid = ajv.validate(configSchema, pluginOptions);

  if (!valid) {
    throw new Error(`Validation failed for passed config: ${ajv.errorsText(ajv.errors)}`);
  }

  return pluginOptions;
}
