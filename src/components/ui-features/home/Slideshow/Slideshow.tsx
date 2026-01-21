/**
 * Slideshow
 * 仕様書: docs/ui/components/ui-features/home/Slideshow/specification.md
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// スライド画像データ（実際の画像パスは仕様に基づいて設定）
const slides = [
  { src: '/images/slideshow-1.jpg', alt: 'スライド1' },
  { src: '/images/slideshow-2.jpg', alt: 'スライド2' },
  { src: '/images/slideshow-3.jpg', alt: 'スライド3' },
]

/**
 * Slideshowコンポーネント
 * スライドショー表示
 */
export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [componentKey, setComponentKey] = useState(0)

  // 初期状態: 1枚目をactive
  // 2秒後: アニメーション開始
  // 4秒間隔でスライド切り替え
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, 4000)

      return () => clearInterval(interval)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // visibilitychangeイベントで再マウント
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setComponentKey((prev) => prev + 1)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const nextIndex = (currentIndex + 1) % slides.length
  const nextNextIndex = (currentIndex + 2) % slides.length

  return (
    <div key={componentKey} className="relative inner">
      {slides.map((slide, index) => {
        const isCurrent = index === currentIndex
        const isNext = index === nextIndex
        const isNextNext = index === nextNextIndex

        let zIndex = -1
        if (isCurrent) zIndex = 1
        else if (isNext) zIndex = 2
        else if (isNextNext) zIndex = -1

        return (
          <div
            key={index}
            className={`imageWrapper ${isCurrent ? 'active' : ''}`}
            style={{ zIndex }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}
