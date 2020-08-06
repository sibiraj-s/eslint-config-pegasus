module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // disallow or enforce spaces inside of brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { minItems: 3 },
    }],

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // require Brace Style
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require CamelCase
    // https://eslint.org/docs/rules/camelcase
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],

    // require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // specify whether double or single quotes should be used
    'quotes': ['error', 'single', { avoidEscape: true }],

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
