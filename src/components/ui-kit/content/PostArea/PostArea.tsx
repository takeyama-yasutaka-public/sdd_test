/**
 * PostArea
 * 仕様書: docs/ui/components/ui-kit/content/PostArea/specification.md
 */

import { ReactNode } from 'react'

interface PostAreaProps {
  children: ReactNode
}

/**
 * PostAreaコンポーネント
 * 記事コンテンツ用のスタイルコンテナ
 */
export function PostArea({ children }: PostAreaProps) {
  return (
    <div className="flex flex-col gap-[20vw] [&>h2]:relative [&>h2]:text-text-body [&>h2]:text-xxxl [&>h2]:md:text-xxl [&>h2]:leading-s [&>h2]:font-normal [&>h2]:tracking-m [&>h2]:pl-5 [&>h2]:mt-20 [&>h2:first-child]:mt-0 [&>h2]:before:absolute [&>h2]:before:top-0 [&>h2]:before:left-0 [&>h2]:before:w-[1px] [&>h2]:before:h-[39px] [&>h2]:md:before:h-[34px] [&>h2]:before:bg-text-body [&>h3]:text-text-body [&>h3]:text-xxl [&>h3]:md:text-xl [&>h3]:leading-s [&>h3]:font-normal [&>h3]:tracking-m [&>h3]:mt-10 [&>h3:first-child]:mt-0 [&>blockquote]:flex [&>blockquote]:gap-4 [&>blockquote>p]:p-[10px] [&>blockquote>p]:italic [&>blockquote]:before:block [&>blockquote]:before:w-1 [&>blockquote]:before:h-auto [&>blockquote]:before:bg-grey-100 [&>hr]:w-full [&>hr]:border-border-divider [&>table]:inline-block [&>table]:border-spacing-0 [&>table]:border-separate [&>table>tr:first-child>*]:border-t [&>table>tr:first-child>*]:border-border-field [&>table>th]:p-[10px] [&>table>th]:border-r [&>table>th]:border-b [&>table>th]:border-border-field [&>table>th]:bg-brand-main-tertiary [&>table>th]:leading-s [&>table>th]:font-normal [&>table>th]:align-middle [&>table>th:first-child]:border-l [&>table>th:first-child]:border-border-field [&>table>td]:p-[10px] [&>table>td]:border-r [&>table>td]:border-b [&>table>td]:border-border-field [&>table>td]:leading-s [&>table>td]:align-middle [&>table>td:first-child]:border-l [&>table>td:first-child]:border-border-field [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-[10px] [&>ul>li]:relative [&>ul>li]:pl-[18px] [&>ul>li]:leading-s [&>ul>li]:before:absolute [&>ul>li]:before:top-[-4px] [&>ul>li]:before:left-1 [&>ul>li]:before:w-1 [&>ul>li]:before:content-['●'] [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-[10px] [&>ol]:[counter-reset:order-list] [&>ol>li]:relative [&>ol>li]:pl-[19px] [&>ol>li]:leading-s [&>ol>li]:before:[counter-increment:order-list] [&>ol>li]:before:content-[counter(order-list)'.'] [&>ol>li]:before:absolute [&>ol>li]:before:top-0 [&>ol>li]:before:left-0 [&>ol>li]:before:leading-s">
      {children}
    </div>
  )
}
