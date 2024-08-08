import tseslint from 'typescript-eslint';

import pegasus from './src/pegasus.js';
import stylistic from './src/stylistic.js';
import browser from './src/browser.js';
import node from './src/node.js';
import react from './src/react.js';
import typescript from './src/typescript.js';
import typescriptRecommended from './src/typescript-recommended.js';
import typescriptStrict from './src/typescript-strict.js';

export default Object.freeze({
  tsConfig: tseslint.config,
  configs: {
    default: pegasus,
    stylistic,
    browser,
    node,
    react,
    typescript,
    typescriptRecommended,
    typescriptStrict,
  },
});
