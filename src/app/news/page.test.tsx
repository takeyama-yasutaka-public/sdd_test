/**
 * ニュース一覧ページ テスト
 * 仕様書: docs/ui/pages/news/specification.md
 */

import { render, screen } from '@testing-library/react'
import NewsPage from './page'

// microCMS APIのモック
jest.mock('@/features/api/microcms/microcms', () => ({
  getNewsAll: jest.fn(() => Promise.resolve({ contents: [], totalCount: 0 })),
}))

describe('NewsPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await NewsPage({ searchParams: {} }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
