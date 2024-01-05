import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { '^.+\\.tsx?$': ['ts-jest', { rootDir: '.' }] },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1'
  }
};

export default config;
