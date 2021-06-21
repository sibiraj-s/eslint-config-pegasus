const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const style = require('./rules/style');
const variables = require('./rules/variables');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'ts-compat',
  ],
  rules: {
    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    '@typescript-eslint/brace-style': style.rules['brace-style'],

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    '@typescript-eslint/comma-spacing': style.rules['comma-spacing'],

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    '@typescript-eslint/default-param-last': bestPractices.rules['default-param-last'],

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    '@typescript-eslint/dot-notation': bestPractices.rules['dot-notation'],

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    '@typescript-eslint/func-call-spacing': style.rules['func-call-spacing'],

    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/indent': style.rules.indent,

    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    '@typescript-eslint/init-declarations': variables.rules['init-declarations'],

    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    '@typescript-eslint/keyword-spacing': style.rules['keyword-spacing'],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    '@typescript-eslint/lines-between-class-members': style.rules['lines-between-class-members'],

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': style.rules['no-array-constructor'],

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    '@typescript-eslint/no-dupe-class-members': es6.rules['no-dupe-class-members'],

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    '@typescript-eslint/no-empty-function': bestPractices.rules['no-empty-function'],

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    '@typescript-eslint/no-extra-parens': errors.rules['no-extra-parens'],

    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    '@typescript-eslint/no-extra-semi': errors.rules['no-extra-semi'],

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    '@typescript-eslint/no-implied-eval': bestPractices.rules['no-implied-eval'],

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    '@typescript-eslint/no-invalid-this': bestPractices.rules['no-invalid-this'],

    // disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    '@typescript-eslint/no-loss-of-precision': errors.rules['no-loss-of-precision'],

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    '@typescript-eslint/no-magic-numbers': bestPractices.rules['no-magic-numbers'],

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/return-await': bestPractices.rules['no-return-await'],

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    '@typescript-eslint/no-throw-literal': bestPractices.rules['no-throw-literal'],

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    '@typescript-eslint/no-unused-expressions': bestPractices.rules['no-unused-expressions'],

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': variables.rules['no-unused-vars'],

    // disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': variables.rules['no-use-before-define'],

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    '@typescript-eslint/no-useless-constructor': es6.rules['no-useless-constructor'],

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    '@typescript-eslint/no-shadow': variables.rules['no-shadow'],

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    '@typescript-eslint/quotes': style.rules.quotes,

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    '@typescript-eslint/require-await': bestPractices.rules['require-await'],

    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    '@typescript-eslint/semi': style.rules.semi,

    // enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    '@typescript-eslint/space-before-function-paren': style.rules['space-before-function-paren'],

    // require a specific member delimiter style for interfaces and type literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': 'error',
  },
};
