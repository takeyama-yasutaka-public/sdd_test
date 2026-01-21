//クライアントコンポーネントへ変更
'use client'

/*********************************
      インポート
  *********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useLoadingStore } from '@/lib/zustand'
import { motion } from 'framer-motion'
//コンポーネント
import * as PageHome from '@/components/page/home/index'

/*********************************
      コンポーネントデータのエクスポート
  *********************************/

export default function MainVisual() {
  // ローディングステート
  const loadingState = useLoadingStore((state) => state.loadingState)
  // ディレイの変数
  const englishDelay = !loadingState ? 0 : 0.8
  const japaniseDelay = !loadingState ? 0.4 : 1.2

  //コンポーネントの出力
  return (
    <div className={styles.mainvisual}>
      <motion.div
        initial={{ x: '-5vw', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: englishDelay }}
      >
        {' '}
        <p className={styles.english}>
          <span>DIGITAL INNOVATION</span>
          <br />
          <span>REAL IMPACT</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ x: '-5vw', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: japaniseDelay }}
      >
        {' '}
        <p className={styles.japanise}>
          デジタルの革新で
          <br />
          現実にインパクトを
        </p>
      </motion.div>

      <PageHome.Slideswhow />

      <div className={styles.arrow}>
        <p>SCROLL</p>
        <span></span>
      </div>

      <div className={styles.bottom} />
    </div>
  )
}
