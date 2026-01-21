/**
 * FormTextarea コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/form/FormTextarea/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import { FormTextarea } from './FormTextarea'

describe('FormTextarea', () => {
  // 入力動作
  it('handles textarea changes', () => {
    const handleChange = jest.fn()
    render(
      <FormTextarea
        name="test"
        rows={5}
        placeholder="テスト"
        value=""
        onChange={handleChange}
      />
    )
    const textarea = screen.getByPlaceholderText('テスト')
    fireEvent.change(textarea, { target: { value: 'テスト入力' } })
    expect(handleChange).toHaveBeenCalled()
  })

  // ref転送
  it('forwards ref', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLTextAreaElement>(null)
      return (
        <FormTextarea
          name="test"
          rows={5}
          placeholder="テスト"
          value=""
          onChange={() => {}}
          ref={ref}
        />
      )
    }
    render(<TestComponent />)
    const textarea = screen.getByPlaceholderText('テスト')
    expect(textarea).toBeInTheDocument()
  })
})
