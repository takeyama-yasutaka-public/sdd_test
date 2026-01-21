/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { breakpoint } from '@/lib/constants'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
import * as Content from '@/components/content/index'

/*********************************
    変数定義
*********************************/

type ImageData = {
  url: string
  width: number
  height: number
  blurDataURL: string
}

type Category = {
  name: string
  id: string
}

type CardProps = {
  href: string
  image: ImageData
  alt: string
  category: Category[]
  text: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function CardGroup({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return <div className={styles.cardGroup}>{children}</div>
}

export function Card({ href, image, alt, category, text }: CardProps) {
  //コンポーネントの出力
  return (
    <>
      <Link href={href} className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image
            src={image.url}
            alt={alt}
            width={image.width}
            height={image.height}
            sizes={`(max-width: ${breakpoint.sp}) 100vw, 400px`}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
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
    </>
  )
}
