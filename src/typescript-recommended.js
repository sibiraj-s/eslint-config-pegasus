import tseslint from 'typescript-eslint';
import typescript from './typescript.js';

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  ...typescript,
);
