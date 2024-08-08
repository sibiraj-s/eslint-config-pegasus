import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import strict from './rules/strict.js';
import style from './rules/style.js';
import variables from './rules/variables.js';

import mergeConfigs from './utils/merge-configs.js';

const flatConfig = [
  bestPractices,
  errors,
  es6,
  strict,
  style,
  variables,
];

export default Object.freeze(mergeConfigs(flatConfig, 'pegasus'));
