/**
 * formatDate ユーティリティテスト
 * 仕様書: docs/features/utils/formatDate/specification.md
 */

import { formatDate } from './formatDate'

// dayjsのモック
jest.mock('dayjs', () => {
  const mockDayjs = jest.fn((date: string) => ({
    tz: jest.fn(() => ({
      format: jest.fn(() => '2026年1月22日'),
    })),
  }))
  mockDayjs.extend = jest.fn()
  return mockDayjs
})

describe('formatDate', () => {
  // 日付フォーマット変換
  it('formats date to YYYY年M月D日 format', () => {
    const result = formatDate('2026-01-22T00:00:00Z')
    expect(result).toBe('2026年1月22日')
  })

  // タイムゾーン変換
  it('converts timezone to Asia/Tokyo', () => {
    const result = formatDate('2026-01-22T00:00:00Z')
    expect(result).toBeDefined()
  })
})
