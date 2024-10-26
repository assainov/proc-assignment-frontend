export default {
  'testEnvironment': 'jsdom',
  'moduleNameMapper': {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css)$': 'identity-obj-proxy'
  },
  'setupFilesAfterEnv': [
    '<rootDir>/src/setupTests.js'
  ]
};