# eslint-plugin-pegasus

<p align="center">
  <a href="https://github.com/sibiraj-s/eslint-config-pegasus">
   <img src="./assets/pegasus.png" alt="pegasus" height="300">
  </a>
</p>
<p align="center">
  <a href="https://github.com/sibiraj-s/eslint-config-pegasus/actions">
    <img alt="Tests" src="https://github.com/sibiraj-s/eslint-config-pegasus/workflows/Tests/badge.svg">
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-pegasus">
    <img alt="npm version" src="https://badgen.net/npm/v/eslint-config-pegasus">
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-pegasus">
    <img alt="npm" src="https://badgen.net/npm/dt/eslint-config-pegasus">
  </a>
  <a href="https://github.com/sibiraj-s/eslint-config-pegasus/blob/master/LICENSE">
    <img alt="licence" src="https://badgen.net/npm/license/eslint-config-pegasus">
  </a>
</p>

> Eslint shareable config with personalized defaults.

## Install

```bash
npm install eslint eslint-config-pegasus --save-dev
```

## Usage

See [Eslint's Shareable Configs](https://eslint.org/docs/extend/shareable-configs) for more information.

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default, // core config
  pegasus.configs.stylistic, // stylistic config
];
```

**Additional rules**

### Node.js

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default, // core
  pegasus.configs.node,
];
```

### Typescript

`pegasus.tsConfig` is a re-export of [typescript-eslint's config helper](https://typescript-eslint.io/packages/typescript-eslint#config).

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.tsConfig(pegasus.configs.typescript),
];

// Or
export default pegasus.tsConfig(
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.configs.typescript,
);
```

By default, the following files are matched: `**/*.ts`, `**/*.mts`, `**/*.cts`. To customize this, you can pass the `files` option.

```ts
import pegasus from 'eslint-config-pegasus';

export default pegasus.tsConfig(
  pegasus.configs.default, // core
  pegasus.configs.node, // node
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: pegasus.configs.typescript,
  },
);
```

### Typescript Recommended

```ts
import pegasus from 'eslint-config-pegasus';

export default pegasus.tsConfig(
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.configs.typescriptRecommended,
);
```

This extendes [typescript-eslint/recommended](https://typescript-eslint.io/linting/configs/#recommended)
with [typechecking](https://typescript-eslint.io/linting/configs/#recommended-type-checked)

### Typescript Strict

```js
import pegasus from 'eslint-config-pegasus';

export default pegasus.tsConfig(
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.configs.typescriptStrict,
);
```

`typescript-strict` includes all base, recommended and stylistic configuration

## Custom TsConfig

By default, the `projectService` option is enabled in the parser options, which is needed for certain rules which require type information. This might conflict when passing the `project` option to the parser.

To override this, you can disable `projectService` and specify the `project` to the custom tsconfig file.

```ts
import pegasus from 'eslint-config-pegasus';

export default pegasus.tsConfig(
  pegasus.configs.default, // core
  pegasus.configs.node, // node
  {
    extends: pegasus.configs.typescript,
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
```

See [typescript-eslint's docs](https://typescript-eslint.io/packages/parser#configuration) for more information.

### React

```js
import pegasus from './index.js';

export default [
  pegasus.configs.default,
  {
    ...pegasus.configs.react,
    files: ['test/fixtures/jsx/*.jsx'],
  },
];
```

### Browsers

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default, // core
  pegasus.configs.browser,
];
```
