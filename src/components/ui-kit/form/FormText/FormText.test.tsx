/**
 * FormText コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/form/FormText/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import { FormText } from './FormText'

describe('FormText', () => {
  // 入力動作
  it('handles input changes', () => {
    const handleChange = jest.fn()
    render(
      <FormText
        name="test"
        placeholder="テスト"
        value=""
        onChange={handleChange}
      />
    )
    const input = screen.getByPlaceholderText('テスト')
    fireEvent.change(input, { target: { value: 'テスト入力' } })
    expect(handleChange).toHaveBeenCalled()
  })

  // ref転送
  it('forwards ref', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLInputElement>(null)
      return (
        <FormText
          name="test"
          placeholder="テスト"
          value=""
          onChange={() => {}}
          ref={ref}
        />
      )
    }
    render(<TestComponent />)
    const input = screen.getByPlaceholderText('テスト')
    expect(input).toBeInTheDocument()
  })
})
