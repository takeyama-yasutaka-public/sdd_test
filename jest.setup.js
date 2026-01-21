// Testing Libraryのカスタムマッチャーをインポート
import '@testing-library/jest-dom'

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
