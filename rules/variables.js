module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow Labels That Are Variables Names
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',
  },
};
