/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Content({ children }: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return (
    <main className={styles.content}>
      <div className={styles.inner}>{children}</div>
    </main>
  )
}
