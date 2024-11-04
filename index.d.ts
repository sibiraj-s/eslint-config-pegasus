import { config } from 'typescript-eslint';
import type { Linter } from 'eslint';
import type { TSESLint } from '@typescript-eslint/utils';

declare const pegasus: {
  tsConfig: typeof config,
  configs: {
    default: Linter.Config,
    stylistic: Linter.Config,
    browser: Linter.Config,
    node: Linter.Config,
    react: Linter.Config,
    typescript: TSESLint.FlatConfig.ConfigArray,
    typescriptRecommended: TSESLint.FlatConfig.ConfigArray,
    typescriptStrict: TSESLint.FlatConfig.ConfigArray,
  },
};

export default pegasus;
