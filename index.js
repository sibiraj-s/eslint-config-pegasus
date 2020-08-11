module.exports = {
  extends: [
    './rules/errors',
    './rules/es6',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
};
