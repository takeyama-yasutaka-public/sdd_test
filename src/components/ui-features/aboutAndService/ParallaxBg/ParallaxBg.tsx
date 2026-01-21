/**
 * ParallaxBg
 * 仕様書: docs/ui/components/ui-features/aboutAndService/ParallaxBg/specification.md
 */

'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * ParallaxBgコンポーネント
 * パララックス背景
 */
export function ParallaxBg() {
  const parallaxBgRef = useRef<HTMLDivElement>(null)

  // スクロール量取得
  const { scrollYProgress } = useScroll({
    target: parallaxBgRef,
    offset: ['start end', 'end end'],
  })

  // 画像幅 - ビューポート幅で移動量計算
  // SP時: 移動量を1/3に
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const imageWidth = 2000 // 実際の画像幅に合わせて設定
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
  const moveDistance = isMobile ? (imageWidth - viewportWidth) / 3 : imageWidth - viewportWidth

  // x座標変換
  const x = useTransform(scrollYProgress, [0, 1], [0, -moveDistance])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <div ref={parallaxBgRef} className="relative">
      <div className="sticky">
        <motion.div
          style={{ x: smoothX }}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/images/parallax-bg.jpg"
            alt=""
            width={2000}
            height={800}
            priority
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  )
}
