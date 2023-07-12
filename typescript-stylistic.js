module.exports = {
  extends: [
    'plugin:@typescript-eslint/stylistic',
    'plugin:@typescript-eslint/stylistic-type-checked',
    require.resolve('./typescript'),
  ],
};
