/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  modifier: string
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
    <div className={styles.containerBg} data-modifier={modifier}>
      <div className={styles.container}>
        {modifier === 'service' && (
          <div className={styles.background}>
            <div className={styles.backgroundInner}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
            </div>
          </div>
        )}

        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  )
}
