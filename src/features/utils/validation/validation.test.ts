/**
 * validation ユーティリティテスト
 * 仕様書: docs/features/utils/validation/specification.md
 */

import {
  validatText,
  validatSelect,
  validatRadio,
  validatCheckbox,
  validatRfcEmail,
  validatKana,
  validatNumber,
} from './validation'

describe('validatText', () => {
  // validatText: 未入力時のエラー
  it('returns error message when empty', () => {
    expect(validatText('')).toBe('入力してください。')
  })

  it('returns empty string when text is provided', () => {
    expect(validatText('テスト')).toBe('')
  })
})

describe('validatSelect', () => {
  // validatSelect: デフォルト選択時のエラー
  it('returns error message when default is selected', () => {
    expect(validatSelect('default', 'default')).toBe('選択してください。')
  })

  it('returns empty string when valid option is selected', () => {
    expect(validatSelect('option1', 'default')).toBe('')
  })
})

describe('validatRadio', () => {
  // validatRadio: 未選択時のエラー
  it('returns error message when empty', () => {
    expect(validatRadio('')).toBe('選択してください。')
  })

  it('returns empty string when selected', () => {
    expect(validatRadio('option1')).toBe('')
  })
})

describe('validatCheckbox', () => {
  // validatCheckbox: 未選択時のエラー
  it('returns error message when empty', () => {
    expect(validatCheckbox([])).toBe('選択してください。')
  })

  it('returns empty string when selected', () => {
    expect(validatCheckbox(['option1'])).toBe('')
  })
})

describe('validatRfcEmail', () => {
  // validatRfcEmail: 各種RFC違反パターン
  it('returns error message when @ is missing', () => {
    expect(validatRfcEmail('testexample.com')).toBe('正しいメールアドレスを入力してください。')
  })

  it('returns error message when @ is duplicated', () => {
    expect(validatRfcEmail('test@@example.com')).toBe('正しいメールアドレスを入力してください。')
  })

  it('returns error message when local part exceeds 65 characters', () => {
    const longLocal = 'a'.repeat(66)
    expect(validatRfcEmail(`${longLocal}@example.com`)).toBe('正しいメールアドレスを入力してください。')
  })

  it('returns error message when domain part exceeds 254 characters', () => {
    const longDomain = 'a'.repeat(255)
    expect(validatRfcEmail(`test@${longDomain}.com`)).toBe('正しいメールアドレスを入力してください。')
  })

  it('returns error message when dots are consecutive', () => {
    expect(validatRfcEmail('test..test@example.com')).toBe('正しいメールアドレスを入力してください。')
  })

  it('returns empty string when valid email', () => {
    expect(validatRfcEmail('test@example.com')).toBe('')
  })
})

describe('validatKana', () => {
  // validatKana: 全角カタカナ以外のエラー
  it('returns error message when not katakana', () => {
    expect(validatKana('テストひらがな')).toBe('全角カタカナで入力してください。')
  })

  it('returns empty string when katakana', () => {
    expect(validatKana('テスト')).toBe('')
  })
})

describe('validatNumber', () => {
  // validatNumber: 半角数字以外のエラー
  it('returns error message when not number', () => {
    expect(validatNumber('abc')).toBe('半角数字で入力してください。')
  })

  it('returns empty string when number', () => {
    expect(validatNumber('123')).toBe('')
  })
})
