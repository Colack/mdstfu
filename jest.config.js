export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
};
