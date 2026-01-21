/**
 * ニュース詳細ページ テスト
 * 仕様書: docs/ui/pages/news/[id]/specification.md
 */

import { render, screen } from '@testing-library/react'
import NewsDetailPage from './page'

// microCMS APIのモック
jest.mock('@/features/api/microcms', () => ({
  getNewsPostById: jest.fn(() => Promise.resolve(null)),
}))

describe('NewsDetailPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await NewsDetailPage({ params: { id: '1' } }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
