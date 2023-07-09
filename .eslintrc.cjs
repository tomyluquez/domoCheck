module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@emotion"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@emotion/jsx-import": "error",
    "@emotion/pkg-renaming": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
  },
};
