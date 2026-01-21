/**
 * Pager
 * 仕様書: docs/ui/components/ui-features/Pager/specification.md
 */

import { Pager as PagerContainer, PagerItem } from '@/components/ui-kit/navigation/Pager/Pager'

interface PagerProps {
  PER_PAGE: number
  totalCount: number
  path?: string
  id?: number
}

/**
 * Pagerコンポーネント
 * ページネーションロジック統合版
 */
export function Pager({ PER_PAGE, totalCount, path = '/', id = 1 }: PagerProps) {
  // 総ページ数を算出
  const totalPages = Math.ceil(totalCount / PER_PAGE)

  // 1ページのみの場合は非表示
  if (totalPages <= 1) {
    return null
  }

  // ページ番号配列生成
  const pages: (number | 0)[] = []

  // 省略表示: 6ページ以上で...表示
  if (totalPages <= 6) {
    // 6ページ以下の場合は全ページ表示
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    // 6ページ以上の場合
    const current = id

    if (current < 5) {
      // 前半: [1,2,3,4,5,0,n]
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push(0) // dots
      pages.push(totalPages)
    } else if (current > totalPages - 4) {
      // 後半: [1,0,n-4,n-3,n-2,n-1,n]
      pages.push(1)
      pages.push(0) // dots
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // 中央: [1,0,c-1,c,c+1,0,n]
      pages.push(1)
      pages.push(0) // dots
      pages.push(current - 1)
      pages.push(current)
      pages.push(current + 1)
      pages.push(0) // dots
      pages.push(totalPages)
    }
  }

  return (
    <PagerContainer>
      {/* prevボタン（最初のページで非表示） */}
      {id > 1 && (
        <PagerItem
          type="prev"
          href={id === 2 ? path : `${path}?page=${id - 1}`}
        />
      )}

      {/* ページ番号 */}
      {pages.map((page, index) => {
        if (page === 0) {
          return <PagerItem key={`dots-${index}`} type="dots" />
        }

        if (page === id) {
          return <PagerItem key={page} type="current" number={page} />
        }

        return (
          <PagerItem
            key={page}
            type="number"
            href={page === 1 ? path : `${path}?page=${page}`}
            number={page}
          />
        )
      })}

      {/* nextボタン（最後のページで非表示） */}
      {id < totalPages && (
        <PagerItem
          type="next"
          href={`${path}?page=${id + 1}`}
        />
      )}
    </PagerContainer>
  )
}
