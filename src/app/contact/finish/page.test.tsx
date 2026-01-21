/**
 * お問い合わせ完了ページ テスト
 * 仕様書: docs/ui/pages/contact/finish/specification.md
 */

import { render, screen } from '@testing-library/react'
import ContactFinishPage from './page'

describe('ContactFinishPage', () => {
  // 完了画面表示（スタイル確認）
  it('renders page', async () => {
    render(await ContactFinishPage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
