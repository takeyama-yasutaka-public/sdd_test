/**
 * PostArea コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/PostArea/specification.md
 */

import { render, screen } from '@testing-library/react'
import { PostArea } from './PostArea'

describe('PostArea', () => {
  // 各要素のスタイル適用
  it('renders children', () => {
    render(
      <PostArea>
        <h2>見出し2</h2>
        <h3>見出し3</h3>
        <p>本文</p>
      </PostArea>
    )
    expect(screen.getByText('見出し2')).toBeInTheDocument()
    expect(screen.getByText('見出し3')).toBeInTheDocument()
    expect(screen.getByText('本文')).toBeInTheDocument()
  })
})
