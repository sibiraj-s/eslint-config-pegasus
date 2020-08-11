const { ESLint } = require('eslint');

const baseConfig = require('../index');

const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: baseConfig,
});

it('should validate the code correctly', async () => {
  const code = 'const foo = {\n  x: 1,\n  y: 2,\n};\nfoo.x = 3;\n';
  const errors = await eslint.lintText(code);

  expect(errors[0].errorCount).toBe(0);
});
