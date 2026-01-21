/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//コンポーネント
import Link from 'next/link'

/*********************************
    変数定義
*********************************/

type Props = {
  href?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  modifierColor?: string
}

type CaseProps = {
  href: string
  current?: boolean
}

type GroupProps = {
  type?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function Button({
  children,
  href,
  type,
  onClick,
  modifierColor,
}: Readonly<{ children: React.ReactNode }> & Props) {
  //コンポーネントの出力
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={styles.button}
          data-modifierColor={modifierColor}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={styles.button}
          data-modifierColor={modifierColor}
        >
          {children}
        </button>
      )}
    </>
  )
}

export function ButtonCase({
  children,
  href,
  current,
}: Readonly<{ children: React.ReactNode }> & CaseProps) {
  //コンポーネントの出力
  return (
    <>
      <Link
        href={href}
        className={styles.buttonCase}
        data-modifier={current ? 'current' : ''}
      >
        {children}
      </Link>
    </>
  )
}

export function ButtonGroup({
  children,
  type,
}: Readonly<{ children: React.ReactNode }> & GroupProps) {
  //コンポーネントの出力
  return (
    <div className={styles.buttonGroup} data-modifierType={type}>
      {children}
    </div>
  )
}
