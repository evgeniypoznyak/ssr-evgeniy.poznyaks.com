/*
Note: Node modules are automatically mocked when you have a manual mock in place (e.g.: __mocks__/lodash.js).
More info here: https://jestjs.io/docs/en/manual-mocks.html#mocking-node-modules
Note: Core modules, like fs, are not mocked by default. They can be mocked explicitly, like jest.mock('fs').
 */

const {defaults} = require('jest-config');
module.exports = {
    'verbose': true,
    'moduleFileExtensions': [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    'setupFilesAfterEnv': ['<rootDir>src/setupTests.js'],
    'coverageThreshold': {
        'global': {
            'branches': 50,
            'functions': 50,
            'lines': 50,
            'statements': 50,
        },
        // './src/components/': {
        //     'branches': 40,
        //     'statements': 40,
        // },
        // './src/containers/': {
        //     'branches': 40,
        //     'statements': 40,
        // },
        // './src/reducers/**/*.js': {
        //     'statements': 90,
        // },
        // './src/api/very-important-module.js': {
        //     'branches': 100,
        //     'functions': 100,
        //     'lines': 100,
        //     'statements': 100,
        // },
    },
};
