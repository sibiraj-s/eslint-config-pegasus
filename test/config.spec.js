const config = require('../index');

test('config should be an object', () => {
  expect(typeof config).toBe('object');
  expect(config).toHaveProperty('extends');
});
