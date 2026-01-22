/**
 * CardTop
 * 仕様書: docs/ui/components/ui-kit/content/CardTop/specification.md
 */

'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ClassLabelGroup, ClassLabel } from '../ClassLabel/ClassLabel'
import { Category } from '../Card/Card'

// CardTopGroup Props
export interface CardTopGroupProps {
  children: ReactNode
}

/**
 * CardTopGroupコンポーネント
 * トップページ用カードグループ
 */
export function CardTopGroup({ children }: CardTopGroupProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="flex flex-row flex-wrap gap-5 md:flex-col [&>div]:w-[calc((100%-(20px*2))/3)] [&>a]:w-[calc((100%-(20px*2))/3)] md:[&>div]:w-full md:[&>a]:w-full"
    >
      {children}
    </motion.div>
  )
}

// CardTop Props
export interface CardTopProps {
  href: string
  image: StaticImageData | null
  alt: string
  category: Category[]
  text: string
}

/**
 * CardTopコンポーネント
 * トップページ用カード
 */
export function CardTop({ href, image, alt, category, text }: CardTopProps) {
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className="flex flex-col h-full p-5 bg-white rounded-[32px_0px_32px_0px] block border-none no-underline transition-all duration-300 group"
      >
        {image && (
          <div className="w-full rounded-[16px_0px_16px_0px] overflow-hidden imgWrapper">
            <Image
              src={image}
              alt={alt}
              placeholder="blur"
              sizes="(max-width: 767.98px) 100vw, 400px"
              className="aspect-video w-full h-auto group-hover:scale-120 group-active:scale-120 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex flex-col py-5 gap-5 body">
          {category.length > 0 && (
            <ClassLabelGroup>
              {category.map((cat) => (
                <ClassLabel key={cat.id} text={cat.name} />
              ))}
            </ClassLabelGroup>
          )}
          <p className="text-text-body text-xl leading-s group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300">
            {text}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
