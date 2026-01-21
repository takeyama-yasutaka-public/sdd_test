/**
 * プライバシーポリシーページ テスト
 * 仕様書: docs/ui/pages/privacy/specification.md
 */

import { render, screen } from '@testing-library/react'
import PrivacyPage from './page'

describe('PrivacyPage', () => {
  // プライバシーポリシー表示（スタイル確認）
  it('renders page', async () => {
    render(await PrivacyPage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
