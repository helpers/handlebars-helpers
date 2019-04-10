module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js'
  ],
  setupFiles: [
    // './test/support/env.js'
  ],
  testRegex: '(/test/.*|(\\.|/)(tests))\\.(ts|js)x?$',
  testPathIgnorePatterns: ['./test/support/'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'index.js',
    'lib/**/*.js'
  ]
};
