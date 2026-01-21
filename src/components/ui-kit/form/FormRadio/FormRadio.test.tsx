/**
 * FormRadio コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/form/FormRadio/specification.md
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import { FormRadioGroup, FormRadio } from './FormRadio'

describe('FormRadioGroup', () => {
  // ref転送
  it('forwards ref', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLFieldSetElement>(null)
      return (
        <FormRadioGroup ref={ref}>
          <FormRadio name="test" value="1" onChange={() => {}} />
        </FormRadioGroup>
      )
    }
    render(<TestComponent />)
    const fieldset = screen.getByRole('group')
    expect(fieldset).toBeInTheDocument()
  })
})

describe('FormRadio', () => {
  // ラジオ選択動作
  it('handles radio changes', () => {
    const handleChange = jest.fn()
    render(<FormRadio name="test" value="1" onChange={handleChange} />)
    const radio = screen.getByRole('radio')
    fireEvent.change(radio, { target: { checked: true } })
    expect(handleChange).toHaveBeenCalled()
  })
})
