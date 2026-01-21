/**
 * FormCheckbox
 * 仕様書: docs/ui/components/ui-kit/form/FormCheckbox/specification.md
 */

import { forwardRef, FieldsetHTMLAttributes, InputHTMLAttributes } from 'react'

// FormCheckboxGroup Props
export interface FormCheckboxGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: React.ReactNode
}

/**
 * FormCheckboxGroupコンポーネント
 * チェックボックスグループ
 */
export const FormCheckboxGroup = forwardRef<HTMLFieldSetElement, FormCheckboxGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <fieldset ref={ref} className="flex flex-col gap-[10px]" {...props}>
        {children}
      </fieldset>
    )
  }
)

FormCheckboxGroup.displayName = 'FormCheckboxGroup'

// FormCheckbox Props
export interface FormCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * FormCheckboxコンポーネント
 * チェックボックス
 */
export function FormCheckbox({ name, value, onChange, ...props }: FormCheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        className="w-5 h-5 border border-border-field rounded focus:border-border-focused focus:outline-none"
        {...props}
      />
      <span>{value}</span>
    </label>
  )
}
