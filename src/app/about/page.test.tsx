/**
 * 会社情報ページ テスト
 * 仕様書: docs/ui/pages/about/specification.md
 */

import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('AboutPage', () => {
  // 各セクション表示（スタイル確認）
  it('renders page', async () => {
    render(await AboutPage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
