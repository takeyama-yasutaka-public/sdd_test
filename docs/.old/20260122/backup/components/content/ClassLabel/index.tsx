/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type Props = {
  text: string
  modifier?: string
}

type GroupProps = {
  modifier?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function ClassLabel({ text, modifier }: Props) {
  //コンポーネントの出力
  return (
    <span className={styles.classLabel} data-modifier={modifier}>
      {text}
    </span>
  )
}

export function ClassLabelGroup({
  children,
  modifier,
}: Readonly<{ children: React.ReactNode }> & GroupProps) {
  //コンポーネントの出力
  return (
    <div className={styles.classLabelGroup} data-modifier={modifier}>
      {children}
    </div>
  )
}
