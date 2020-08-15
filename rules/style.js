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

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',

    // require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // enforces spacing around commas
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce consistent comma style
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // enforce consistent spacing inside computed property brackets
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'error',

    // require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'error',

    // require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'always'],

    // enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression'],

    // enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // enforce spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', 'after'],

    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['TemplateLiteral *'],
      ignoreComments: false,
    }],

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

    // disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // sequire Or Disallow Space Before Blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // require or disallow a space before function parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // disallow or enforce spaces inside of parentheses
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    // requires or disallows a whitespace (space or tab) beginning a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'],
        balanced: true,
      },
    }],

    // enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // specify whether double or single quotes should be used
    'quotes': ['error', 'single', { avoidEscape: true }],

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
