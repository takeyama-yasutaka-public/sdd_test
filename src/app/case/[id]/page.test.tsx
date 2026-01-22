/**
 * 実績詳細ページ テスト
 * 仕様書: docs/ui/pages/case/[id]/specification.md
 */

import { render, screen } from '@testing-library/react'
import CaseDetailPage from './page'

// next/navigationのモック
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  notFound: jest.fn(() => {
    throw new Error('notFound called')
  }),
}))

// plaiceholderのモック
jest.mock('plaiceholder', () => ({
  getPlaiceholder: jest.fn(() =>
    Promise.resolve({
      base64: 'data:image/jpeg;base64,test',
    })
  ),
}))

// microCMS APIのモック
jest.mock('@/features/api/microcms/microcms', () => ({
  getCasePostById: jest.fn(() =>
    Promise.resolve({
      id: '1',
      title: 'テスト実績',
      content: '<p>テストコンテンツ</p>',
      date: '2026-01-01',
      eyecatch: {
        url: '/test.jpg',
        width: 800,
        height: 600,
      },
      category: [{ id: 'cat1', name: 'カテゴリ1' }],
    })
  ),
}))

describe('CaseDetailPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await CaseDetailPage({ params: { id: '1' } }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
