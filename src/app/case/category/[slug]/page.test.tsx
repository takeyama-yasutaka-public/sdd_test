/**
 * 実績カテゴリーページ テスト
 * 仕様書: docs/ui/pages/case/category/[slug]/specification.md
 */

import { render, screen } from '@testing-library/react'
import CaseCategoryPage from './page'

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
  getCaseAllByCategory: jest.fn(() => Promise.resolve({ contents: [], totalCount: 0 })),
  getCaseCategory: jest.fn(() =>
    Promise.resolve([
      { id: 'cat1', name: 'カテゴリ1', slug: 'test' },
    ])
  ),
}))

describe('CaseCategoryPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await CaseCategoryPage({ params: { slug: 'test' }, searchParams: {} }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
