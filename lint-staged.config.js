module.exports = {
    '*.{js,ts,tsx}': ['eslint --fix'],
    'styles.tsx': ['stylelint --fix'],
    '*.json': ['prettier --write'],
};
