/**
 * サービスページ テスト
 * 仕様書: docs/ui/pages/service/specification.md
 */

import { render, screen } from '@testing-library/react'
import ServicePage from './page'

describe('ServicePage', () => {
  // 各セクション表示（スタイル確認）
  it('renders page', async () => {
    render(await ServicePage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
