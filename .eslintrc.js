module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier'],
  ignorePatterns: ["*.js"],
  parserOptions: {
    project: './tsconfig.json',
  },
};
