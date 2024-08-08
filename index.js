import tseslint from 'typescript-eslint';

import pegasus from './pegasus.js';
import browser from './browser.js';
import node from './node.js';
import react from './react.js';
import typescript from './typescript.js';
import typescriptRecommended from './typescript-recommended.js';
import typescriptStrict from './typescript-strict.js';

export default Object.freeze({
  tsConfig: tseslint.config,
  configs: {
    default: pegasus,
    browser,
    node,
    react,
    typescript,
    typescriptRecommended,
    typescriptStrict,
  },
});
