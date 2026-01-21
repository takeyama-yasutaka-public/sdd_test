/**
 * Button コンポーネントテスト
 * 過去PJの既存動作を保証するテスト
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { Button, ButtonCase, ButtonGroup } from '@/components/content/Button'

// Next.js Linkコンポーネントのモック
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Button', () => {
  // Button: href有りでLink要素としてレンダリング
  it('renders as Link when href is provided', () => {
    render(<Button href="/test">テストボタン</Button>)
    const link = screen.getByRole('link', { name: 'テストボタン' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  // Button: href無しでbutton要素としてレンダリング
  it('renders as button when href is not provided', () => {
    render(<Button>テストボタン</Button>)
    const button = screen.getByRole('button', { name: 'テストボタン' })
    expect(button).toBeInTheDocument()
  })

  // Button: onClick発火
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>クリック</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // Button: type属性の設定
  it('sets type attribute on button', () => {
    render(<Button type="submit">送信</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
  })

  // Button: modifierColor属性の設定
  it('sets data-modifierColor attribute', () => {
    render(<Button modifierColor="secondary">セカンダリ</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-modifierColor', 'secondary')
  })
})

describe('ButtonCase', () => {
  // ButtonCase: 常にLink要素としてレンダリング
  it('renders as Link', () => {
    render(<ButtonCase href="/case">ケースボタン</ButtonCase>)
    const link = screen.getByRole('link', { name: 'ケースボタン' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/case')
  })

  // ButtonCase: current状態のdata-modifier設定
  it('sets data-modifier to current when current is true', () => {
    render(<ButtonCase href="/case" current>現在</ButtonCase>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('data-modifier', 'current')
  })

  // ButtonCase: 非current状態のdata-modifier設定
  it('sets data-modifier to empty when current is false', () => {
    render(<ButtonCase href="/case">通常</ButtonCase>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('data-modifier', '')
  })
})

describe('ButtonGroup', () => {
  // ButtonGroup: 子要素のレンダリング
  it('renders children', () => {
    render(
      <ButtonGroup>
        <Button>ボタン1</Button>
        <Button>ボタン2</Button>
      </ButtonGroup>
    )
    expect(screen.getByText('ボタン1')).toBeInTheDocument()
    expect(screen.getByText('ボタン2')).toBeInTheDocument()
  })

  // ButtonGroup: type属性の設定
  it('sets data-modifierType attribute', () => {
    const { container } = render(
      <ButtonGroup type="case">
        <Button>ボタン</Button>
      </ButtonGroup>
    )
    const group = container.firstChild
    expect(group).toHaveAttribute('data-modifierType', 'case')
  })
})
