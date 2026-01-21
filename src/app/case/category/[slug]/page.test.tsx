/**
 * 実績カテゴリーページ テスト
 * 仕様書: docs/ui/pages/case/category/[slug]/specification.md
 */

import { render, screen } from '@testing-library/react'
import CaseCategoryPage from './page'

// microCMS APIのモック
jest.mock('@/features/api/microcms', () => ({
  getCaseAllByCategory: jest.fn(() => Promise.resolve({ contents: [], totalCount: 0 })),
  getCaseCategory: jest.fn(() => Promise.resolve([])),
}))

describe('CaseCategoryPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await CaseCategoryPage({ params: { slug: 'test' }, searchParams: {} }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
