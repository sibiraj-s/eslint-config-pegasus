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

See [Eslint's Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) for more information.

```yml
extends:
  - pegasus
```

**Additional rules**

### Node.js

```yml
extends:
  - pegasus
  - pegasus/node
```

### Typescript

```yml
extends:
  - pegasus
  - pegasus/typescript # base config
```

Or Use Recommended Config

```yml
extends:
  - pegasus
  - pegasus/typescript-recommended
```

This extendes [typescript-eslint/recommended](https://typescript-eslint.io/linting/configs/#recommended)
with [typechecking](https://typescript-eslint.io/linting/configs/#recommended-type-checked)

Or Use Stylistic Config

```yml
extends:
  - pegasus
  - pegasus/typescript-recommended
  - pegasus/typescript-stylistic
```

This extendes [typescript-eslint/stylistic](https://typescript-eslint.io/linting/configs/#stylistic)
with [typechecking](https://typescript-eslint.io/linting/configs/#stylistic-type-checked)

Or Use Strict Config

```yml
extends:
  - pegasus
  - pegasus/typescript-strict
```

`typescript-strict` includes all base, recommended and stylistic configuration

### React

```yml
extends:
  - pegasus
  - pegasus/react
```

### Browsers

```yml
extends:
  - pegasus
  - pegasus/browser
```
