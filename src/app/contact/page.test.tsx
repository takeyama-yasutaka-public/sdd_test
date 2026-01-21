/**
 * お問い合わせページ テスト
 * 仕様書: docs/ui/pages/contact/specification.md
 */

import { render, screen } from '@testing-library/react'
import ContactPage from './page'

describe('ContactPage', () => {
  // フォーム表示（スタイル確認）
  it('renders page', async () => {
    render(await ContactPage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
