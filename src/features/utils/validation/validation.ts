/**
 * validation
 * 仕様書: docs/features/utils/validation/specification.md
 */

/**
 * テキストの判定
 * @param text - 判定するテキスト
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatText(text: string): string {
  if (!text || text.trim() === '') {
    return '入力してください。'
  }
  return ''
}

/**
 * セレクトボックスの判定
 * @param select - 選択された値
 * @param defaultSelect - デフォルト値
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatSelect(select: string, defaultSelect: string): string {
  if (!select || select === defaultSelect) {
    return '選択してください。'
  }
  return ''
}

/**
 * ラジオの判定
 * @param select - 選択された値
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatRadio(select: string): string {
  if (!select || select.trim() === '') {
    return '選択してください。'
  }
  return ''
}

/**
 * チェックボックスの判定
 * @param checkbox - 選択された値の配列
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatCheckbox(checkbox: string[]): string {
  if (!checkbox || checkbox.length === 0) {
    return '選択してください。'
  }
  return ''
}

/**
 * メールアドレスのRFC判定
 * @param email - 判定するメールアドレス
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatRfcEmail(email: string): string {
  if (!email || email.trim() === '') {
    return '正しいメールアドレスを入力してください。'
  }

  // @の有無
  if (!email.includes('@')) {
    return '正しいメールアドレスを入力してください。'
  }

  // @の連続
  if (email.includes('@@')) {
    return '正しいメールアドレスを入力してください。'
  }

  const [localPart, domainPart] = email.split('@')

  // ローカル部分65文字以下
  if (localPart.length > 65) {
    return '正しいメールアドレスを入力してください。'
  }

  // ドメイン部分254文字以下
  if (domainPart.length > 254) {
    return '正しいメールアドレスを入力してください。'
  }

  // 全体255文字以下
  if (email.length > 255) {
    return '正しいメールアドレスを入力してください。'
  }

  // ドットの連続
  if (email.includes('..')) {
    return '正しいメールアドレスを入力してください。'
  }

  // ドットの先頭/末尾
  if (localPart.startsWith('.') || localPart.endsWith('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
    return '正しいメールアドレスを入力してください。'
  }

  // ハイフンの先頭/末尾
  if (localPart.startsWith('-') || localPart.endsWith('-') || domainPart.startsWith('-') || domainPart.endsWith('-')) {
    return '正しいメールアドレスを入力してください。'
  }

  // ハイフンとドットの隣接
  if (email.includes('-.') || email.includes('.-')) {
    return '正しいメールアドレスを入力してください。'
  }

  // 数字のみ
  if (/^\d+$/.test(localPart) || /^\d+$/.test(domainPart)) {
    return '正しいメールアドレスを入力してください。'
  }

  // 特殊文字（許可される文字: a-z, A-Z, 0-9, ., -, _, @）
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return '正しいメールアドレスを入力してください。'
  }

  // ドットの有無（ドメイン部分にドットが必要）
  if (!domainPart.includes('.')) {
    return '正しいメールアドレスを入力してください。'
  }

  return ''
}

/**
 * 全角カタカナの判定
 * @param kana - 判定する文字列
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatKana(kana: string): string {
  if (!kana || kana.trim() === '') {
    return '全角カタカナで入力してください。'
  }

  // 全角カタカナの正規表現
  const katakanaRegex = /^[ァ-ヶー]+$/

  if (!katakanaRegex.test(kana)) {
    return '全角カタカナで入力してください。'
  }

  return ''
}

/**
 * 半角数字の判定
 * @param number - 判定する文字列
 * @returns エラーメッセージ（空文字列は正常）
 */
export function validatNumber(number: string): string {
  if (!number || number.trim() === '') {
    return '半角数字で入力してください。'
  }

  // 半角数字の正規表現
  const numberRegex = /^[0-9]+$/

  if (!numberRegex.test(number)) {
    return '半角数字で入力してください。'
  }

  return ''
}
