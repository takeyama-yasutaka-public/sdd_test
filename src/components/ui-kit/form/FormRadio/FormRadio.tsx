/**
 * FormRadio
 * 仕様書: docs/ui/components/ui-kit/form/FormRadio/specification.md
 */

import { forwardRef, FieldsetHTMLAttributes, InputHTMLAttributes } from 'react'

// FormRadioGroup Props
export interface FormRadioGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: React.ReactNode
}

/**
 * FormRadioGroupコンポーネント
 * ラジオボタングループ
 */
export const FormRadioGroup = forwardRef<HTMLFieldSetElement, FormRadioGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <fieldset ref={ref} className="flex flex-col gap-[10px]" {...props}>
        {children}
      </fieldset>
    )
  }
)

FormRadioGroup.displayName = 'FormRadioGroup'

// FormRadio Props
export interface FormRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * FormRadioコンポーネント
 * ラジオボタン
 */
export function FormRadio({ name, value, onChange, ...props }: FormRadioProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="w-5 h-5 border border-border-field rounded-full focus:border-border-focused focus:outline-none"
        {...props}
      />
      <span>{value}</span>
    </label>
  )
}
