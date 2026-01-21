/**
 * AnnotationText
 * 仕様書: docs/ui/components/ui-kit/content/AnnotationText/specification.md
 */

import { ReactNode } from 'react'

interface AnnotationTextProps {
  children: ReactNode
}

/**
 * AnnotationTextコンポーネント
 * 注釈テキスト表示
 */
export function AnnotationText({ children }: AnnotationTextProps) {
  return (
    <blockquote className="flex gap-4 [&>p]:p-[10px] [&>p]:italic before:block before:w-1 before:h-auto before:bg-grey-100">
      {children}
    </blockquote>
  )
}
