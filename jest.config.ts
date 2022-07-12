import { Config } from '@jest/types'

const commonProjectConfig: Config.InitialProjectOptions = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  collectCoverage: true,
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        importHelpers: false,
      },
    },
  },
  projects: [
    {
      displayName: 'node',
      testEnvironment: 'node',
      ...commonProjectConfig,
      moduleNameMapper: {
        './perf': '<rootDir>/src/node.ts',
        ...commonProjectConfig.moduleNameMapper,
      },
    },
    {
      displayName: 'browser',
      testEnvironment: 'jsdom',
      ...commonProjectConfig,
    },
  ],
}

export default config
