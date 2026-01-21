/**
 * FormTextarea
 * 仕様書: docs/ui/components/ui-kit/form/FormTextarea/specification.md
 */

import { forwardRef, TextareaHTMLAttributes } from 'react'

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  rows: number
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

/**
 * FormTextareaコンポーネント
 * テキストエリアフィールド
 */
export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ name, rows, placeholder, value, onChange, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-[15px] border border-border-field rounded-full focus:border-border-focused focus:outline-none resize-none"
        {...props}
      />
    )
  }
)

FormTextarea.displayName = 'FormTextarea'
