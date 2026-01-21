/**
 * extractText ユーティリティテスト
 * 仕様書: docs/features/utils/extractText/specification.md
 */

import { extractText } from './extractText'

// html-to-textのモック
jest.mock('html-to-text', () => ({
  convert: jest.fn((html: string) => html.replace(/<[^>]*>/g, '')),
}))

describe('extractText', () => {
  // HTML文字列からテキスト抽出
  it('extracts text from HTML string', () => {
    const result = extractText('<p>テストテキスト</p>', 80)
    expect(result).toContain('テストテキスト')
  })

  // 長さ制限
  it('truncates text when exceeding length', () => {
    const longText = 'あ'.repeat(100)
    const result = extractText(`<p>${longText}</p>`, 80)
    expect(result.length).toBeLessThanOrEqual(81) // 80 + '…'
  })
})
