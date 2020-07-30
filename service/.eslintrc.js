module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jest/style',
    'plugin:jest/recommended',
    'eslint-config-prettier',
  ],
  env: {
    browser: false,
    node: true,
  },
  globals: {
    assert: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['assert', 'expect', 'request.*.expect'],
      },
    ],
  },
}
