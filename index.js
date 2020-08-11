module.exports = {
  extends: [
    './rules/errors',
    './rules/style',
    './rules/strict',
    './rules/es6',
  ].map(require.resolve),
};
