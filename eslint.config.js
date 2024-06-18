import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"


export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "eqeqeq": [1, "always"],
      "no-empty-function": 2,
      "no-undef": 2,
      "quotes": [1, "double"],
      "semi": [1, "never"],
      "indent": [1, 2],
    }
  }
]