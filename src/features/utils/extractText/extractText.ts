/**
 * extractText
 * 仕様書: docs/features/utils/extractText/specification.md
 */

import { convert } from 'html-to-text'

/**
 * HTML文字列からテキスト抽出
 * @param html - HTML文字列
 * @param length - 最大文字数（デフォルト: 80）
 * @param more - 省略記号（デフォルト: '…'）
 * @returns 抽出テキスト + more
 */
export function extractText(html: string, length: number = 80, more: string = '…'): string {
  // HTML文字列からテキスト抽出
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  })

  // 長さ制限
  if (text.length > length) {
    return text.slice(0, length) + more
  }

  return text
}
