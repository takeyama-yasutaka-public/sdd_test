/**
 * Media
 * 仕様書: docs/ui/components/ui-kit/content/Media/specification.md
 */

'use client'

import { ReactNode, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import lottie from 'lottie-web'
import { Category } from '../Card/Card'

// MediaTopService Props
export interface MediaTopServiceProps {
  children: ReactNode
  image?: StaticImageData
  alt?: string
}

/**
 * MediaTopServiceコンポーネント
 * トップページサービス用メディア
 */
export function MediaTopService({ children, image, alt }: MediaTopServiceProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  return (
    <div className="first:pt-0 last:pb-0 last:border-b-0 flex items-center py-5 gap-[min(80px,80vw)] border-b border-grey-300 md:flex-col md:py-10 md:gap-5">
      {image && (
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={image}
            alt={alt || ''}
            className="w-[min(280px,280vw)] aspect-video rounded-[16px_0px_16px_0px] md:w-full"
          />
        </motion.div>
      )}
      <div className="flex flex-col gap-5 flex-1 body">
        {children}
      </div>
    </div>
  )
}

// MediaService Props
export interface MediaServiceProps {
  children: ReactNode
  image?: StaticImageData
  alt?: string
}

/**
 * MediaServiceコンポーネント
 * サービスページ用メディア
 */
export function MediaService({ children, image, alt }: MediaServiceProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  return (
    <div className="first:pt-0 last:pb-0 last:border-b-0 flex items-center py-20 gap-[min(80px,80vw)] border-b border-grey-300 md:flex-col md:py-20 md:gap-5">
      {image && (
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={image}
            alt={alt || ''}
            className="w-[min(360px,360vw)] aspect-square rounded-[16px_0px_16px_0px] md:w-full"
          />
        </motion.div>
      )}
      <div className="flex flex-col gap-5 flex-1 body">
        {children}
      </div>
    </div>
  )
}

// MediaAboutAndService Props
export interface MediaAboutAndServiceProps {
  children: ReactNode
  image?: StaticImageData
  alt?: string
  modifier?: string
}

/**
 * MediaAboutAndServiceコンポーネント
 * ABOUT/SERVICEページ用メディア
 */
export function MediaAboutAndService({ children, image, alt, modifier }: MediaAboutAndServiceProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })
  const modelRef = useRef<HTMLDivElement>(null)
  const lottieInstanceRef = useRef<ReturnType<typeof lottie.loadAnimation> | null>(null)

  // modifier='model'時のlottieアニメーション
  useEffect(() => {
    if (modifier === 'model' && modelRef.current && inView) {
      if (lottieInstanceRef.current) {
        lottieInstanceRef.current.goToAndStop(0, true)
        lottieInstanceRef.current.play()
      } else {
        // lottieアニメーションの初期化（実際のJSONパスは仕様に基づいて設定）
        lottieInstanceRef.current = lottie.loadAnimation({
          container: modelRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/animations/model.json',
        })
        lottieInstanceRef.current.play()
      }
    }
  }, [modifier, inView])

  const flexClass =
    modifier === 'reverse'
      ? 'flex-row-reverse'
      : modifier === 'massage' || modifier === 'model'
        ? 'flex-col'
        : 'flex'

  return (
    <div className={flexClass}>
      {modifier === 'massage' ? (
        <div className="relative imageWrapper">
          {image && (
            <motion.div
              ref={ref}
              initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
              animate={inView ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { y: 20, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Image
                src={image}
                alt={alt || ''}
                sizes="(max-width: 767.98px) 100vw, 320px"
                className="w-full h-auto"
              />
            </motion.div>
          )}
          <p className="signature">代表取締役CEO、山田 太郎、Taro Yamada</p>
        </div>
      ) : modifier === 'model' ? (
        <div ref={modelRef} className="model" />
      ) : (
        image && (
          <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
            animate={inView ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { y: 20, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src={image}
              alt={alt || ''}
              sizes="(max-width: 767.98px) 100vw, 360px"
              className="w-full h-auto"
            />
          </motion.div>
        )
      )}
      <div className="flex flex-col gap-5 body">{children}</div>
    </div>
  )
}
