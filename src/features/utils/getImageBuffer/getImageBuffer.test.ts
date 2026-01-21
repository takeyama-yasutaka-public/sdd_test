/**
 * getImageBuffer ユーティリティテスト
 * 仕様書: docs/features/utils/getImageBuffer/specification.md
 */

import { getImageBuffer } from './getImageBuffer'

// node:fs/promisesのモック
jest.mock('node:fs/promises', () => ({
  readFile: jest.fn(() => Promise.resolve(Buffer.from('test'))),
}))

// fetchのモック
global.fetch = jest.fn(() =>
  Promise.resolve({
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(8)),
  } as Response)
)

describe('getImageBuffer', () => {
  // 画像バッファ取得（httpで始まる場合）
  it('fetches image buffer from http URL', async () => {
    const result = await getImageBuffer('https://example.com/image.jpg')
    expect(result).toBeDefined()
  })

  // 画像バッファ取得（public/パスから読み込み）
  it('reads image buffer from public path', async () => {
    const result = await getImageBuffer('/images/test.jpg')
    expect(result).toBeDefined()
  })
})
