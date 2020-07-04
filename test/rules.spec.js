const fs = require('fs');
const path = require('path');

const { ESLint } = require('eslint');

const baseConfig = require('../index');

const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: baseConfig,
});

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId);

const fixturesPath = path.resolve(__dirname, 'fixtures');

const fixtures = fs.readdirSync(fixturesPath)
  .map(fileName => {
    const fileAbsPath = path.resolve(__dirname, 'fixtures', fileName);
    const code = fs.readFileSync(fileAbsPath, 'utf-8');
    
    return [
      path.basename(fileAbsPath, '.js'),
      code,
    ];
  });

test.each(fixtures)('Rule: %s', async (rule, code) => {
  const errors = await eslint.lintText(code);
  expect(hasRule(errors[0].messages, rule)).toBe(true);
});
