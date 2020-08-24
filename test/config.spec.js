const config = require('../index');
const node = require('../node');
const typescript = require('../typescript');

test('config should be an object', () => {
  expect(typeof config).toBe('object');
  expect(config).toHaveProperty('extends');
});

test('node config should be an object', () => {
  expect(typeof node).toBe('object');
});

test('typescript config should be an object', () => {
  expect(typeof typescript).toBe('object');
});
