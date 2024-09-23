module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier'],
  ignorePatterns: ["*.js", "node_modules"],
  parserOptions: {
    project: './tsconfig.json',
  },
};
