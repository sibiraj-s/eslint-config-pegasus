/**
 * @typedef {Object} ESLintConfig
 * @property {Object<string, unknown>} rules - An object containing ESLint rules.
 */

/**
 * Merges multiple ESLint configuration objects into a single configuration object.
 *
 * @param {ESLintConfig[]} configs - An array of ESLint configuration objects.
 * @param {string} name - Name of the config
 * @returns {ESLintConfig} A single merged configuration object.
 */
export default function mergeConfigs(configs, name) {
  const defaults = {
    name,
    rules: {},
  };

  const merged = configs.reduce((prev, current) => {
    return {
      rules: {
        ...prev.rules,
        ...current.rules,
      },
    };
  }, defaults);

  return merged;
}
