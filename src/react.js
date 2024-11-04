import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  name: 'pegasus/react',
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null,
    },
  },
  plugins: {
    react,
    ...reactHooks.configs.recommended.plugins,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
