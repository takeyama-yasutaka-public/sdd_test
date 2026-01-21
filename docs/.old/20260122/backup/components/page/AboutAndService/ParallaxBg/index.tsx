//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { breakpoint } from '@/lib/constants'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
//コンポーネント
import Image from 'next/image'
//画像
import MmissionAndVisionBg from '@/images/web-corporation/about_missionAndVision_bg.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function ParallaxBg() {
  const parallaxBgRef = useRef<HTMLDivElement>(null)
  const imgWrapperRef = useRef<HTMLDivElement>(null)
  const [widthValue, setWidthValue] = useState(0)

  //スクロール量を取得
  const { scrollYProgress } = useScroll({
    target: parallaxBgRef,
    offset: ['start end', 'end end'],
  })

  // 横幅を取得してvwを引く処理
  const calculateWidth = () => {
    if (imgWrapperRef.current) {
      const imgWrapperWidth = imgWrapperRef.current.offsetWidth
      const viewportWidth = window.innerWidth
      let calculatedWidth = imgWrapperWidth - viewportWidth

      // SP時には移動量を半分に
      if (viewportWidth <= parseFloat(breakpoint.sp)) {
        calculatedWidth = calculatedWidth / 3
      }

      setWidthValue(calculatedWidth)
    }
  }

  // 初期ロード時とリサイズ時に幅を再計算
  useEffect(() => {
    calculateWidth()
    window.addEventListener('resize', calculateWidth)
    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  // スクロール量に応じて画像を移動
  const x = useTransform(scrollYProgress, [0, 1], [0, widthValue * -1])

  // useSpringで遅延を追加
  const smoothX = useSpring(x, { damping: 20, stiffness: 100 })

  //コンポーネントの出力
  return (
    <div className={styles.parallaxBg} ref={parallaxBgRef}>
      <div className={styles.sticky}>
        <motion.div
          className={styles.motion}
          ref={imgWrapperRef}
          style={{ x: smoothX }}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            className={styles.img}
            src={MmissionAndVisionBg}
            alt="ミッションとビジョンの背景画像"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}
