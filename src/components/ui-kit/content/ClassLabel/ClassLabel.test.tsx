/**
 * ClassLabel コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/ClassLabel/specification.md
 */

import { render, screen } from '@testing-library/react'
import { ClassLabel, ClassLabelGroup } from './ClassLabel'

describe('ClassLabel', () => {
  // ClassLabel: 通常表示
  it('renders with default styles', () => {
    render(<ClassLabel text="カテゴリ1" />)
    expect(screen.getByText('カテゴリ1')).toBeInTheDocument()
  })

  // ClassLabel: modifier='single'時の表示
  it('applies single modifier styles', () => {
    render(<ClassLabel text="カテゴリ1" modifier="single" />)
    const label = screen.getByText('カテゴリ1')
    expect(label).toHaveClass('px-[25px]', 'py-2', 'text-base')
  })
})

describe('ClassLabelGroup', () => {
  // ClassLabelGroup: 複数ラベル表示
  it('renders multiple labels', () => {
    render(
      <ClassLabelGroup>
        <ClassLabel text="カテゴリ1" />
        <ClassLabel text="カテゴリ2" />
      </ClassLabelGroup>
    )
    expect(screen.getByText('カテゴリ1')).toBeInTheDocument()
    expect(screen.getByText('カテゴリ2')).toBeInTheDocument()
  })

  // ClassLabelGroup: modifier='single'時の表示
  it('applies single modifier styles', () => {
    const { container } = render(
      <ClassLabelGroup modifier="single">
        <ClassLabel text="カテゴリ1" />
      </ClassLabelGroup>
    )
    const group = container.firstChild
    expect(group).toHaveClass('gap-[10px]')
  })
})
