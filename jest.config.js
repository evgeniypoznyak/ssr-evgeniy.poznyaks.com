const {defaults} = require('jest-config');
module.exports = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
};
