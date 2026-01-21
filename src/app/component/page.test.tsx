/**
 * コンポーネントページ テスト
 * 仕様書: docs/ui/pages/component/specification.md
 */

import { render, screen } from '@testing-library/react'
import ComponentPage from './page'

describe('ComponentPage', () => {
  // コンポーネント表示（スタイル確認）
  it('renders page', async () => {
    render(await ComponentPage())
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
