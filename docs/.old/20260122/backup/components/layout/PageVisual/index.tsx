//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useInView } from 'react-intersection-observer'
//コンポーネント
import Image from 'next/image'
//画像
import about from '@/images/web-corporation/page-visual_image_about.png'
import service from '@/images/web-corporation/page-visual_image_service.png'
import caseimg from '@/images/web-corporation/page-visual_image_case.png'
import news from '@/images/web-corporation/page-visual_image_news.png'
import contact from '@/images/web-corporation/page-visual_image_contact.png'

/*********************************
    変数定義
*********************************/

type Props = {
  english: string
  japanese: string
  image: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function PageVisual({ english, japanese, image }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  //コンポーネントの出力
  return (
    <div className={styles.pageVisual}>
      <div className={styles.imageWrapper}>
        {image === 'about' && (
          <Image
            className={styles.image}
            src={about}
            alt={english}
            data-modifier={image}
            placeholder="blur"
            style={{ transition: '0.1s' }}
            priority
          />
        )}
        {image === 'service' && (
          <Image
            className={styles.image}
            src={service}
            alt={english}
            data-modifier={image}
            placeholder="blur"
            style={{ transition: '0.1s' }}
            priority
          />
        )}
        {image === 'case' && (
          <Image
            className={styles.image}
            src={caseimg}
            alt={english}
            data-modifier={image}
            placeholder="blur"
            style={{ transition: '0.1s' }}
            priority
          />
        )}
        {image === 'news' && (
          <Image
            className={styles.image}
            src={news}
            alt={english}
            data-modifier={image}
            placeholder="blur"
            style={{ transition: '0.1s' }}
            priority
          />
        )}
        {image === 'contact' && (
          <Image
            className={styles.image}
            src={contact}
            alt={english}
            data-modifier={image}
            placeholder="blur"
            style={{ transition: '0.1s' }}
            priority
          />
        )}
      </div>
      <div className={styles.title}>
        <h1
          className={styles.english}
          data-modifier={inView ? 'active' : ''}
          ref={ref}
        >
          {english.split('').map((char, index) => (
            <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h1>
        <div className={styles.japaniseWrapper}>
          <span className={styles.line}></span>
          <p className={styles.japanise}>{japanese}</p>
        </div>
      </div>
    </div>
  )
}
