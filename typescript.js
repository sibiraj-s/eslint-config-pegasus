import tsEslint from 'typescript-eslint';
import tscompat from 'eslint-config-ts-compat';

import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import style from './rules/style.js';
import variables from './rules/variables.js';

export default tsEslint.config({
  name: 'pegasus/typescript',
  extends: [
    tscompat,
  ],
  languageOptions: {
    parser: tsEslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins: {
    '@typescript-eslint': tsEslint.plugin,
  },
  rules: {
    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    // https://typescript-eslint.io/rules/brace-style
    // '@typescript-eslint/brace-style': style.rules['brace-style'],

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    // https://typescript-eslint.io/rules/naming-convention
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

    // enforce that class methods utilize this
    // https://eslint.org/docs/rules/class-methods-use-this
    // https://typescript-eslint.io/rules/class-methods-use-this
    '@typescript-eslint/class-methods-use-this': bestPractices.rules['class-methods-use-this'],

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow trailing commas
    // https://eslint.org/docs/latest/rules/comma-dangle
    // https://typescript-eslint.io/rules/comma-dangle
    // '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    // https://typescript-eslint.io/rules/comma-spacing
    // '@typescript-eslint/comma-spacing': style.rules['comma-spacing'],

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    // https://typescript-eslint.io/rules/default-param-last
    '@typescript-eslint/default-param-last': bestPractices.rules['default-param-last'],

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    // https://typescript-eslint.io/rules/dot-notation
    '@typescript-eslint/dot-notation': bestPractices.rules['dot-notation'],

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    // https://typescript-eslint.io/rules/func-call-spacing
    // '@typescript-eslint/func-call-spacing': style.rules['func-call-spacing'],

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    // https://typescript-eslint.io/rules/indent
    // '@typescript-eslint/indent': style.rules.indent,

    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // https://typescript-eslint.io/rules/init-declarations
    '@typescript-eslint/init-declarations': variables.rules['init-declarations'],

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    // https://typescript-eslint.io/rules/key-spacing
    // '@typescript-eslint/key-spacing': style.rules['key-spacing'],

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    // https://typescript-eslint.io/rules/keyword-spacing
    // '@typescript-eslint/keyword-spacing': style.rules['keyword-spacing'],

    // @deprecated in favour of rule in ESLint Stylistic
    // require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    // https://typescript-eslint.io/rules/lines-around-comment
    '@typescript-eslint/lines-around-comment': style.rules['lines-around-comment'],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // https://typescript-eslint.io/rules/lines-between-class-members
    // '@typescript-eslint/lines-between-class-members': [
    //   style.rules['lines-between-class-members'][0],
    //   style.rules['lines-between-class-members'][1],
    //   {
    //     ...style.rules['lines-between-class-members'][2],
    //     exceptAfterOverload: true,
    //   },
    // ],

    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    // https://typescript-eslint.io/rules/max-params
    '@typescript-eslint/max-params': ['error', { max: style.rules['max-params'][1] }],

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    // https://typescript-eslint.io/rules/no-array-constructor
    '@typescript-eslint/no-array-constructor': style.rules['no-array-constructor'],

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    '@typescript-eslint/no-dupe-class-members': es6.rules['no-dupe-class-members'],

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    // https://typescript-eslint.io/rules/no-empty-function
    '@typescript-eslint/no-empty-function': bestPractices.rules['no-empty-function'],

    // @deprecated in favour of rule in ESLint Stylistic
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // https://typescript-eslint.io/rules/no-extra-parens
    // '@typescript-eslint/no-extra-parens': errors.rules['no-extra-parens'],

    // @deprecated in favour of rule in ESLint Stylistic
    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    // https://typescript-eslint.io/rules/no-extra-semi
    // '@typescript-eslint/no-extra-semi': errors.rules['no-extra-semi'],

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    // https://typescript-eslint.io/rules/no-implied-eval
    '@typescript-eslint/no-implied-eval': bestPractices.rules['no-implied-eval'],

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    // https://typescript-eslint.io/rules/no-invalid-this
    '@typescript-eslint/no-invalid-this': bestPractices.rules['no-invalid-this'],

    // disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/rules/no-loop-func
    // https://typescript-eslint.io/rules/no-loop-func
    '@typescript-eslint/no-loop-func': bestPractices.rules['no-loop-func'],

    // disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    '@typescript-eslint/no-loss-of-precision': errors.rules['no-loss-of-precision'],

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // https://typescript-eslint.io/rules/no-magic-numbers
    '@typescript-eslint/no-magic-numbers': bestPractices.rules['no-magic-numbers'],

    // disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    // https://typescript-eslint.io/rules/no-redeclare
    '@typescript-eslint/no-redeclare': bestPractices.rules['no-redeclare'],

    // disallow specified modules when loaded by import
    // https://eslint.org/docs/rules/no-restricted-imports
    // https://typescript-eslint.io/rules/no-restricted-imports
    '@typescript-eslint/no-restricted-imports': es6.rules['no-restricted-imports'],

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    // https://typescript-eslint.io/rules/return-await
    '@typescript-eslint/return-await': bestPractices.rules['no-return-await'],

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/only-throw-error
    '@typescript-eslint/only-throw-error': bestPractices.rules['no-throw-literal'],

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    // https://typescript-eslint.io/rules/no-unused-expressions
    '@typescript-eslint/no-unused-expressions': bestPractices.rules['no-unused-expressions'],

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    // https://typescript-eslint.io/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': variables.rules['no-unused-vars'],

    // disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    // https://typescript-eslint.io/rules/no-use-before-define
    '@typescript-eslint/no-use-before-define': variables.rules['no-use-before-define'],

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    // https://typescript-eslint.io/rules/no-useless-constructor
    '@typescript-eslint/no-useless-constructor': es6.rules['no-useless-constructor'],

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    // https://typescript-eslint.io/rules/object-curly-spacing
    // '@typescript-eslint/object-curly-spacing': style.rules['object-curly-spacing'],

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    // https://typescript-eslint.io/rules/padding-line-between-statements
    '@typescript-eslint/padding-line-between-statements': style.rules['padding-line-between-statements'],

    // require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // https://typescript-eslint.io/rules/prefer-destructuring
    '@typescript-eslint/prefer-destructuring': es6.rules['prefer-destructuring'],

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    // https://typescript-eslint.io/rules/prefer-promise-reject-errors
    '@typescript-eslint/prefer-promise-reject-errors': bestPractices.rules['prefer-promise-reject-errors'],

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    // https://typescript-eslint.io/rules/no-shadow
    '@typescript-eslint/no-shadow': variables.rules['no-shadow'],

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    // https://typescript-eslint.io/rules/quotes
    // '@typescript-eslint/quotes': style.rules.quotes,

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    // https://typescript-eslint.io/rules/require-await
    '@typescript-eslint/require-await': bestPractices.rules['require-await'],

    // @deprecated in favour of rule in ESLint Stylistic
    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    // https://typescript-eslint.io/rules/semi
    // '@typescript-eslint/semi': style.rules.semi,

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    // https://typescript-eslint.io/rules/space-before-blocks
    // '@typescript-eslint/space-before-blocks': style.rules['space-before-blocks'],

    // @deprecated in favour of rule in ESLint Stylistic
    // enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    // https://typescript-eslint.io/rules/space-before-function-paren
    // '@typescript-eslint/space-before-function-paren': style.rules['space-before-function-paren'],

    // @deprecated in favour of rule in ESLint Stylistic
    // require a specific member delimiter style for interfaces and type literals
    // https://typescript-eslint.io/rules/member-delimiter-style
    // '@typescript-eslint/member-delimiter-style': 'error',

    // @deprecated in favour of rule in ESLint Stylistic
    // require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    // https://typescript-eslint.io/rules/space-infix-ops
    // '@typescript-eslint/space-infix-ops': style.rules['space-infix-ops'],
  },
});
