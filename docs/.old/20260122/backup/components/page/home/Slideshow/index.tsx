//クライアントコンポーネントへ変更
'use client'

/*********************************
      インポート
  *********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useState, useEffect, useRef } from 'react'
//コンポーネント
import Image from 'next/image'
//画像
import mv1 from '@/images/web-corporation/mainvisual_img_1.png'
import mv2 from '@/images/web-corporation/mainvisual_img_2.png'
import mv3 from '@/images/web-corporation/mainvisual_img_3.png'

/*********************************
      コンポーネントデータのエクスポート
  *********************************/

export default function Slideswhow() {
  // コンポーネントを再マウントするためのキー
  const [componentKey, setComponentKey] = useState(0)
  // スライドショーのアニメーション
  const slideshowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slideshow = slideshowRef.current
    let wrappers = Array.from(slideshow!.children) as HTMLElement[]
    let currentIndex = 0
    let animationTimeout: string | number | NodeJS.Timeout | undefined

    // 初期状態
    function startPosition() {
      const index = wrappers[currentIndex]
      index.style.transition = 'none'
      index.classList.add(styles.active)
      setTimeout(() => {
        index.style.removeProperty('transition')
      }, 1000)
    }

    // 画像の位置をリセット
    function resetPosition() {
      wrappers.forEach((wrapper) => {
        wrapper.style.transition = 'none'
        wrapper.classList.remove(styles.active)
        setTimeout(() => {
          wrapper.style.removeProperty('transition')
        }, 1000)
      })
    }

    // 画像のアニメーション
    function animateImages(skipReset = false) {
      if (!skipReset) resetPosition()

      wrappers[currentIndex].classList.add(styles.active)

      const nextIndex = (currentIndex + 1) % wrappers.length
      const nextNextIndex = (currentIndex + 2) % wrappers.length

      wrappers[currentIndex].style.zIndex = '1'
      wrappers[nextIndex].style.zIndex = '2'
      wrappers[nextNextIndex].style.zIndex = '-1'

      currentIndex = nextIndex

      setTimeout(() => {
        wrappers[currentIndex].classList.remove(styles.active)
        wrappers[nextIndex].classList.add(styles.active)
        wrappers[nextNextIndex].classList.remove(styles.active)
      }, 2000)

      animationTimeout = setTimeout(() => animateImages(false), 4000)
    }

    // アニメーションの開始
    startPosition()
    setTimeout(() => {
      animateImages(true)
    }, 2000)

    // コンポーネントのアンマウント時の処理
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setComponentKey((prevKey) => prevKey + 1)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // クリーンアップ処理
    return () => {
      resetPosition()
      clearTimeout(animationTimeout)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [componentKey])

  //コンポーネントの出力
  return (
    <div className={styles.slideshow} key={componentKey}>
      <div className={styles.slideshowInner} ref={slideshowRef}>
        <div className={styles.slideshowImageWrapper}>
          <Image
            src={mv1}
            className={styles.slideshowImage}
            alt="MVイメージ1"
            priority
          />
        </div>
        <div className={styles.slideshowImageWrapper}>
          <Image
            src={mv2}
            className={styles.slideshowImage}
            alt="MVイメージ2"
          />
        </div>
        <div className={styles.slideshowImageWrapper}>
          <Image
            src={mv3}
            className={styles.slideshowImage}
            alt="MVイメージ3"
          />
        </div>
      </div>
    </div>
  )
}
