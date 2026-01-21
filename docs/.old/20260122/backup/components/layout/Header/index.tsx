//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useDrawerStore } from '@/lib/zustand'
//コンポーネント
import Logo from '@/components/layout/Header/Logo'
import Dropdown from '@/components/layout/Header/Dropdown'
import ContactSpIcon from '@/components/layout/Header/ContactSpIcon'
import Hamburger from '@/components/layout/Header/Hamburger'
import Drawer from '@/components/layout/Header/Drawer'
import DrawerOverlay from '@/components/layout/Header/DrawerOverlay'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Header() {
  const drawerState = useDrawerStore((state) => state.drawerState)

  //コンポーネントの出力
  return (
    <>
      <header
        className={styles.header}
        data-modifier={drawerState ? 'active' : ''}
      >
        <div className={styles.inner}>
          <Logo />

          <nav className={styles.navPc}>
            <Dropdown />
          </nav>

          <div className={styles.iconSP}>
            <ContactSpIcon />
            <Hamburger />
          </div>

          <nav className={styles.navSP}>
            <Drawer />
          </nav>
        </div>
      </header>

      <DrawerOverlay />
    </>
  )
}
