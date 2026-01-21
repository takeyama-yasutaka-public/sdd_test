/**
 * Card
 * 仕様書: docs/ui/components/ui-kit/content/Card/specification.md
 */

import Link from 'next/link'
import Image from 'next/image'
import { ClassLabelGroup, ClassLabel } from '../ClassLabel/ClassLabel'

// ImageData型定義
export interface ImageData {
  url: string
  width: number
  height: number
  blurDataURL?: string
}

// Category型定義
export interface Category {
  name: string
  id: string
}

// CardGroup Props
export interface CardGroupProps {
  children: React.ReactNode
}

/**
 * CardGroupコンポーネント
 * 3カラムレイアウト、SP時は1カラム
 */
export function CardGroup({ children }: CardGroupProps) {
  return (
    <div className="flex flex-row flex-wrap gap-10 md:flex-col [&>div]:w-[calc((100%-(40px*2))/3)] [&>a]:w-[calc((100%-(40px*2))/3)] md:[&>div]:w-full md:[&>a]:w-full">
      {children}
    </div>
  )
}

// Card Props
export interface CardProps {
  href: string
  image: ImageData
  alt: string
  category: Category[]
  text: string
}

/**
 * Cardコンポーネント
 * Link要素で実装、Next.js Image使用
 */
export function Card({ href, image, alt, category, text }: CardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col block border-none no-underline transition-all duration-300 group"
    >
      {/* 画像ラッパー */}
      <div className="w-full rounded-[16px_0px_16px_0px] overflow-hidden">
        <Image
          src={image.url}
          alt={alt}
          width={image.width}
          height={image.height}
          placeholder={image.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={image.blurDataURL}
          sizes="(max-width: 767.98px) 100vw, 400px"
          className="aspect-video w-full h-auto group-hover:scale-120 group-active:scale-120 transition-transform duration-300"
        />
      </div>

      {/* 本文 */}
      <div className="flex flex-col py-5 gap-5">
        {/* カテゴリーラベル */}
        {category.length > 0 && (
          <ClassLabelGroup>
            {category.map((cat) => (
              <ClassLabel key={cat.id} text={cat.name} />
            ))}
          </ClassLabelGroup>
        )}

        {/* テキスト */}
        <p className="text-text-body text-xl leading-s group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300">
          {text}
        </p>
      </div>
    </Link>
  )
}
