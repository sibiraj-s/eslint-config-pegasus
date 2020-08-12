module.exports = {
  rules: {
    // enforces getter/setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'error',

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // treat `var` as block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // enforce that class methods utilize this
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // limit cyclomatic complexity
    // https://eslint.org/docs/rules/complexity
    'complexity': ['error', 10],

    // require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // require following curly brace conventions
    // https://eslint.org/docs/rules/curly
    'curly': 'error',

    // require default case in Switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // enforce newline before and after dot
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // require Dot Notation
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'error',
  },
};
