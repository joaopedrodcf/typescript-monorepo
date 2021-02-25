module.exports = {
    env: {
        "browser": true,
        "jest": true,
        "node": true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      "react",
      "jsx-a11y",
      "prettier"
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:react/recommended" , 
      "plugin:jsx-a11y/recommended",
      "plugin:testing-library/recommended",
      "plugin:jest-dom/recommended",
      'prettier',
    ],
    rules: {
        "react/prop-types": "off"
    }
};