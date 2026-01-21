/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { globalNavi, ContactNavi } from '@/lib/constants'
//コンポーネント
import DropdownItem from '@/components/layout/Header/Dropdown/DropdownItem'
import Link from 'next/link'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Dropdown() {
  //コンポーネントの出力
  return (
    <div className={styles.wrapper}>
      <ul className={styles.dropdown}>
        {globalNavi.items.map((item, index) => {
          return (
            <DropdownItem
              key={item.id}
              path={item.path}
              english={item.english}
              japanese={item.japanese}
            />
          )
        })}
      </ul>
      <Link className={styles.contact} href={ContactNavi.path}>
        <span>{ContactNavi.english}</span>
        <span>{ContactNavi.japanese}</span>
      </Link>
    </div>
  )
}
