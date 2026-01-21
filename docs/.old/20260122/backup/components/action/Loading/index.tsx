//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useEffect, useState } from 'react'
import { useLoadingStore } from '@/lib/zustand'
import { bodyScrollStop, bodyScrollStart } from '@/lib/bodyScroll'
//コンポーネント
import Image from 'next/image'
//画像
import logoLeft from '@/images/web-corporation/loading_logo_left.png'
import logoCenter from '@/images/web-corporation/loading_logo_center.png'
import logoRight from '@/images/web-corporation/loading_logo_right.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Loading() {
  const loadingState = useLoadingStore((state) => state.loadingState)
  const loadingOff = useLoadingStore((state) => state.loadingOff)

  // 画像が全て読み込まれたかどうかを追跡するための状態
  const [imagesLoaded, setImagesLoaded] = useState({
    left: false,
    center: false,
    right: false,
  })
  const [allImagesLoaded, setAllImagesLoaded] = useState(false) // 画像が全てロードされたか
  const [animationStart, setAnimationStart] = useState(false) // アニメーション

  useEffect(() => {
    if (loadingState) {
      const allLoaded = Object.values(imagesLoaded).every((loaded) => loaded)

      if (allLoaded) {
        setAllImagesLoaded(true) // 全ての画像がロードされた
      }

      if (allImagesLoaded) {
        bodyScrollStop()
        setAnimationStart(true) // アニメーションスタート

        setTimeout(() => {
          bodyScrollStart()
        }, 1000)

        setTimeout(() => {
          loadingOff()
        }, 1300)
      }
    }
  }, [imagesLoaded, loadingState, allImagesLoaded, animationStart, loadingOff])

  const handleImageLoad = (image: string) => {
    setImagesLoaded((prevState) => ({
      ...prevState,
      [image]: true,
    }))
  }

  //コンポーネントの出力
  return (
    <>
      {loadingState && (
        <div
          className={styles.loading}
          data-modifier={loadingState ? 'active' : ''}
          data-modifierAnime={animationStart ? 'active' : ''}
        >
          <div className={styles.background}></div>
          <div
            className={styles.logo}
            data-modifier={allImagesLoaded ? 'active' : ''}
          >
            <Image
              src={logoLeft}
              className={styles.logoLeft}
              alt="LogoLeft"
              priority
              onLoad={() => handleImageLoad('left')}
            />
            <Image
              src={logoCenter}
              className={styles.logoCenter}
              alt="LogoCenter"
              priority
              onLoad={() => handleImageLoad('center')}
            />
            <Image
              src={logoRight}
              className={styles.logoRight}
              alt="LogoRight"
              priority
              onLoad={() => handleImageLoad('right')}
            />
          </div>
        </div>
      )}
    </>
  )
}
