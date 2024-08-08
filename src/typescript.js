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

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    // https://typescript-eslint.io/rules/default-param-last
    '@typescript-eslint/default-param-last': bestPractices.rules['default-param-last'],

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    // https://typescript-eslint.io/rules/dot-notation
    '@typescript-eslint/dot-notation': bestPractices.rules['dot-notation'],

    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // https://typescript-eslint.io/rules/init-declarations
    '@typescript-eslint/init-declarations': variables.rules['init-declarations'],

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

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    // https://typescript-eslint.io/rules/require-await
    '@typescript-eslint/require-await': bestPractices.rules['require-await'],
  },
});
