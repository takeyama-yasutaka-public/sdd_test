/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import FooterWrapper from '@/components/layout/Footer/FooterWrapper'
import FooterNav from '@/components/layout/Footer/FooterNav'
import Image from 'next/image'
//画像
import logo from '@/images/web-corporation/footer_logo.png'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Footer() {
  //コンポーネントの出力
  return (
    <FooterWrapper>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <Image src={logo} alt="logo" />
              <p>WEB CORPORATION</p>
            </div>
          </div>

          <hr className={styles.line} />

          <FooterNav />

          <div className={styles.copyright}>
            <p>© 2024 WEB CORPORATION Company.</p>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  )
}
