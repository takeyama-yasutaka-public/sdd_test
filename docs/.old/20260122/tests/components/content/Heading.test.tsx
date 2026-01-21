/**
 * Heading コンポーネントテスト
 * 過去PJの既存動作を保証するテスト
 */

import { render, screen } from '@testing-library/react'
import { Heading, HeadingJpn } from '@/components/content/Heading'

describe('HeadingJpn', () => {
  // HeadingJpn: テキストのレンダリング
  it('renders children text', () => {
    render(<HeadingJpn>日本語見出し</HeadingJpn>)
    expect(screen.getByText('日本語見出し')).toBeInTheDocument()
  })

  // HeadingJpn: color属性の設定
  it('sets data-modifier attribute for color', () => {
    const { container } = render(<HeadingJpn color="white">白色見出し</HeadingJpn>)
    const wrapper = container.firstChild
    expect(wrapper).toHaveAttribute('data-modifier', 'white')
  })
})

describe('Heading', () => {
  // Heading: h1要素のレンダリング
  it('renders h1 element when h="h1"', () => {
    render(<Heading h="h1" modifier="first">見出し1</Heading>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('見出し1')
  })

  // Heading: h2要素のレンダリング
  it('renders h2 element when h="h2"', () => {
    render(<Heading h="h2" modifier="first">見出し2</Heading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  // Heading: h3要素のレンダリング
  it('renders h3 element when h="h3"', () => {
    render(<Heading h="h3" modifier="second">見出し3</Heading>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
  })

  // Heading: h4要素のレンダリング
  it('renders h4 element when h="h4"', () => {
    render(<Heading h="h4" modifier="third">見出し4</Heading>)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toBeInTheDocument()
  })

  // Heading: h5要素のレンダリング
  it('renders h5 element when h="h5"', () => {
    render(<Heading h="h5" modifier="third">見出し5</Heading>)
    const heading = screen.getByRole('heading', { level: 5 })
    expect(heading).toBeInTheDocument()
  })

  // Heading: modifier属性の設定
  it('sets data-modifier attribute', () => {
    render(<Heading h="h2" modifier="first">見出し</Heading>)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveAttribute('data-modifier', 'first')
  })

  // Heading: color属性の設定
  it('sets data-modifier-color attribute', () => {
    render(<Heading h="h2" modifier="first" color="white">白色見出し</Heading>)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveAttribute('data-modifier-color', 'white')
  })
})
