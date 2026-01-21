//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { breakpoint } from '@/lib/constants'
import { StaticImageData } from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
//コンポーネント
import Image from 'next/image'

/*********************************
    変数定義
*********************************/

type Props = {
  image: StaticImageData
  alt: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function MediaImage({ image, alt }: Props) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  //コンポーネントの出力
  return (
    <motion.div
      className={styles.wrapper}
      ref={ref}
      initial={{ y: '20px', opacity: 0, filter: 'blur(10px)' }}
      animate={inView ? { y: 0, opacity: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Image
        className={styles.img}
        src={image}
        alt={alt}
        sizes={`(max-width: ${breakpoint.sp}) 100vw, 560px`}
        placeholder="blur"
        style={{ transition: '0.1s' }}
      />
    </motion.div>
  )
}
