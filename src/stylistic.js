import stylistic from '@stylistic/eslint-plugin';

export default {
  name: 'pegasus/stylistic',
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    ...stylistic.configs['recommended-flat'].rules,
    // enforce line breaks after opening and before closing array
    // https://eslint.style/rules/default/array-bracket-newline
    '@stylistic/array-bracket-newline': ['error', 'consistent'],

    // disallow or enforce spaces inside of brackets
    // https://eslint.style/rules/default/array-bracket-spacing
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // enforce line breaks between array elements
    // https://eslint.style/rules/default/array-element-newline
    '@stylistic/array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { minItems: 3 },
    }],

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.style/rules/default/block-spacing
    '@stylistic/block-spacing': ['error', 'always'],

    // require Brace Style
    // https://eslint.style/rules/default/brace-style
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require or disallow trailing commas
    // https://eslint.style/rules/default/comma-dangle
    '@stylistic/comma-dangle': ['error', 'always-multiline'],

    // enforces spacing around commas
    // https://eslint.style/rules/default/comma-spacing
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],

    // enforce consistent comma style
    // https://eslint.style/rules/default/comma-style
    '@stylistic/comma-style': ['error', 'last'],

    // enforce consistent spacing inside computed property brackets
    // https://eslint.style/rules/default/computed-property-spacing
    '@stylistic/computed-property-spacing': ['error', 'never'],

    // require or disallow newline at the end of files
    // https://eslint.style/rules/default/eol-last
    '@stylistic/eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.style/rules/default/func-call-spacing
    '@stylistic/function-call-spacing': ['error', 'never'],

    // enforce line breaks between arguments of a function call
    // https://eslint.style/rules/default/function-call-argument-newline
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.style/rules/default/function-paren-newline
    '@stylistic/function-paren-newline': ['error', 'consistent'],

    // enforce the location of arrow function bodies
    // https://eslint.style/rules/default/implicit-arrow-linebreak
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    // enforce consistent indentation
    // https://eslint.style/rules/default/indent
    '@stylistic/indent': ['error', 2, {
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

    // enforce the consistent use of either double or single quotes in JSX attributes
    // https://eslint.style/rules/default/jsx-quotes
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],

    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.style/rules/default/key-spacing
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce consistent spacing before and after keywords
    // https://eslint.style/rules/default/keyword-spacing
    '@stylistic/keyword-spacing': ['error', {
      before: true,
      after: true,
    }],

    // enforce position of line comments
    // https://eslint.style/rules/default/line-comment-position
    '@stylistic/line-comment-position': 'off',

    // enforce consistent linebreak style
    // https://eslint.style/rules/default/linebreak-style
    '@stylistic/linebreak-style': ['error', 'unix'],

    // require empty lines around comments
    // https://eslint.style/rules/default/lines-around-comment
    '@stylistic/lines-around-comment': 'off',

    // require or disallow an empty line between class members
    // https://eslint.style/rules/default/lines-between-class-members
    '@stylistic/lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
      exceptAfterOverload: true,
    }],

    // specify the maximum length of a line in your program
    // https://eslint.style/rules/default/max-len
    '@stylistic/max-len': ['error', 120, 2, {
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],

    // enforce a maximum number of statements allowed per line
    // https://eslint.style/rules/default/max-statements-per-line
    '@stylistic/max-statements-per-line': ['error', { max: 2 }],

    // require a specific member delimiter style for interfaces and type literals
    // https://eslint.style/rules/default/member-delimiter-style
    '@stylistic/member-delimiter-style': 'error',

    // enforce a particular style for multiline comments
    // https://eslint.style/rules/default/multiline-comment-style
    '@stylistic/multiline-comment-style': 'off',

    // enforce newlines between operands of ternary expressions
    // https://eslint.style/rules/default/multiline-ternary
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    // enforce or disallow parentheses when invoking a constructor with no arguments
    // https://eslint.style/rules/default/new-parens
    '@stylistic/new-parens': 'error',

    // require a newline after each call in a method chain
    // https://eslint.style/rules/default/newline-per-chained-call
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow unnecessary parentheses
    // https://eslint.style/rules/default/no-extra-parens
    '@stylistic/no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false,
      ignoreJSX: 'multi-line',
    }],

    // disallow unnecessary semicolons
    // https://eslint.style/rules/default/no-extra-semi
    'no-extra-semi': 'error',

    // disallow mixed binary operators
    // https://eslint.style/rules/default/no-mixed-operators
    '@stylistic/no-mixed-operators': 'error',

    // disallow mixed spaces and tabs for indentation
    // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.style/rules/default/no-multiple-empty-lines
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow all tabs
    // https://eslint.style/rules/default/no-tabs
    '@stylistic/no-tabs': 'error',

    // disallow trailing whitespace at the end of lines
    // https://eslint.style/rules/default/no-trailing-spaces
    '@stylistic/no-trailing-spaces': 'error',

    // disallow whitespace before properties
    // https://eslint.style/rules/default/no-whitespace-before-property
    '@stylistic/no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    // https://eslint.style/rules/default/nonblock-statement-body-position
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],

    // enforce consistent line breaks inside braces
    // https://eslint.style/rules/default/object-curly-newline
    '@stylistic/object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // enforce consistent spacing inside braces
    // https://eslint.style/rules/default/object-curly-spacing
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    // https://eslint.style/rules/default/object-property-newline
    '@stylistic/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // require or disallow newlines around variable declarations
    // https://eslint.style/rules/default/one-var-declaration-per-line
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    // requires operator at the beginning of the line in multiline statements
    // https://eslint.style/rules/default/operator-linebreak
    '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // require or disallow padding within blocks
    // https://eslint.style/rules/default/padded-blocks
    '@stylistic/padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // require or disallow padding lines between statements
    // https://eslint.style/rules/default/padding-line-between-statements
    '@stylistic/padding-line-between-statements': 'off',

    // require quotes around object literal property names
    // https://eslint.style/rules/default/quote-props.html
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],

    // specify whether double or single quotes should be used
    // https://eslint.style/rules/default/quotes
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // require or disallow use of semicolons instead of ASI
    // https://eslint.style/rules/default/semi
    '@stylistic/semi': ['error', 'always'],

    // enforce consistent spacing before and after semicolons
    // https://eslint.style/rules/default/semi-spacing
    '@stylistic/semi-spacing': ['error', { before: false, after: true }],

    // enforce location of semicolons
    // https://eslint.style/rules/default/semi-style
    '@stylistic/semi-style': ['error', 'last'],

    // sequire Or Disallow Space Before Blocks
    // https://eslint.style/rules/default/space-before-blocks
    '@stylistic/space-before-blocks': 'error',

    // require or disallow a space before function parenthesis
    // https://eslint.style/rules/default/space-before-function-paren
    '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // disallow or enforce spaces inside of parentheses
    // https://eslint.style/rules/default/space-in-parens
    '@stylistic/space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    // https://eslint.style/rules/default/space-infix-ops
    '@stylistic/space-infix-ops': 'error',

    // require or disallow spaces before/after unary operators
    // https://eslint.style/rules/default/space-unary-ops
    '@stylistic/space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    // requires or disallows a whitespace (space or tab) beginning a comment
    // https://eslint.style/rules/default/spaced-comment
    '@stylistic/spaced-comment': ['error', 'always', {
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
    // https://eslint.style/rules/default/switch-colon-spacing
    '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

    // require or disallow spacing between template tags and their literals
    // https://eslint.style/rules/default/template-tag-spacing
    '@stylistic/template-tag-spacing': ['error', 'never'],

    // require parenthesis around regex literals
    // https://eslint.style/rules/default/wrap-regex
    '@stylistic/wrap-regex': 'error',
  },
};
