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
  pegasus.configs.default, //
];
```

**Additional rules**

### Node.js

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default, //
  pegasus.configs.node,
];
```

### Typescript

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.tsConfig({
    files: ['*.ts'],
    extends: pegasus.configs.typescriptRecommended,
  }),
];
```

Or Use Recommended Config

```ts
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.tsConfig({
    files: ['*.ts'],
    extends: pegasus.configs.typescriptRecommended,
  }),
];
```

This extendes [typescript-eslint/recommended](https://typescript-eslint.io/linting/configs/#recommended)
with [typechecking](https://typescript-eslint.io/linting/configs/#recommended-type-checked)

This extendes [typescript-eslint/stylistic](https://typescript-eslint.io/linting/configs/#stylistic)
with [typechecking](https://typescript-eslint.io/linting/configs/#stylistic-type-checked)

Or Use Strict Config

```js
import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.tsConfig({
    files: ['*.ts'],
    extends: pegasus.configs.typescriptStrict,
  }),
];
```

`typescript-strict` includes all base, recommended and stylistic configuration

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
  pegasus.configs.default, //
  pegasus.configs.browser,
];
```
