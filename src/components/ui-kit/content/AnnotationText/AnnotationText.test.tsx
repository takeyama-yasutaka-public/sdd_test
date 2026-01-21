/**
 * AnnotationText コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/AnnotationText/specification.md
 */

import { render, screen } from '@testing-library/react'
import { AnnotationText } from './AnnotationText'

describe('AnnotationText', () => {
  // 注釈テキスト表示
  it('renders annotation text', () => {
    const { container } = render(<AnnotationText>注釈テキスト</AnnotationText>)
    const blockquote = container.querySelector('blockquote')
    expect(blockquote).toBeInTheDocument()
    expect(screen.getByText('注釈テキスト')).toBeInTheDocument()
  })
})
