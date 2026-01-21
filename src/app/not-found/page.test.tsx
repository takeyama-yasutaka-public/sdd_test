/**
 * 404ページ テスト
 * 仕様書: docs/ui/pages/not-found/specification.md
 */

import { render, screen } from '@testing-library/react'
import NotFoundPage from './page'

describe('NotFoundPage', () => {
  // 404表示（スタイル確認）
  it('renders page', async () => {
    render(await NotFoundPage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
