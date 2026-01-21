/**
 * microCMS API テスト
 * 仕様書: docs/features/api/microcms/specification.md
 */

import {
  getCasePostById,
  getCaseAll,
  getCaseCategory,
  getCaseAllByCategory,
  getNewsPostById,
  getNewsAll,
} from './microcms'

// microCMS SDKのモック
jest.mock('microcms-js-sdk', () => ({
  createClient: jest.fn(() => ({
    get: jest.fn(),
  })),
}))

describe('microCMS API', () => {
  // getCaseAll: 実績一覧取得
  it('getCaseAll returns data', async () => {
    const result = await getCaseAll(1, 10)
    expect(result).toBeDefined()
  })

  // getNewsAll: ニュース一覧取得
  it('getNewsAll returns data', async () => {
    const result = await getNewsAll(1, 10)
    expect(result).toBeDefined()
  })
})
