/**
 * MainVisual
 * 仕様書: docs/ui/components/ui-features/home/MainVisual/specification.md
 */

'use client'

import { motion } from 'framer-motion'
import { useLoadingStore } from '@/features/utils/zustand/zustand'
import { Slideshow } from '../Slideshow/Slideshow'

/**
 * MainVisualコンポーネント
 * トップページメインビジュアル
 */
export function MainVisual() {
  const { loadingState } = useLoadingStore()

  // loadingState=false時: englishDelay=0, japaniseDelay=0.4
  // loadingState=true時: englishDelay=0.8, japaniseDelay=1.2
  const englishDelay = loadingState ? 0.8 : 0
  const japaniseDelay = loadingState ? 1.2 : 0.4

  return (
    <div className="relative flex flex-col w-full h-[clamp(calc(1100px*0.9),1100vh,calc(1100px*1.1))] md:h-[clamp(calc(870px*0.9),870vh,calc(870px*1.1))]">
      <motion.div
        className="mt-[clamp(calc(60px*0.9),60vh,calc(60px*1.1))] ml-[60vw] text-primary font-secondary text-[min(100px,100vw)] md:text-[32vw] leading-[1.1] font-light md:mt-[clamp(calc(40px*0.9),40vh,calc(40px*1.1))] md:ml-[20vw] english"
        initial={{ x: '-5vw', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: englishDelay }}
      >
        WEB CORPORATION
      </motion.div>
      <motion.div
        className="mt-[clamp(calc(60px*0.9),60vh,calc(60px*1.1))] ml-[60vw] text-[clamp(20px,24vw,24px)] md:text-[min(20px,20vw)] leading-s md:mt-[clamp(calc(20px*0.9),20vh,calc(20px*1.1))] md:ml-[20vw] japanise"
        initial={{ x: '-5vw', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: japaniseDelay }}
      >
        ウェブコーポレーション
      </motion.div>
      <div className="absolute flex flex-col items-center left-[84vw] bottom-[clamp(calc(338px*0.9),338vh,calc(338px*1.1))] md:left-[16vw] md:bottom-[clamp(calc(248px*0.9),248vh,calc(248px*1.1))] arrow">
        <p className="inline-block text-white text-sm leading-s font-normal -rotate-90">scroll</p>
        <span className="relative block mt-[30px] w-[1px] h-[45px] bg-white animate-[fadeInOutMove_2s_ease-in-out_infinite] after:absolute after:bottom-[-1px] after:right-[6px] after:w-[1px] after:h-[15px] after:bg-white after:-rotate-45" />
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[clamp(calc(600px*0.9),600vh,calc(600px*1.1))] bg-primary rounded-[72px_0px_0px_0px] -z-20 md:h-[clamp(calc(480px*0.9),480vh,calc(480px*1.1))] md:rounded-[36px_0px_0px_0px] bottom" />
      <Slideshow />
    </div>
  )
}
