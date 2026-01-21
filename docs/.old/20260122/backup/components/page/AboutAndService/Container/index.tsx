/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import * as PageAboutAndService from '@/components/page/AboutAndService/index'

/*********************************
    変数定義
*********************************/

type Props = {
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Container({
  children,
  modifier,
}: Readonly<{ children: React.ReactNode }> & Props) {
  //コンポーネントの出力
  return (
    <div className={styles.container} data-modifier={modifier}>
      {modifier === 'mission-and-vision' && <PageAboutAndService.ParallaxBg />}

      {modifier === 'massage' && (
        <div className={styles.massageBg}>
          <div className={styles.backgroundInner}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
          </div>
        </div>
      )}

      {modifier === 'business-model' && (
        <div className={styles.businessModelBg}>
          <div className={styles.backgroundInner}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.bottombox}></span>
          </div>
        </div>
      )}

      <div className={styles.inner}>{children}</div>
    </div>
  )
}
