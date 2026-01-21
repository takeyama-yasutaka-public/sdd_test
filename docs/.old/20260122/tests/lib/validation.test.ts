/**
 * validation ユーティリティテスト
 * 過去PJの既存動作を保証するテスト
 */

import {
  validatText,
  validatSelect,
  validatRadio,
  validatCheckbox,
  validatRfcEmail,
  validatKana,
  validatNumber,
} from '@/lib/validation'

describe('validatText', () => {
  // 未入力時にエラーメッセージ
  it('returns error message when empty', () => {
    expect(validatText('')).toBe('入力してください。')
  })

  // 入力時は空文字
  it('returns empty string when text is provided', () => {
    expect(validatText('テスト')).toBe('')
  })
})

describe('validatSelect', () => {
  // デフォルト値選択時にエラーメッセージ
  it('returns error message when default is selected', () => {
    expect(validatSelect('選択してください', '選択してください')).toBe('選択してください。')
  })

  // 選択時は空文字
  it('returns empty string when option is selected', () => {
    expect(validatSelect('オプション1', '選択してください')).toBe('')
  })
})

describe('validatRadio', () => {
  // 未選択時にエラーメッセージ
  it('returns error message when empty', () => {
    expect(validatRadio('')).toBe('選択してください。')
  })

  // 選択時は空文字
  it('returns empty string when selected', () => {
    expect(validatRadio('option1')).toBe('')
  })
})

describe('validatCheckbox', () => {
  // 未選択時にエラーメッセージ
  it('returns error message when empty array', () => {
    expect(validatCheckbox([])).toBe('選択してください。')
  })

  // 選択時は空文字
  it('returns empty string when items are selected', () => {
    expect(validatCheckbox(['option1'])).toBe('')
    expect(validatCheckbox(['option1', 'option2'])).toBe('')
  })
})

describe('validatRfcEmail', () => {
  // 未入力時にエラーメッセージ
  it('returns error message when empty', () => {
    expect(validatRfcEmail('')).toBe('入力してください。')
  })

  // @未含
  it('returns error when no @ symbol', () => {
    expect(validatRfcEmail('testemail.com')).toBe('@が含まれていない場合は無効なメールアドレスです。')
  })

  // @連続
  it('returns error when multiple consecutive @', () => {
    expect(validatRfcEmail('test@@email.com')).toBe('@が2つ以上連続しています。')
  })

  // @複数
  it('returns error when multiple @ symbols', () => {
    expect(validatRfcEmail('test@email@com')).toBe('@が2つ以上含まれています。')
  })

  // ローカル部.連続
  it('returns error when consecutive dots in local', () => {
    expect(validatRfcEmail('test..user@email.com')).toBe('.(ドット)が、@より前の部分で、2つ以上連続しています。')
  })

  // ローカル部.先頭
  it('returns error when dot at start of local', () => {
    expect(validatRfcEmail('.test@email.com')).toBe('.(ドット)を、ローカル部分の最初と最後(@の直前)に使っています。')
  })

  // ローカル部.末尾
  it('returns error when dot at end of local', () => {
    expect(validatRfcEmail('test.@email.com')).toBe('.(ドット)を、ローカル部分の最初と最後(@の直前)に使っています。')
  })

  // ドメイン数字のみ
  it('returns error when domain is only numbers', () => {
    expect(validatRfcEmail('test@12345')).toBe('.(ドット)が、@より後の部分で1つもありません。')
  })

  // ドメイン.なし
  it('returns error when no dot in domain', () => {
    expect(validatRfcEmail('test@emailcom')).toBe('.(ドット)が、@より後の部分で1つもありません。')
  })

  // 正常なメールアドレス
  it('returns empty string for valid email', () => {
    expect(validatRfcEmail('test@email.com')).toBe('')
    expect(validatRfcEmail('user.name@example.co.jp')).toBe('')
  })
})

describe('validatKana', () => {
  // 未入力時にエラーメッセージ
  it('returns error message when empty', () => {
    expect(validatKana('')).toBe('入力してください。')
  })

  // 非カタカナ時にエラーメッセージ
  it('returns error when not katakana', () => {
    expect(validatKana('ひらがな')).toBe('全角カタカナで入力してください。')
    expect(validatKana('漢字')).toBe('全角カタカナで入力してください。')
    expect(validatKana('abc')).toBe('全角カタカナで入力してください。')
  })

  // 全角カタカナ時は空文字
  it('returns empty string for valid katakana', () => {
    expect(validatKana('カタカナ')).toBe('')
    expect(validatKana('ヤマダ　タロウ')).toBe('')
    expect(validatKana('タナカー')).toBe('')
  })
})

describe('validatNumber', () => {
  // 未入力時にエラーメッセージ
  it('returns error message when empty', () => {
    expect(validatNumber('')).toBe('入力してください。')
  })

  // 非数字時にエラーメッセージ
  it('returns error when not number', () => {
    expect(validatNumber('abc')).toBe('半角数字で入力してください。')
    expect(validatNumber('１２３')).toBe('半角数字で入力してください。') // 全角
    expect(validatNumber('12.3')).toBe('半角数字で入力してください。')
  })

  // 半角数字時は空文字
  it('returns empty string for valid number', () => {
    expect(validatNumber('123')).toBe('')
    expect(validatNumber('0')).toBe('')
  })
})
