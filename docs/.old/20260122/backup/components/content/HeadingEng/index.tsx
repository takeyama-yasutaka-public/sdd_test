//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useInView } from 'react-intersection-observer'

/*********************************
    変数定義
*********************************/

type TopEngProps = {
  english: string
  color?: string
}

type EngProps = {
  color?: string
}

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export function HeadingTopEng({ english, color }: TopEngProps) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  //コンポーネントの出力
  return (
    <>
      <h2
        className={styles.headingTopEng}
        data-modifierView={inView ? 'active' : ''}
        data-modifierColor={color}
        ref={ref}
      >
        {english.split('').map((char, index) => (
          <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </h2>
    </>
  )
}

export function HeadingEng({
  children,
  color,
}: Readonly<{ children: React.ReactNode }> & EngProps) {
  const { ref, inView } = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  //コンポーネントの出力
  return (
    <>
      <h2
        className={styles.headingEng}
        data-modifierView={inView ? 'active' : ''}
        data-modifierColor={color}
        ref={ref}
      >
        {children}
      </h2>
    </>
  )
}
