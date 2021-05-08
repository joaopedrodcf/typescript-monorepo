// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('./jest.config.base');

module.exports = {
    ...base,
    roots: ['<rootDir>'],
    projects: [
        '<rootDir>/packages/button',
        '<rootDir>/packages/header',
        '<rootDir>/packages/server',
        '<rootDir>/packages/app',
    ],
};
