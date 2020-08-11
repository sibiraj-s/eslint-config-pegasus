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

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // disallow Shadowing of Restricted Names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow Undeclared Variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // disallow Initializing to undefined
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // disallow Use of undefined Variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'error',

    // disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error',
  },
};
