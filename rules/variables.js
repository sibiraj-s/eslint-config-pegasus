module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': ['error', 'never'],

    // disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',
  },
};
