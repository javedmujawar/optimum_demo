// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  