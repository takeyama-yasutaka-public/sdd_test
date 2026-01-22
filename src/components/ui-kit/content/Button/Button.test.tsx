/**
 * Button コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/Button/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { Button, ButtonCase, ButtonGroup } from './Button'

// Next.js Linkコンポーネントのモック
jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
})

describe('Button', () => {
  // Button: href有無での要素切り替え
  it('renders as Link when href is provided', () => {
    render(<Button href="/test">テストボタン</Button>)
    const link = screen.getByRole('link', { name: 'テストボタン' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders as button when href is not provided', () => {
    render(<Button>テストボタン</Button>)
    const button = screen.getByRole('button', { name: 'テストボタン' })
    expect(button).toBeInTheDocument()
  })

  // Button: modifierColor='secondary'の表示
  it('applies secondary modifierColor styles', () => {
    render(<Button modifierColor="secondary">セカンダリボタン</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-primary')
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

  // Button: hover/active時の拡大アニメーション（スタイル確認）
  it('has hover and active animation classes', () => {
    render(<Button>アニメーションボタン</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('transition-all', 'duration-100')
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

  // ButtonCase: current状態の表示
  it('applies current state styles when current is true', () => {
    render(<ButtonCase href="/case" current>現在</ButtonCase>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('text-on-fill', 'pointer-events-none')
  })

  // ButtonCase: 非current状態
  it('applies default styles when current is false', () => {
    render(<ButtonCase href="/case">通常</ButtonCase>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('text-primary')
  })

  // ButtonCase: hover/active時の背景色変化（スタイル確認）
  it('has hover and active transition classes', () => {
    render(<ButtonCase href="/case">ホバーボタン</ButtonCase>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('transition-all', 'duration-100')
  })

  // ButtonCase: SP時のレスポンシブ（スタイル確認）
  it('has responsive classes for mobile', () => {
    render(<ButtonCase href="/case">レスポンシブボタン</ButtonCase>)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('md:w-full', 'md:px-[30px]', 'md:py-[10px]', 'md:text-sm')
  })
})

describe('ButtonGroup', () => {
  // ButtonGroup: 通常レイアウト
  it('renders children with flex layout', () => {
    render(
      <ButtonGroup>
        <Button>ボタン1</Button>
        <Button>ボタン2</Button>
      </ButtonGroup>
    )
    expect(screen.getByText('ボタン1')).toBeInTheDocument()
    expect(screen.getByText('ボタン2')).toBeInTheDocument()
  })

  // ButtonGroup: type='case'時のレイアウト
  it('applies case type styles', () => {
    const { container } = render(
      <ButtonGroup type="case">
        <Button>ボタン</Button>
      </ButtonGroup>
    )
    const group = container.firstChild
    expect(group).toHaveClass('mb-20', 'gap-[10px]', 'md:flex-col')
  })
})
