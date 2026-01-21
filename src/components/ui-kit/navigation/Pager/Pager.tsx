/**
 * Pager
 * 仕様書: docs/ui/components/ui-kit/navigation/Pager/specification.md
 */

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ReactNode } from 'react'

// Pager Props
export interface PagerProps {
  children: ReactNode
}

/**
 * Pagerコンポーネント
 * ページネーションコンテナ
 */
export function Pager({ children }: PagerProps) {
  return (
    <div className="w-fit">
      <div className="flex flex-wrap gap-[5px]">{children}</div>
    </div>
  )
}

// PagerItem Props
export interface PagerItemProps {
  type: 'number' | 'current' | 'dots' | 'prev' | 'next'
  href?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  number?: number
}

/**
 * PagerItemコンポーネント
 * ページネーション項目
 */
export function PagerItem({ type, href, onClick, number }: PagerItemProps) {
  // type='current'の場合
  if (type === 'current') {
    return (
      <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-on-fill pointer-events-none">
        {number}
      </span>
    )
  }

  // type='dots'の場合
  if (type === 'dots') {
    return (
      <span className="flex items-center justify-center w-10 h-10 text-primary pointer-events-none">
        …
      </span>
    )
  }

  // type='number'の場合
  if (type === 'number') {
    const baseClasses = 'flex items-center justify-center w-10 h-10 text-primary text-lg leading-none no-underline transition-all duration-100 hover:opacity-50 active:opacity-50'

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {number}
        </Link>
      )
    }

    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {number}
      </button>
    )
  }

  // type='prev'/'next'の場合
  const baseClasses = 'flex items-center justify-center w-10 h-10 border border-primary rounded-full text-primary text-xs leading-none no-underline transition-all duration-100 hover:bg-tertiary active:bg-tertiary'
  const Icon = type === 'prev' ? ChevronLeft : ChevronRight
  const ariaLabel = type === 'prev' ? '前のページへ' : '次のページへ'

  if (href) {
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        <Icon className="w-4 h-4" aria-hidden="true" />
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
      <Icon className="w-4 h-4" aria-hidden="true" />
    </button>
  )
}
