/**
 * ニュース詳細ページ テスト
 * 仕様書: docs/ui/pages/news/[id]/specification.md
 */

import { render, screen } from '@testing-library/react'
import NewsDetailPage from './page'

// next/navigationのモック
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  notFound: jest.fn(() => {
    throw new Error('notFound called')
  }),
}))

// microCMS APIのモック
jest.mock('@/features/api/microcms/microcms', () => ({
  getNewsPostById: jest.fn(() =>
    Promise.resolve({
      id: '1',
      title: 'テストニュース',
      content: '<p>テストコンテンツ</p>',
      date: '2026-01-01',
    })
  ),
}))

describe('NewsDetailPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await NewsDetailPage({ params: { id: '1' } }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
