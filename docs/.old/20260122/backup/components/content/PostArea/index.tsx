/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function PostArea({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return <div className={styles.postArea}>{children}</div>
}
