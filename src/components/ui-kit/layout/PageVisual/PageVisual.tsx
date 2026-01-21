/**
 * PageVisual
 * 仕様書: docs/ui/components/ui-kit/layout/PageVisual/specification.md
 */

'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

interface PageVisualProps {
  english: string
  japanese: string
  image: 'about' | 'service' | 'case' | 'news' | 'contact'
}

// 画像パスマッピング
const imageMap: Record<string, string> = {
  about: '/images/pagevisual-about.jpg',
  service: '/images/pagevisual-service.jpg',
  case: '/images/pagevisual-case.jpg',
  news: '/images/pagevisual-news.jpg',
  contact: '/images/pagevisual-contact.jpg',
}

/**
 * PageVisualコンポーネント
 * スクロール検知時にアニメーション
 */
export function PageVisual({ english, japanese, image }: PageVisualProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  // 文字を1文字ずつspanで分割
  const englishChars = english.split('').map((char, index) => (
    <span
      key={index}
      className={`block translate-y-[105%] transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] ${
        index > 0 ? `delay-[${index * 0.1}s]` : ''
      } ${inView ? 'translate-y-0' : ''}`}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <div className="relative">
      <div className="imageWrapper">
        <Image
          src={imageMap[image]}
          alt=""
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="title">
        <div
          ref={ref}
          className="font-secondary text-[min(96vw,96px)] md:text-[min(72vw,72px)] leading-s font-light flex overflow-hidden"
        >
          {englishChars}
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[60px] h-[1px] bg-white" />
          <div className="text-white text-[min(24vw,24px)] md:text-[min(20vw,20px)] leading-s font-normal">
            {japanese}
          </div>
        </div>
      </div>
    </div>
  )
}
