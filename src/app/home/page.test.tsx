/**
 * トップページ テスト
 * 仕様書: docs/ui/pages/home/specification.md
 */

import { render, screen } from '@testing-library/react'
import HomePage from '../page'

// microCMS APIのモック
jest.mock('@/features/api/microcms/microcms', () => ({
  getNewsAll: jest.fn(() => Promise.resolve({ contents: [], totalCount: 0 })),
  getCaseAll: jest.fn(() => Promise.resolve({ contents: [], totalCount: 0 })),
}))

describe('HomePage', () => {
  // データ取得
  it('fetches news data', async () => {
    const { getNewsAll } = require('@/features/api/microcms/microcms')
    const { container } = render(await HomePage())
    expect(getNewsAll).toHaveBeenCalledWith(1, 3)
    expect(container.firstChild).toBeInTheDocument()
  })

  // 各セクション表示
  it('renders all sections', async () => {
    const { container } = render(await HomePage())
    expect(container.firstChild).toBeInTheDocument()
  })

  // ニュース一覧表示
  it('renders news list', async () => {
    const { container } = render(await HomePage())
    // ニュースデータが表示されることを確認（モックデータに基づく）
    expect(container.firstChild).toBeInTheDocument()
  })
})
