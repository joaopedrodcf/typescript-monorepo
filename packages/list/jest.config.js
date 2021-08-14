/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require('./package');
const base = require('../../jest.config.base');

module.exports = {
    ...base,
    testEnvironment: 'jsdom', // This is overriden, from the base testEnvironment
    name: packageJson.name,
    displayName: packageJson.name,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
