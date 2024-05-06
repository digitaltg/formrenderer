
const esModules = [].join('|');

/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: "jsdom",
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    setupFiles: ["<rootDir>/jest.setup.js"],
    // globalTeardown: "<rootDir>/tests/bootstrap/teardown.js",
};

module.exports = config;

//i am the gouverneur
