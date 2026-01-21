/**
 * fonts テスト
 * 仕様書: docs/features/utils/fonts/specification.md
 */

import { notojp, montserrat } from './fonts'

// next/font/googleのモック
jest.mock('next/font/google', () => ({
  Noto_Sans_JP: jest.fn(() => ({ className: 'font-notojp' })),
  Montserrat: jest.fn(() => ({ className: 'font-montserrat' })),
}))

describe('fonts', () => {
  // notojp: Noto Sans JPフォント
  it('has notojp font', () => {
    expect(notojp).toBeDefined()
  })

  // montserrat: Montserratフォント
  it('has montserrat font', () => {
    expect(montserrat).toBeDefined()
  })
})
