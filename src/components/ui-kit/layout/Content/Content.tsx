/**
 * Content
 * 仕様書: docs/ui/components/ui-kit/layout/Content/specification.md
 */

import { ReactNode } from 'react'

// Content Props
export interface ContentProps {
  children: ReactNode
}

/**
 * Contentコンポーネント
 * メインコンテンツエリア
 */
export function Content({ children }: ContentProps) {
  return <main>{children}</main>
}

// ContentHeader Props
export interface ContentHeaderProps {
  children: ReactNode
}

/**
 * ContentHeaderコンポーネント
 * コンテンツヘッダーセクション
 */
export function ContentHeader({ children }: ContentHeaderProps) {
  return <div>{children}</div>
}

// ContentHeaderTop Props
export interface ContentHeaderTopProps {
  children: ReactNode
}

/**
 * ContentHeaderTopコンポーネント
 * コンテンツヘッダートップセクション
 */
export function ContentHeaderTop({ children }: ContentHeaderTopProps) {
  return <div>{children}</div>
}

// ContentBody Props
export interface ContentBodyProps {
  children: ReactNode
}

/**
 * ContentBodyコンポーネント
 * コンテンツ本文セクション
 */
export function ContentBody({ children }: ContentBodyProps) {
  return <div>{children}</div>
}

// ContentFooter Props
export interface ContentFooterProps {
  children: ReactNode
}

/**
 * ContentFooterコンポーネント
 * コンテンツフッターセクション
 */
export function ContentFooter({ children }: ContentFooterProps) {
  return <div>{children}</div>
}
