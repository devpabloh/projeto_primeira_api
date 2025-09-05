import eslintJS from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginImport from "eslint-plugin-import";
import importHelpers from "eslint-plugin-import-helpers";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist"],
  },

  eslintJS.configs.recommended,

  ...tseslint.configs.recommended,

  ...tseslint.configs.stylistic,

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: eslintPluginImport,
      "import-helpers": importHelpers,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions:{
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: true, 
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      camelcase: "off",
      "import/no-unresolved": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: { regex: "^I[A-Z]", match: true },
        },
      ],
      "class-methods-use-this": "off",
      "import/prefer-default-export": "off",
      "no-shadow": "off",
      "no-console": "off",
      "no-useless-constructor": "off",
      "no-empty-function": "off",
      "lines-between-class-members": "off",
      "import/extensions": ["error", "ignorePackages", { ts: "never" }],
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: ["module", "/^@shared/", ["parent", "sibling", "index"]],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: ["**/*.spec.js", "**/*.spec.ts", "**/*.test.ts"] },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },

  eslintConfigPrettier
);
