module.exports = {
  extends: [
    require.resolve('./typescript-recommended'),
    require.resolve('./typescript-stylistic'),
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/strict-type-checked',
  ],
};
