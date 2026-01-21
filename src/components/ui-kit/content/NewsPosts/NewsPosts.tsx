/**
 * NewsPosts
 * 仕様書: docs/ui/components/ui-kit/content/NewsPosts/specification.md
 */

import Link from 'next/link'
import { formatDate } from '@/features/utils/formatDate/formatDate'

// NewsPosts Props
export interface NewsPostsProps {
  children: React.ReactNode
}

/**
 * NewsPostsコンポーネント
 * ニュース一覧コンテナ
 */
export function NewsPosts({ children }: NewsPostsProps) {
  return <ul className="flex flex-col">{children}</ul>
}

// NewsPostsItem Props
export interface NewsPostsItemProps {
  href: string
  time: string
  title: string
}

/**
 * NewsPostsItemコンポーネント
 * ニュース一覧項目
 */
export function NewsPostsItem({ href, time, title }: NewsPostsItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-col py-5 border-b border-grey-300 text-menu-link-normal no-underline leading-s gap-[10px] transition-all duration-300 hover:pl-10 active:pl-10"
      >
        <time dateTime={time} className="text-sm">
          {formatDate(time)}
        </time>
        <p className="relative pl-5 before:absolute before:top-0 before:left-0 before:w-[1px] before:h-[22px] before:bg-primary">
          {title}
        </p>
      </Link>
    </li>
  )
}
