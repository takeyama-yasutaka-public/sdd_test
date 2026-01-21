/**
 * Content コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/layout/Content/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Content, ContentHeader, ContentBody, ContentFooter } from './Content'

describe('Content', () => {
  // コンテンツ表示
  it('renders as main element', () => {
    const { container } = render(<Content>コンテンツ</Content>)
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
    expect(screen.getByText('コンテンツ')).toBeInTheDocument()
  })

  // 各セクション表示
  it('renders sections', () => {
    render(
      <Content>
        <ContentHeader>ヘッダー</ContentHeader>
        <ContentBody>本文</ContentBody>
        <ContentFooter>フッター</ContentFooter>
      </Content>
    )
    expect(screen.getByText('ヘッダー')).toBeInTheDocument()
    expect(screen.getByText('本文')).toBeInTheDocument()
    expect(screen.getByText('フッター')).toBeInTheDocument()
  })
})
