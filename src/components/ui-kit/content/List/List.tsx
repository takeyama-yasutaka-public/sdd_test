/**
 * List
 * 仕様書: docs/ui/components/ui-kit/content/List/specification.md
 */

import { ReactNode } from 'react'

// BulletList Props
export interface BulletListProps {
  children: ReactNode
}

/**
 * BulletListコンポーネント
 * 箇条書きリスト
 */
export function BulletList({ children }: BulletListProps) {
  return <ul className="flex flex-col gap-[10px] [&>li]:relative [&>li]:pl-[18px] [&>li]:leading-s [&>li]:before:absolute [&>li]:before:top-[-4px] [&>li]:before:left-1 [&>li]:before:w-1 [&>li]:before:content-['●']">{children}</ul>
}

// OrderList Props
export interface OrderListProps {
  children: ReactNode
}

/**
 * OrderListコンポーネント
 * 番号付きリスト
 */
export function OrderList({ children }: OrderListProps) {
  return (
    <ol className="flex flex-col gap-[10px] [counter-reset:order-list] [&>li]:relative [&>li]:pl-[19px] [&>li]:leading-s [&>li]:before:[counter-increment:order-list] [&>li]:before:content-[counter(order-list)'.'] [&>li]:before:absolute [&>li]:before:top-0 [&>li]:before:left-0 [&>li]:before:leading-s">
      {children}
    </ol>
  )
}
