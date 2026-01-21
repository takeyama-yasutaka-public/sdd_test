/**
 * StructuredData コンポーネントテスト
 * 仕様書: docs/ui/components/ui-features/StructuredData/specification.md
 */

import { render } from '@testing-library/react'
import { StructuredData } from './StructuredData'

describe('StructuredData', () => {
  // Article/WebPageのJSON-LD生成
  it('generates Article JSON-LD when type is provided', () => {
    const { container } = render(
      <StructuredData type="Article" name="テスト記事" description="テスト説明" />
    )
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
  })

  // BreadcrumbListのJSON-LD生成
  it('generates BreadcrumbList JSON-LD when breadcrumb is provided', () => {
    const breadcrumb = [
      { path: '/', name: 'ホーム' },
      { path: '/about', name: '会社概要' },
    ]
    const { container } = render(
      <StructuredData breadcrumb={breadcrumb} />
    )
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
  })

  // isHome=true/false時の表示
  it('renders when isHome is true', () => {
    const { container } = render(<StructuredData isHome />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
  })
})
