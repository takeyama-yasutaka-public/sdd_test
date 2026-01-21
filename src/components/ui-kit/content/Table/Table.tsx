/**
 * Table
 * 仕様書: docs/ui/components/ui-kit/content/Table/specification.md
 */

import { ReactNode } from 'react'

// Table Props
export interface TableProps {
  children: ReactNode
  modifierDimension: 'horizontal' | 'vertical' | 'cross'
  modifierScroll?: string
}

/**
 * Tableコンポーネント
 * テーブル表示
 */
export function Table({ children, modifierDimension, modifierScroll }: TableProps) {
  const baseClasses = 'inline-block border-spacing-0 border-separate [&>tbody>tr:first-child>*]:border-t-0 [&>thead>tr:first-child>*]:border-t [&>th]:p-[10px] [&>th]:border-r [&>th]:border-b [&>th]:border-border-field [&>th]:bg-brand-main-tertiary [&>th]:leading-s [&>th]:font-normal [&>th]:align-middle [&>th:first-child]:border-l [&>th:first-child]:border-border-field [&>td]:p-[10px] [&>td]:border-r [&>td]:border-b [&>td]:border-border-field [&>td]:leading-s [&>td]:align-middle [&>td:first-child]:border-l [&>td:first-child]:border-border-field'

  const dimensionClasses =
    modifierDimension === 'horizontal'
      ? 'md:[&>th]:w-auto'
      : modifierDimension === 'vertical'
        ? '[&>tbody>tr:first-child>*]:border-t-0'
        : '[&>thead>tr:first-child>*:first-child]:bg-white [&>thead>tr:first-child>*:first-child]:border-t-0 [&>thead>tr:first-child>*:first-child]:border-l-0 [&>tbody>tr:first-child>*]:border-t-0'

  const scrollClasses = modifierScroll === 'spScroll' ? 'overflow-x-auto [&>th]:whitespace-nowrap [&>td]:whitespace-nowrap' : ''

  const className = `${baseClasses} ${dimensionClasses} ${scrollClasses}`

  return <table className={className}>{children}</table>
}

// TableAbout Props
export interface TableAboutProps {
  children: ReactNode
}

/**
 * TableAboutコンポーネント
 * ABOUTページ用のテーブルスタイル
 */
export function TableAbout({ children }: TableAboutProps) {
  return (
    <table className="border-spacing-[20px_0] m-0 mx-[-20px] [&>th]:w-[200px] [&>th]:py-[15px] [&>th]:pb-[13.5px] [&>th]:border-0 [&>th]:border-b [&>th]:border-brand-main-fifthary [&>th]:leading-s [&>th]:font-normal [&>th]:align-middle md:[&>th]:w-[100px] [&>td]:py-[15px] [&>td]:pb-[13.5px] [&>td]:border-0 [&>td]:border-b [&>td]:border-brand-main-tertiary [&>td]:leading-s [&>td]:align-middle">
      {children}
    </table>
  )
}
