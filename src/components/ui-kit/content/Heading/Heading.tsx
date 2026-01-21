/**
 * Heading
 * 仕様書: docs/ui/components/ui-kit/content/Heading/specification.md
 */

import { ReactNode } from 'react'

// HeadingJpn Props
export interface HeadingJpnProps {
  children: ReactNode
  color?: string
}

/**
 * HeadingJpnコンポーネント
 * 横線とテキストを横並びで表示
 */
export function HeadingJpn({ children, color }: HeadingJpnProps) {
  const lineBgClass = color === 'white' ? 'bg-white' : 'bg-text-body'
  const textColorClass = color === 'white' ? 'text-on-fill' : 'text-text-body'

  return (
    <div className="flex items-center gap-[10px]">
      <div className={`w-[60px] h-[1px] ${lineBgClass}`} />
      <div className={`${textColorClass} text-xxl md:text-xl leading-s font-normal`}>{children}</div>
    </div>
  )
}

// Heading Props
export interface HeadingProps {
  children: ReactNode
  h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  modifier: 'first' | 'second' | 'third'
  color?: string
}

/**
 * Headingコンポーネント
 * h属性に応じてh1-h5要素を出力
 */
export function Heading({ children, h, modifier, color }: HeadingProps) {
  const textColorClass = color === 'white' ? 'text-on-fill' : 'text-text-body'

  // modifier='first'のスタイル
  if (modifier === 'first') {
    const beforeBgClass = color === 'white' ? 'before:bg-white' : 'before:bg-gradient-to-b before:from-[#0078d4] before:to-[#00bfe9]'
    const className = `relative ${textColorClass} text-xxxxl md:text-xxxl leading-s font-normal tracking-m pl-[22px] before:absolute before:top-0 before:left-0 before:w-1 before:h-[45px] md:before:h-[39px] ${beforeBgClass} before:rounded-full`

    const HeadingTag = h
    return <HeadingTag className={className}>{children}</HeadingTag>
  }

  // modifier='second'のスタイル
  if (modifier === 'second') {
    const beforeBgClass = color === 'white' ? 'before:bg-white' : 'before:bg-text-body'
    const className = `relative ${textColorClass} text-xxxl md:text-xxl leading-s font-normal tracking-m pl-5 before:absolute before:top-0 before:left-0 before:w-[1px] before:h-[39px] md:before:h-[34px] ${beforeBgClass}`

    const HeadingTag = h
    return <HeadingTag className={className}>{children}</HeadingTag>
  }

  // modifier='third'のスタイル
  const className = `${textColorClass} text-xxl md:text-xl leading-s font-normal tracking-m`
  const HeadingTag = h
  return <HeadingTag className={className}>{children}</HeadingTag>
}
