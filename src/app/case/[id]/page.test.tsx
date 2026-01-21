/**
 * 実績詳細ページ テスト
 * 仕様書: docs/ui/pages/case/[id]/specification.md
 */

import { render, screen } from '@testing-library/react'
import CaseDetailPage from './page'

// microCMS APIのモック
jest.mock('@/features/api/microcms', () => ({
  getCasePostById: jest.fn(() => Promise.resolve(null)),
}))

describe('CaseDetailPage', () => {
  // データ取得（スタイル確認）
  it('renders page', async () => {
    render(await CaseDetailPage({ params: { id: '1' } }))
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
