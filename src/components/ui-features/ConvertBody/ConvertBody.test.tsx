/**
 * ConvertBody コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/ConvertBody/specification.md
 */

import { render, screen } from '@testing-library/react'
import { ConvertBody } from './ConvertBody'

// Next.js Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('ConvertBody', () => {
  // HTML文字列の変換
  it('converts HTML string to React elements', () => {
    render(<ConvertBody contentHTML="<p>テスト</p>" />)
    expect(screen.getByText('テスト')).toBeInTheDocument()
  })

  // img要素のNext.js Image置換
  it('replaces img elements with Next.js Image', () => {
    render(
      <ConvertBody contentHTML='<img src="/test.jpg" alt="テスト" width="100" height="100" />' />
    )
    const image = screen.getByAltText('テスト')
    expect(image).toBeInTheDocument()
  })
})
