/**
 * formatDate ユーティリティテスト
 * 過去PJの既存動作を保証するテスト
 */

import { formatDate } from '@/lib/formatDate'

describe('formatDate', () => {
  // ISO形式の日付を日本語形式に変換
  it('formats ISO date to Japanese format', () => {
    expect(formatDate('2026-01-22T00:00:00.000Z')).toBe('2026年1月22日')
  })

  // 月の先頭0を除去
  it('removes leading zero from month', () => {
    expect(formatDate('2026-03-05T00:00:00.000Z')).toBe('2026年3月5日')
  })

  // 日の先頭0を除去
  it('removes leading zero from day', () => {
    expect(formatDate('2026-12-01T00:00:00.000Z')).toBe('2026年12月1日')
  })

  // UTCからAsia/Tokyoへの変換
  it('converts UTC to Asia/Tokyo timezone', () => {
    // UTC 2026-01-21 15:00:00 → JST 2026-01-22 00:00:00
    expect(formatDate('2026-01-21T15:00:00.000Z')).toBe('2026年1月22日')
  })

  // microCMS形式の日付
  it('handles microCMS date format', () => {
    expect(formatDate('2026-01-22T09:00:00.000Z')).toBe('2026年1月22日')
  })
})
