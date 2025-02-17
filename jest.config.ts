
// eslint-disable-next-line import/no-default-export
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests',
  ],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  }
}
