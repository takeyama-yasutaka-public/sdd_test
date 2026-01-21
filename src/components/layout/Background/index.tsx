/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  home?: boolean
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Background({ home }: Props) {
  //コンポーネントの出力
  return (
    <div className={styles.background}>
      <div className={styles.inner}>
        <span
          className={styles.topbox}
          data-modifier={home ? 'hide' : ''}
        ></span>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span
          className={styles.bottombox}
          data-modifier={home ? 'hide' : ''}
        ></span>
      </div>
    </div>
  )
}
