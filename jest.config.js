module.exports = {
  roots: ['./server/src'],
  testEnvironment: 'node', //테스트 환경 'node' 환경을 사용한다 알려줌
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
