/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Link from 'next/link'
import Image from 'next/image'
//画像
import bg from '@/images/web-corporation/cta_bg.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function CtaArea() {
  //コンポーネントの出力
  return (
    <div className={styles.ctaArea}>
      <div className={styles.innerFerst}>
        <div className={styles.heading}>
          <div className={styles.englishWrapper}>
            <p className={styles.english}>CONTACT</p>
          </div>
          <div className={styles.japaniseWrapper}>
            <span className={styles.line}></span>
            <p className={styles.japanise}>お問い合わせ</p>
          </div>
        </div>
        <p className={styles.text}>
          サービスに関するお問い合わせなどはこちらよりお気軽にご連絡ください。
        </p>
      </div>

      <div className={styles.innerSecond}>
        <Image
          className={styles.image}
          alt="CTA画像"
          src={bg}
          placeholder="blur"
          style={{ transition: '0.1s' }}
        />
        <span className={styles.gradient}></span>
        <div className={styles.buttonWrapper}>
          <Link href="/contact" className={styles.button}>
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  )
}
