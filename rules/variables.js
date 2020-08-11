const restrictedGlobals = require('confusing-browser-globals');

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

    // disallow specific global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
  },
};
