// Testing Libraryのカスタムマッチャーをインポート
import '@testing-library/jest-dom'
import React from 'react'

// next/imageのモック（placeholder='blur'等のNext内部制約を回避）
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const {
      src,
      alt,
      width,
      height,
      // Next.js Image特有のprops（DOMに渡さない）
      fill,
      priority,
      placeholder,
      blurDataURL,
      loader,
      quality,
      sizes,
      unoptimized,
      onLoadingComplete,
      className,
      style,
      ...rest
    } = props || {}

    const resolvedSrc = typeof src === 'string' ? src : src?.src || ''
    // fillがtrueの場合はwidth/heightを設定しない
    const imgProps = fill
      ? { src: resolvedSrc, alt, className, style, ...rest }
      : { src: resolvedSrc, alt, width, height, className, style, ...rest }
    
    return React.createElement('img', imgProps)
  },
}))

// next/linkのモック（className等のpropsを維持）
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }) => {
    const resolvedHref = typeof href === 'string' ? href : href?.pathname || ''
    return React.createElement('a', { href: resolvedHref, ...props }, children)
  },
}))

// next/navigationのモック（useRouter等のinvariant回避）
jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// IntersectionObserverのモック
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
}

// Canvas APIのモック（lottie-web用）
HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  fillStyle: '',
  strokeStyle: '',
  lineWidth: 0,
  lineCap: '',
  lineJoin: '',
  miterLimit: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 0,
  shadowColor: '',
  globalAlpha: 1,
  globalCompositeOperation: 'source-over',
  save: jest.fn(),
  restore: jest.fn(),
  scale: jest.fn(),
  rotate: jest.fn(),
  translate: jest.fn(),
  transform: jest.fn(),
  setTransform: jest.fn(),
  drawImage: jest.fn(),
  clearRect: jest.fn(),
  fillRect: jest.fn(),
  strokeRect: jest.fn(),
  beginPath: jest.fn(),
  closePath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  quadraticCurveTo: jest.fn(),
  bezierCurveTo: jest.fn(),
  arcTo: jest.fn(),
  arc: jest.fn(),
  rect: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  clip: jest.fn(),
  isPointInPath: jest.fn(),
  fillText: jest.fn(),
  strokeText: jest.fn(),
  measureText: jest.fn(() => ({ width: 0 })),
  createImageData: jest.fn(),
  getImageData: jest.fn(),
  putImageData: jest.fn(),
  createLinearGradient: jest.fn(),
  createRadialGradient: jest.fn(),
  createPattern: jest.fn(),
}))

// lottie-webのモック
jest.mock('lottie-web', () => ({
  __esModule: true,
  default: {
    loadAnimation: jest.fn(() => ({
      play: jest.fn(),
      pause: jest.fn(),
      stop: jest.fn(),
      goToAndStop: jest.fn(),
      goToAndPlay: jest.fn(),
      setSpeed: jest.fn(),
      setDirection: jest.fn(),
      playSegments: jest.fn(),
      setSubframe: jest.fn(),
      destroy: jest.fn(),
    })),
  },
}))

// framer-motionのモック
jest.mock('framer-motion', () => ({
  __esModule: true,
  motion: {
    div: ({ children, initial, animate, whileInView, viewport, transition, style, ...props }) => {
      // framer-motionのpropsを除外してDOM要素に渡さない
      return React.createElement('div', { ...props, style }, children)
    },
    span: ({ children, initial, animate, whileInView, viewport, transition, style, ...props }) => {
      return React.createElement('span', { ...props, style }, children)
    },
    section: ({ children, initial, animate, whileInView, viewport, transition, style, ...props }) => {
      return React.createElement('section', { ...props, style }, children)
    },
  },
  useScroll: jest.fn(() => ({
    scrollYProgress: { get: jest.fn(() => 0) },
  })),
  useTransform: jest.fn((value, input, output) => {
    return { get: jest.fn(() => output[0]) }
  }),
  useSpring: jest.fn((value) => {
    return { get: jest.fn(() => 0) }
  }),
}))

// plaiceholderのモック（ESMモジュールのため）
jest.mock('plaiceholder', () => ({
  __esModule: true,
  getPlaiceholder: jest.fn(async (imageBuffer) => {
    return {
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
      metadata: {
        width: 100,
        height: 100,
        format: 'jpeg',
      },
    }
  }),
}))
