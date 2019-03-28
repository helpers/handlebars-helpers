module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js'
  ],
  setupFiles: [
    // './test/support/env.js'
  ],
  testRegex: '(/test/.*|(\\.|/)(tests))\\.(ts|js)x?$',
  testPathIgnorePatterns: ['./test/support/', './test/fixtures/'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'app.js',
    'src/**/*.js'
  ]
};
