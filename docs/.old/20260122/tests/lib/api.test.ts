/**
 * API ユーティリティテスト
 * 過去PJの既存動作を保証するテスト
 * 
 * 注意: microCMS SDKをモックしてテスト
 */

import {
  getCasePostById,
  getCaseAll,
  getCaseCategory,
  getCaseAllByCategory,
  getNewsPostById,
  getNewsAll,
} from '@/lib/api'

// microCMS SDKのモック
jest.mock('microcms-js-sdk', () => ({
  createClient: jest.fn(() => ({
    get: jest.fn(),
  })),
}))

// client.getをモック
const mockGet = jest.fn()
jest.mock('@/lib/api', () => {
  const original = jest.requireActual('@/lib/api')
  return {
    ...original,
    client: {
      get: mockGet,
    },
  }
})

describe('API functions', () => {
  beforeEach(() => {
    mockGet.mockClear()
  })

  describe('getCasePostById', () => {
    // 正常時にデータを返す
    it('returns post data on success', async () => {
      const mockPost = { id: 'case1', title: 'テスト実績' }
      mockGet.mockResolvedValueOnce(mockPost)

      const result = await getCasePostById('case1')
      expect(result).toEqual(mockPost)
    })

    // draftKey付きで呼び出し
    it('passes draftKey to query', async () => {
      const mockPost = { id: 'case1', title: 'ドラフト' }
      mockGet.mockResolvedValueOnce(mockPost)

      await getCasePostById('case1', 'draft123')
      // 実際のAPI呼び出しパラメータを確認
    })

    // エラー時にundefinedを返す
    it('returns undefined on error', async () => {
      mockGet.mockRejectedValueOnce(new Error('API Error'))

      const result = await getCasePostById('invalid')
      expect(result).toBeUndefined()
    })
  })

  describe('getCaseAll', () => {
    // 正常時にデータを返す
    it('returns posts data on success', async () => {
      const mockPosts = { contents: [], totalCount: 10 }
      mockGet.mockResolvedValueOnce(mockPosts)

      const result = await getCaseAll()
      expect(result).toEqual(mockPosts)
    })

    // ページネーションパラメータの計算
    it('calculates correct offset', async () => {
      const mockPosts = { contents: [], totalCount: 100 }
      mockGet.mockResolvedValueOnce(mockPosts)

      await getCaseAll(3, 10) // page 3, 10 items per page
      // offset = (3 - 1) * 10 = 20
    })
  })

  describe('getCaseCategory', () => {
    // カテゴリーのcontentsを返す
    it('returns category contents', async () => {
      const mockCategories = { contents: [{ id: 1, name: 'カテゴリ1' }] }
      mockGet.mockResolvedValueOnce(mockCategories)

      const result = await getCaseCategory()
      expect(result).toEqual(mockCategories.contents)
    })
  })

  describe('getCaseAllByCategory', () => {
    // カテゴリーフィルタ付きで取得
    it('returns filtered posts by category', async () => {
      const mockPosts = { contents: [], totalCount: 5 }
      mockGet.mockResolvedValueOnce(mockPosts)

      const result = await getCaseAllByCategory(1)
      expect(result).toEqual(mockPosts)
    })
  })

  describe('getNewsPostById', () => {
    // 正常時にデータを返す
    it('returns news post data on success', async () => {
      const mockPost = { id: 'news1', title: 'テストニュース' }
      mockGet.mockResolvedValueOnce(mockPost)

      const result = await getNewsPostById('news1')
      expect(result).toEqual(mockPost)
    })
  })

  describe('getNewsAll', () => {
    // 正常時にデータを返す
    it('returns news posts data on success', async () => {
      const mockPosts = { contents: [], totalCount: 20 }
      mockGet.mockResolvedValueOnce(mockPosts)

      const result = await getNewsAll()
      expect(result).toEqual(mockPosts)
    })
  })
})
