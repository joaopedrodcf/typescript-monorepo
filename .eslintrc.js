module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'prettier'],
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'builtin',
                ],
            },
        ],
        'react/prop-types': 'off',
    },
};
