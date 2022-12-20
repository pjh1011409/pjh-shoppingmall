// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "prettier",
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        jsxSingleQuote: true,
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 100,
        bracketSameLine: false,
        useTabs: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
