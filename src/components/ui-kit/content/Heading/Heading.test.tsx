/**
 * Heading コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/Heading/specification.md
 */

import { render, screen } from '@testing-library/react'
import { HeadingJpn, Heading } from './Heading'

describe('HeadingJpn', () => {
  // HeadingJpn: 通常表示
  it('renders with default styles', () => {
    const { container } = render(<HeadingJpn>見出し</HeadingJpn>)
    const text = screen.getByText('見出し')
    expect(text).toBeInTheDocument()
    // flexレイアウトはラッパー要素に付与される
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'gap-[10px]')
  })

  // HeadingJpn: color='white'時の表示
  it('applies white color modifier', () => {
    render(<HeadingJpn color="white">白背景用見出し</HeadingJpn>)
    const heading = screen.getByText('白背景用見出し')
    expect(heading).toHaveClass('text-on-fill')
  })
})

describe('Heading', () => {
  // Heading: h1-h5の出力
  it('renders h1 element', () => {
    render(<Heading h="h1" modifier="first">見出し1</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('見出し1')
  })

  it('renders h2 element', () => {
    render(<Heading h="h2" modifier="second">見出し2</Heading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('見出し2')
  })

  it('renders h3 element', () => {
    render(<Heading h="h3" modifier="third">見出し3</Heading>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('見出し3')
  })

  // Heading: modifier='first'/'second'/'third'の表示
  it('applies first modifier styles', () => {
    render(<Heading h="h1" modifier="first">見出し</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('relative', 'text-xxxxl', 'md:text-xxxl', 'pl-[22px]')
  })

  it('applies second modifier styles', () => {
    render(<Heading h="h2" modifier="second">見出し</Heading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('relative', 'text-xxxl', 'md:text-xxl', 'pl-5')
  })

  it('applies third modifier styles', () => {
    render(<Heading h="h3" modifier="third">見出し</Heading>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveClass('text-xxl', 'md:text-xl')
  })

  // Heading: color='white'時の表示
  it('applies white color modifier', () => {
    render(<Heading h="h1" modifier="first" color="white">白背景用見出し</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-on-fill')
  })

  // Heading: レスポンシブ表示（スタイル確認）
  it('has responsive typography classes', () => {
    render(<Heading h="h1" modifier="first">レスポンシブ見出し</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('md:text-xxxl')
  })
})
