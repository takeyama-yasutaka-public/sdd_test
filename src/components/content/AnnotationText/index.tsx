/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function AnnotationText({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return (
    <blockquote className={styles.annotationText}>
      <p>{children}</p>
    </blockquote>
  )
}
