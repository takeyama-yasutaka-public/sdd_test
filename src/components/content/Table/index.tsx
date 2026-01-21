/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  modifierDimension: string
  modifierScroll?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Table({
  children,
  modifierDimension,
  modifierScroll,
}: Readonly<{ children: React.ReactNode }> & Props) {
  //コンポーネントの出力
  return (
    <table
      className={styles.table}
      data-modifierDimension={modifierDimension}
      data-modifierScroll={modifierScroll}
    >
      {children}
    </table>
  )
}

export function TableAbout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  //コンポーネントの出力
  return <table className={styles.tableAbout}>{children}</table>
}
