/**
 * 実績一覧ページ テスト
 * 仕様書: docs/ui/pages/case/specification.md
 */

import { render, screen } from '@testing-library/react'
import CasePage from './page'

// microCMS APIのモック
jest.mock('@/features/api/microcms', () => ({
  getCaseAll: jest.fn(() => Promise.resolve({ contents: [], totalCount: 0 })),
  getCaseCategory: jest.fn(() => Promise.resolve([])),
}))

describe('CasePage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await CasePage({ searchParams: {} }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
