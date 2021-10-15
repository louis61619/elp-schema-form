module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
    // 'plugin:prettier/recommended'
  ],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-v-html': 'off'
    // 'array-bracket-spacing': ['error', 'always']
    // 'no-multiple-empty-lines': [ "error", { "max": 1, "maxBOF": 1} ]
  }
}
