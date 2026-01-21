/**
 * HeadingEng
 * 仕様書: docs/ui/components/ui-kit/content/HeadingEng/specification.md
 */

'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

// HeadingTopEng Props
export interface HeadingTopEngProps {
  english: string
  color?: string
}

/**
 * HeadingTopEngコンポーネント
 * トップページ用英語見出し
 */
export function HeadingTopEng({ english, color }: HeadingTopEngProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  const textColorClass = color === 'white' ? 'text-on-fill' : 'text-primary'

  // 文字を1文字ずつspanで分割
  const chars = english.split('').map((char, index) => (
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
    <div
      ref={ref}
      className={`font-secondary ${textColorClass} text-[min(96vw,96px)] md:text-[min(72vw,72px)] leading-s font-light flex overflow-hidden`}
    >
      {chars}
    </div>
  )
}

// HeadingEng Props
export interface HeadingEngProps {
  children: ReactNode
  color?: string
}

/**
 * HeadingEngコンポーネント
 * 英語見出し
 */
export function HeadingEng({ children, color }: HeadingEngProps) {
  const [ref, inView] = useInView({
    rootMargin: '0% 0% -30% 0%',
    triggerOnce: true,
  })

  const textColorClass = color === 'white' ? 'text-on-fill' : 'text-primary'
  const afterBgClass = color === 'white' ? 'after:bg-on-fill' : 'after:bg-primary'

  return (
    <div
      ref={ref}
      className={`relative w-fit font-secondary ${textColorClass} text-[min(64vw,64px)] md:text-[min(48vw,48px)] leading-s font-light ${afterBgClass} ${
        inView ? 'after:animate-[borderSlide_1s_ease_forwards]' : ''
      } after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]`}
    >
      {children}
    </div>
  )
}
