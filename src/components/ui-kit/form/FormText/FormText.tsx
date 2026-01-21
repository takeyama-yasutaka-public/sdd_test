/**
 * FormText
 * 仕様書: docs/ui/components/ui-kit/form/FormText/specification.md
 */

import { forwardRef, InputHTMLAttributes } from 'react'

export interface FormTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  modifier?: string
}

/**
 * FormTextコンポーネント
 * テキスト入力フィールド
 */
export const FormText = forwardRef<HTMLInputElement, FormTextProps>(
  ({ name, placeholder, value, onChange, modifier, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-[15px] border border-border-field rounded-full focus:border-border-focused focus:outline-none"
        {...props}
      />
    )
  }
)

FormText.displayName = 'FormText'
