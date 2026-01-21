/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'

/*********************************
    変数定義
*********************************/

type JpnProps = {
  color?: string
}

type Props = {
  h: string
  modifier: string
  color?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function HeadingJpn({
  children,
  color,
}: Readonly<{ children: React.ReactNode }> & JpnProps) {
  //コンポーネントの出力
  return (
    <>
      <div className={styles.japaniseWrapper} data-modifier={color}>
        <span className={styles.line}></span>
        <p className={styles.japanise}>{children}</p>
      </div>
    </>
  )
}

export function Heading({
  children,
  h,
  modifier,
  color,
}: Readonly<{ children: React.ReactNode }> & Props) {
  //コンポーネントの出力
  return (
    <>
      {h === 'h1' && (
        <h1
          className={styles.heading}
          data-modifier={modifier}
          data-modifier-color={color}
        >
          {children}
        </h1>
      )}
      {h === 'h2' && (
        <h2
          className={styles.heading}
          data-modifier={modifier}
          data-modifier-color={color}
        >
          {children}
        </h2>
      )}
      {h === 'h3' && (
        <h3
          className={styles.heading}
          data-modifier={modifier}
          data-modifier-color={color}
        >
          {children}
        </h3>
      )}
      {h === 'h4' && (
        <h4
          className={styles.heading}
          data-modifier={modifier}
          data-modifier-color={color}
        >
          {children}
        </h4>
      )}
      {h === 'h5' && (
        <h5
          className={styles.heading}
          data-modifier={modifier}
          data-modifier-color={color}
        >
          {children}
        </h5>
      )}
    </>
  )
}
