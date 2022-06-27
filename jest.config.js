module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/**/*.ts(x)?',
  //   '!src/**/stories.tsx',
  //   '!src/pages/_app.tsx',
  //   '!src/pages/index.tsx'
  // ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
};
