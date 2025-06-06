import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from 'globals'
import eslintImport from 'eslint-plugin-import'
import filesRulesMatch from 'eslint-plugin-filename-rules'

export default tseslint.config(
  { ignores: ['dist', 'build'] },
  {
    extends: [eslint.configs.recommended, tseslint.configs.strictTypeChecked],
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'import': eslintImport,
      'filename-rules': filesRulesMatch,
    },
    rules: {
      // "filename-rules/match": [2, { ".ts": "kebabcase" }],
      "import/no-default-export": "error",
      "quotes": [2, "single", { "avoidEscape": true }],
      "indent": ["error", 2],
      "block-spacing": "error",
      "semi": "error",
      "eol-last": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "import/no-empty-named-blocks": "error",
      "import/export": "error",
      "import/no-cycle": "error",
      "import/no-relative-packages": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
      "@typescript-eslint/explicit-function-return-type":  ["error", { allowExpressions: true }],
      "no-trailing-spaces": ["error", { "ignoreComments": true }],
      "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0, "maxEOF": 0 }],
      "import/no-unused-modules": "error",
      "indent": ["error", 2],
      "no-console": "error",
      "import/no-commonjs": "error",
      "import/no-relative-packages": "error",
      "import/no-useless-path-segments": "error",
      "import/order": ["error", {
        "alphabetize": { "order": "asc" },
        "groups": ["external", "internal", "index", "type"],
        "pathGroups": [
          {
            "pattern": "dirA/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "dirB/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "dirC/**",
            "group": "internal"
          }
        ],
        "newlines-between": "always-and-inside-groups",
        "pathGroupsExcludedImportTypes": [],
      }],
      "max-len": ["error", {
        "ignoreComments": true,
        "code": 100,
        "tabWidth": 2,
      }]
    },
  },
)
