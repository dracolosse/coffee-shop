module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['unused-imports', '@typescript-eslint'],
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    // unused-imports
    // https://www.npmjs.com/package/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 1,
    'unused-imports/no-unused-vars': [
      0,
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
