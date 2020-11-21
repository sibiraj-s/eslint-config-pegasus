const path = require('path');
const { ESLint } = require('eslint');

const getBaseConfig = (config = [], rest = {}) => {
  return {
    extends: [
      '../index',
      ...config,
    ].map(require.resolve),
    ...rest,
  };
};

it('should validate the code correctly with "default config"', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    cwd: path.join(__dirname, 'fixtures', 'js'),
    baseConfig: getBaseConfig(),
  });

  const results = await eslint.lintFiles(['*']);
  expect(results[0].errorCount).toBe(0);
});

it('should validate the code correctly with "node config"', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    cwd: path.join(__dirname, 'fixtures', 'js'),
    baseConfig: getBaseConfig(['../node']),
  });

  const results = await eslint.lintFiles(['*']);
  expect(results[0].errorCount).toBe(0);
});

it('should validate the code correctly with "typescript config"', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    cwd: path.join(__dirname, 'fixtures', 'ts'),
    baseConfig: getBaseConfig(
      ['../typescript'],
      {
        parserOptions: {
          project: 'tsconfig.json',
          tsconfigRootDir: path.join(__dirname, 'fixtures', 'ts'),
        },
      },
    ),
  });

  const results = await eslint.lintFiles(['*']);
  expect(results[0].errorCount).toBe(0);
});
