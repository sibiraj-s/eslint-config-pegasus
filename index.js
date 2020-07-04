module.exports = {
  extends: [
    './rules/style',
    './rules/strict',
    './rules/es6',
  ].map(require.resolve),  
};
