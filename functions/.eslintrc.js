module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    "ecmaVersion": 12,
  },
  extends: [
    "eslint:recommended",
    'plugin:node/recommended',
  ],
  globals: {
    module: 'readonly',  // module をグローバルとして定義
    exports: 'readonly', // exports をグローバルとして定義
    require: 'readonly', // require をグローバルとして定義
  },
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
