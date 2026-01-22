/**
 * MediaImage
 * 仕様書: docs/ui/components/ui-features/home/MediaImage/specification.md
 */

'use client'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface MediaImageProps {
  image: StaticImageData | null
  alt: string
}

/**
 * MediaImageコンポーネント
 * トップページ用メディア画像
 */
export function MediaImage({ image, alt }: MediaImageProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  // imageがnullまたはundefinedの場合は何もレンダリングしない
  if (!image) {
    return null
  }

  return (
    <div className="wrapper">
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
        animate={inView ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { y: 20, opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          sizes="(max-width: 767.98px) 100vw, 560px"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  )
}
