import react from '@eslint-react/eslint-plugin';

export default {
  name: 'pegasus/react',
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  ...react.configs.recommended,
};
