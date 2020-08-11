module.exports = {
  rules: {
    // enforce "for" loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment operators in conditional statements
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 'error',

    // disallow the use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'error',
  },
};
