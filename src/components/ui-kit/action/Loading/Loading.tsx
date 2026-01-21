/**
 * Loading
 * 仕様書: docs/ui/components/ui-kit/action/Loading/specification.md
 */

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLoadingStore } from '@/features/utils/zustand/zustand'
import { bodyScrollStop, bodyScrollStart } from '@/features/utils/bodyScroll/bodyScroll'

/**
 * Loadingコンポーネント
 * ローディングアニメーション
 */
export function Loading() {
  const { loadingState, loadingOff } = useLoadingStore()
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)
  const [animationStart, setAnimationStart] = useState(false)

  // 画像読み込み完了検知
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img')
      let loadedCount = 0
      const totalImages = images.length

      if (totalImages === 0) {
        setAllImagesLoaded(true)
        return
      }

      const checkImageLoad = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true)
        }
      }

      images.forEach((img) => {
        if (img.complete) {
          checkImageLoad()
        } else {
          img.addEventListener('load', checkImageLoad)
          img.addEventListener('error', checkImageLoad)
        }
      })

      return () => {
        images.forEach((img) => {
          img.removeEventListener('load', checkImageLoad)
          img.removeEventListener('error', checkImageLoad)
        })
      }
    }
  }, [])

  // アニメーション開始
  useEffect(() => {
    if (allImagesLoaded && loadingState) {
      bodyScrollStop()
      setAnimationStart(true)
      setTimeout(() => {
        bodyScrollStart()
      }, 1000)
      setTimeout(() => {
        loadingOff()
      }, 1300)
    }
  }, [allImagesLoaded, loadingState, loadingOff])

  if (!loadingState) {
    return null
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center ${
        loadingState ? 'opacity-100 visible' : 'opacity-0 invisible'
      } ${animationStart ? 'animate-[fadeOut_0.3s_1.3s_forwards]' : ''}`}
      role="status"
      aria-label="読み込み中"
    >
      <div
        className={`absolute inset-0 bg-brand-main-quaternary ${
          animationStart ? 'animate-[backgroundFadeOut_0.8s_1s_forwards]' : ''
        }`}
      />
      <div className={`flex scale-30 w-[400px] h-auto relative ${loadingState ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-100 logo`}>
        <div
          className={`w-[130px] h-auto translate-x-[95px] logoLeft ${
            animationStart ? 'animate-[blink_0.1s_0s_2_alternate,moveLeft_0.5s_0.8s_forwards]' : ''
          }`}
        >
          <Image src="/images/loading-logo-left.png" alt="" width={130} height={100} />
        </div>
        <div className="w-[180px] h-auto logoCenter">
          <Image src="/images/loading-logo-center.png" alt="" width={180} height={100} />
        </div>
        <div
          className={`w-[128px] h-auto -translate-x-[95px] logoRight ${
            animationStart ? 'animate-[blink_0.1s_0s_2_alternate,moveRight_0.5s_0.8s_forwards]' : ''
          }`}
        >
          <Image src="/images/loading-logo-right.png" alt="" width={128} height={100} />
        </div>
      </div>
    </div>
  )
}
