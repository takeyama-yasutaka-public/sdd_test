/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { globalNavi, ContactNavi } from '@/lib/constants'
//コンポーネント
import Link from 'next/link'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function FooterNav() {
  //コンポーネントの出力
  return (
    <nav className={styles.footerNav}>
      <ul>
        {globalNavi.items.map((item, index) => {
          return (
            <li key={item.id}>
              <Link href={item.path}>{item.japanese}</Link>
            </li>
          )
        })}
        <li>
          <Link href={ContactNavi.path}>{ContactNavi.japanese}</Link>
        </li>
        <li>
          <Link href="/privacy">個人情報保護方針</Link>
        </li>
      </ul>
    </nav>
  )
}
