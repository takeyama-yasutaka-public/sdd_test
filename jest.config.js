const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Next.jsアプリのパスを指定
  dir: './',
})

// Jestのカスタム設定
const customJestConfig = {
  // テスト環境
  testEnvironment: 'jest-environment-jsdom',
  
  // モジュールパスの解決
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@testing-library/jest-dom$': '<rootDir>/node_modules/@testing-library/jest-dom',
  },
  
  // テストファイルのパターン
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  
  // テストから除外するパス
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/docs/.old/',
  ],
  
  // カバレッジの設定
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
  ],
  
  // セットアップファイル
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

// Next.jsのJest設定とマージ
module.exports = createJestConfig(customJestConfig)
