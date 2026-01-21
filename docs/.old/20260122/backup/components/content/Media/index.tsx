//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useRef, useEffect } from 'react'
import { breakpoint } from '@/lib/constants'
import { StaticImageData } from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import lottie, { AnimationItem } from 'lottie-web'
//コンポーネント
import Image from 'next/image'
//Lottie
import Model from '@/images/web-corporation/media_model.json'
//画像
import MediaImage from '@/images/no-image.png'

/*********************************
    変数定義
*********************************/

type Props = {
  image?: StaticImageData
  alt?: string
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function MediaTopService({
  children,
  image = MediaImage,
  alt = 'alt',
}: Readonly<{ children: React.ReactNode }> & Props) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  //コンポーネントの出力
  return (
    <motion.div
      className={styles.mediaTopServiceWrapper}
      ref={ref}
      initial={{ y: '20px', opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className={styles.mediaTopService}>
        <div className={styles.body}>{children}</div>
        <Image
          src={image}
          alt={alt}
          sizes={`(max-width: ${breakpoint.sp}) 100vw, 256px`}
          placeholder="blur"
          style={{ transition: '0.1s' }}
        />
      </div>
    </motion.div>
  )
}

export function MediaService({
  children,
  image = MediaImage,
  alt = 'alt',
}: Readonly<{ children: React.ReactNode }> & Props) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  //コンポーネントの出力
  return (
    <motion.div
      className={styles.mediaServiceWrapper}
      ref={ref}
      initial={{ y: '20px', opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className={styles.mediaService}>
        <div className={styles.body}>{children}</div>
        <Image
          src={image}
          alt={alt}
          sizes={`(max-width: ${breakpoint.sp}) 100vw, 400px`}
          placeholder="blur"
          style={{ transition: '0.1s' }}
        />
      </div>
    </motion.div>
  )
}

export function MediaAboutAndService({
  children,
  image = MediaImage,
  alt = 'alt',
  modifier,
}: Readonly<{ children: React.ReactNode }> & Props) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  // アニメーションを表示する要素の参照
  const animationContainer = useRef<HTMLDivElement | null>(null)
  // Lottieアニメーションのインスタンスを保持するための参照
  const animationInstance = useRef<AnimationItem | null>(null)
  useEffect(() => {
    if (
      modifier === 'model' &&
      animationContainer.current &&
      !animationInstance.current
    ) {
      // アニメーションの初期化（autoplayをfalseに設定して停止状態でロード）
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        animationData: Model,
        renderer: 'svg',
        loop: false,
        autoplay: false,
      })
      // アニメーションが生成されていれば、1フレーム目に停止
      if (animationInstance.current) {
        animationInstance.current.goToAndStop(0, true)
      }
    }

    // inView が true（要素が画面内に入った）ときにアニメーションを再生
    if (inView && animationInstance.current) {
      animationInstance.current.play()
    }
  }, [modifier, inView])

  //コンポーネントの出力
  return (
    <div className={styles.mediaAboutAndService} data-modifier={modifier}>
      <div className={styles.body}>{children}</div>
      {(!modifier || modifier === 'reverse') && (
        <motion.div
          ref={ref}
          initial={{ y: '20px', opacity: 0, filter: 'blur(10px)' }}
          animate={inView ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={image}
            alt={alt}
            sizes={`(max-width: ${breakpoint.sp}) 100vw, 360px`}
            placeholder="blur"
            style={{ transition: '0.1s' }}
          />
        </motion.div>
      )}
      {modifier === 'massage' && (
        <div className={styles.imageWrapper}>
          <motion.div
            ref={ref}
            initial={{ y: '20px', opacity: 0, filter: 'blur(10px)' }}
            animate={inView ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src={image}
              alt={alt}
              sizes={`(max-width: ${breakpoint.sp}) 100vw, 320px`}
              placeholder="blur"
              style={{ transition: '0.1s' }}
            />
          </motion.div>
          <div className={styles.signature}>
            <p className="text-wrapper">代表取締役CEO</p>
            <p className="div">山田 太郎</p>
            <p className="text-wrapper-2">Taro Yamada</p>
          </div>
        </div>
      )}
      {modifier === 'model' && (
        <div className={styles.model} ref={ref}>
          <div ref={animationContainer} />
        </div>
      )}
    </div>
  )
}
