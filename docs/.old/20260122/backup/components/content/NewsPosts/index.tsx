/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { formatDate } from '@/lib/formatDate'
//コンポーネント
import Link from 'next/link'

/*********************************
    変数定義
*********************************/

type Props = {
  href: string
  time: string
  title: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function NewsPosts({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return <ul>{children}</ul>
}

export function NewsPostsItem({ href, time, title }: Props) {
  //コンポーネントの出力
  return (
    <li className={styles.newsPostsItem}>
      <Link href={href}>
        <time dateTime={time}>{formatDate(time)}</time>
        <p>{title}</p>
      </Link>
    </li>
  )
}
