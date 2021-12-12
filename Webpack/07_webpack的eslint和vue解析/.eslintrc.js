module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
  ],
  // 这里配置对应规则
  rules: {
    quotes: ["error", "double"],
    "no-console": "off",
    "linebreak-style": "off",
    "comma-dangle": "off",
  },
};
