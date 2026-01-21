//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useDrawerStore } from '@/lib/zustand'
import { ContactNavi } from '@/lib/constants'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
//画像
import mail from '@/images/web-corporation/header_meil.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Hamburger() {
  const drawerState = useDrawerStore((state) => state.drawerState)

  //コンポーネントの出力
  return (
    <Link
      href={ContactNavi.path}
      className={styles.contactSpIcon}
      data-modifier={drawerState ? 'active' : ''}
    >
      <Image src={mail} alt={ContactNavi.english} priority />
    </Link>
  )
}
