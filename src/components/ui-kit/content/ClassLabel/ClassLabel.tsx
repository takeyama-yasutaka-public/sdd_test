/**
 * ClassLabel
 * 仕様書: docs/ui/components/ui-kit/content/ClassLabel/specification.md
 */

import { ReactNode } from 'react'

// ClassLabel Props
export interface ClassLabelProps {
  text: string
  modifier?: string
}

/**
 * ClassLabelコンポーネント
 * カテゴリーラベル表示
 */
export function ClassLabel({ text, modifier }: ClassLabelProps) {
  const baseClasses = 'inline-block w-fit bg-primary rounded-full text-on-fill leading-s font-medium'
  const sizeClasses = modifier === 'single' ? 'px-[25px] py-2 text-base' : 'px-5 py-[5px] text-sm'
  const className = `${baseClasses} ${sizeClasses}`

  return <span className={className}>{text}</span>
}

// ClassLabelGroup Props
export interface ClassLabelGroupProps {
  children: ReactNode
  modifier?: string
}

/**
 * ClassLabelGroupコンポーネント
 * 複数ラベルを横並びで表示
 */
export function ClassLabelGroup({ children, modifier }: ClassLabelGroupProps) {
  const baseClasses = 'flex flex-wrap'
  const gapClass = modifier === 'single' ? 'gap-[10px]' : 'gap-[5px]'
  const className = `${baseClasses} ${gapClass}`

  return <div className={className}>{children}</div>
}
