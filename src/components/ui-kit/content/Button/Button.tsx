/**
 * Button
 * 仕様書: docs/ui/components/ui-kit/content/Button/specification.md
 */

import Link from 'next/link'
import { ReactNode } from 'react'

// Button Props
export interface ButtonProps {
  children: ReactNode
  href?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  modifierColor?: string
}

/**
 * Buttonコンポーネント
 * href指定時はLink要素、未指定時はbutton要素
 */
export function Button({ children, href, type, onClick, modifierColor }: ButtonProps) {
  // 共通クラス
  const baseClasses =
    'relative inline-block w-fit min-w-[150px] max-w-full px-10 py-[15px] text-base font-medium no-underline text-center z-0 transition-all duration-100'

  // modifierColor='secondary'の場合
  const textColorClass = modifierColor === 'secondary' ? 'text-primary' : 'text-on-fill'

  // before疑似要素のクラス（hover/active時の拡大はinset調整で実装）
  const beforeClasses =
    modifierColor === 'secondary'
      ? 'before:absolute before:inset-0 before:bg-white before:border before:border-primary before:rounded-full before:transition-all before:duration-100 before:-z-10 hover:before:inset-[-10px] active:before:inset-[-10px]'
      : 'before:absolute before:inset-0 before:bg-primary before:border before:border-transparent before:rounded-full before:transition-all before:duration-100 before:-z-10 hover:before:inset-[-10px] active:before:inset-[-10px]'

  const className = `${baseClasses} ${textColorClass} ${beforeClasses}`

  // href指定時はLink要素
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  // href未指定時はbutton要素
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

// ButtonCase Props
export interface ButtonCaseProps {
  children: ReactNode
  href: string
  current?: boolean
}

/**
 * ButtonCaseコンポーネント
 * 常にLink要素、current=true時はpointer-events-none
 */
export function ButtonCase({ children, href, current }: ButtonCaseProps) {
  // 共通クラス
  const baseClasses =
    'relative inline-block w-fit max-w-full px-10 py-[15px] text-base font-medium no-underline text-center md:w-full md:px-[30px] md:py-[10px] md:text-sm transition-all duration-100'

  // current状態のクラス
  const textColorClass = current ? 'text-on-fill pointer-events-none' : 'text-primary'

  // before疑似要素のクラス
  const beforeClasses = current
    ? 'before:absolute before:inset-0 before:bg-primary before:border before:border-transparent before:rounded-full before:transition-all before:duration-100 before:-z-10'
    : 'before:absolute before:inset-0 before:bg-white before:border before:border-primary before:rounded-full before:transition-all before:duration-100 before:-z-10 hover:before:bg-tertiary active:before:bg-tertiary'

  const className = `${baseClasses} ${textColorClass} ${beforeClasses}`

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

// ButtonGroup Props
export interface ButtonGroupProps {
  children: ReactNode
  type?: string
}

/**
 * ButtonGroupコンポーネント
 * flexレイアウトで子要素を配置、type='case'時はSPで縦並び
 */
export function ButtonGroup({ children, type }: ButtonGroupProps) {
  const baseClasses = 'flex flex-wrap gap-5'
  const caseClasses = type === 'case' ? 'mb-20 gap-[10px] md:flex-col' : ''
  const className = `${baseClasses} ${caseClasses}`

  return <div className={className}>{children}</div>
}
