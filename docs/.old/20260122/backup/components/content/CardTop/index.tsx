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
import Link from 'next/link'
import Image from 'next/image'
import * as Content from '@/components/content/index'

/*********************************
    変数定義
*********************************/

type Category = {
  name: string
  id: string
}

type CardProps = {
  href: string
  image: StaticImageData
  alt: string
  category: Category[]
  text: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function CardTopGroup({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  //コンポーネントの出力
  return (
    <motion.div
      ref={ref}
      className={styles.cardTopGroup}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export function CardTop({ href, image, alt, category, text }: CardProps) {
  const itemVariants = {
    hidden: { y: '10px', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  //コンポーネントの出力
  return (
    <>
      <motion.div variants={itemVariants}>
        <Link href={href} className={styles.cardTop}>
          <div className={styles.imgWrapper}>
            <Image
              src={image}
              alt={alt}
              sizes={`(max-width: ${breakpoint.sp}) 100vw, 400px`}
              placeholder="blur"
              style={{ transition: '0.1s' }}
            />
          </div>
          <div className={styles.body}>
            <Content.ClassLabelGroup>
              {category.map(({ name, id }) => (
                <Content.ClassLabel text={name} key={id} />
              ))}
            </Content.ClassLabelGroup>
            <p>{text}</p>
          </div>
        </Link>
      </motion.div>
    </>
  )
}
