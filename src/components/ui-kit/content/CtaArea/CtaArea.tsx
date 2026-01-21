/**
 * CtaArea
 * 仕様書: docs/ui/components/ui-kit/content/CtaArea/specification.md
 */

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../Button/Button'

/**
 * CtaAreaコンポーネント
 * 固定コンテンツ表示
 */
export function CtaArea() {
  return (
    <div className="flex items-center w-full bg-brand-sub-primary md:flex-col">
      <div className="flex flex-col justify-center w-[580vw] h-full px-10 pl-[max(calc(580vw-460px),120vw)] gap-5 md:w-full md:p-10">
        <div className="flex flex-col w-full heading">
          <div className="font-secondary text-on-fill text-[min(64vw,64px)] md:text-[min(48vw,48px)] leading-s font-light english">
            CONTACT
          </div>
          <div className="flex items-center gap-[10px] japaniseWrapper">
            <div className="w-[60px] h-[1px] bg-white line" />
            <div className="text-on-fill text-[min(24vw,24px)] md:text-[min(20vw,20px)] leading-s font-normal japanise">
              お問い合わせ
            </div>
          </div>
          <p className="text-on-fill text">お気軽にお問い合わせください</p>
        </div>
      </div>
      <div className="relative flex-1 h-[300px] overflow-hidden md:flex-none md:w-full md:h-[min(300vw,300px)] innerSecond">
        <Image
          src="/images/cta-image.jpg"
          alt=""
          fill
          className="absolute top-1/2 left-0 w-[1000vw] max-w-none h-auto bg-white -translate-y-1/2 z-10 min-[1640px]:w-[calc(1000vw*0.9)] max-[1240px]:w-[calc(1000vw*1.1)] max-[1040px]:w-[calc(1000vw*1.2)] md:left-1/2 md:w-[calc(1000vw*0.49)] md:-translate-y-[52%] md:-translate-x-[44%]"
        />
        <div className="absolute top-0 left-0 w-[718vw] h-full bg-gradient-to-r from-brand-sub-primary to-transparent [50%] z-20 md:w-full md:bg-gradient-to-b from-brand-sub-primary to-transparent [33%] gradient" />
        <div className="relative flex justify-center items-center w-[max(340px,528vw)] h-full z-30 md:items-end md:w-full md:pb-[40vw] buttonWrapper">
          <Button href="/contact" modifierColor="secondary" className="relative inline-block w-fit max-w-full px-10 py-5 text-primary text-xl leading-s font-normal no-underline text-center md:text-[min(20vw,20px)] before:absolute before:inset-0 before:bg-white before:border before:border-primary before:rounded-full before:transition-all before:duration-100 before:-z-10 hover:before:-inset-[10px] active:before:-inset-[10px]">
            お問い合わせ
          </Button>
        </div>
      </div>
    </div>
  )
}
