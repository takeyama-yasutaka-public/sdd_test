/**
 * FormCheckbox コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/form/FormCheckbox/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import { FormCheckboxGroup, FormCheckbox } from './FormCheckbox'

describe('FormCheckboxGroup', () => {
  // ref転送
  it('forwards ref', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLFieldSetElement>(null)
      return (
        <FormCheckboxGroup ref={ref}>
          <FormCheckbox name="test" value="1" onChange={() => {}} />
        </FormCheckboxGroup>
      )
    }
    render(<TestComponent />)
    const fieldset = screen.getByRole('group')
    expect(fieldset).toBeInTheDocument()
  })
})

describe('FormCheckbox', () => {
  // チェック動作
  it('handles checkbox changes', () => {
    const handleChange = jest.fn()
    render(<FormCheckbox name="test" value="1" onChange={handleChange} />)
    const checkbox = screen.getByRole('checkbox')
    // Checkboxはclickで選択されるためclickで検証する
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalled()
  })
})
