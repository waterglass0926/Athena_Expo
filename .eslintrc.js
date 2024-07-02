// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  rules: {
    'comma-dangle': ['error', 'always-multiline'], // Ensures trailing commas in multiline objects
    'object-curly-spacing': ['error', 'always'], // Enforces consistent spacing inside braces
    'no-unexpected-multiline': 'error', // Prevents unexpected multiline expressions
    'indent': ['error', 2], // Enforces consistent indentation
    'quotes': ['error', 'single'], // Enforces single quotes for strings
    'semi': ['error', 'always'], // Enforces semicolons
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // Limits multiple empty lines
  },
};
