import pegasus from './index.js';

export default [
  pegasus.configs.default,
  pegasus.configs.stylistic,
  pegasus.configs.node,
  {
    ...pegasus.configs.react,
    files: ['test/fixtures/jsx/*.jsx'],
  },
  ...pegasus.tsConfig({
    files: ['test/fixtures/ts/*.ts'],
    extends: pegasus.configs.typescriptStrict,
  }),
];
