/**
 * Component Forms
 * 仕様書: docs/ui/components/ui-features/component/Forms/specification.md
 */

'use client'

import { useState } from 'react'
import { FormText } from '@/components/ui-kit/form/FormText/FormText'
import { FormTextarea } from '@/components/ui-kit/form/FormTextarea/FormTextarea'
import { FormRadioGroup, FormRadio } from '@/components/ui-kit/form/FormRadio/FormRadio'
import { FormCheckboxGroup, FormCheckbox } from '@/components/ui-kit/form/FormCheckbox/FormCheckbox'
import { Button } from '@/components/ui-kit/content/Button/Button'
import { validatText, validatRadio, validatCheckbox } from '@/features/utils/validation/validation'

/**
 * Formsコンポーネント
 * 開発用フォームコンポーネント
 */
export function Forms() {
  const [inputArea, setInputArea] = useState(true)
  const [confirmArea, setConfirmArea] = useState(false)
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [radio, setRadio] = useState('')
  const [checkbox, setCheckbox] = useState<string[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value)
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCheckbox((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const handleConfirm = () => {
    const newErrors: { [key: string]: string } = {}
    const textError = validatText(text)
    if (textError) newErrors.text = textError
    const radioError = validatRadio(radio)
    if (radioError) newErrors.radio = radioError
    const checkboxError = validatCheckbox(checkbox)
    if (checkboxError) newErrors.checkbox = checkboxError

    if (Object.keys(newErrors).length === 0) {
      setInputArea(false)
      setConfirmArea(true)
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  const handleBack = () => {
    setInputArea(true)
    setConfirmArea(false)
  }

  const handleSubmit = () => {
    alert('送信しました')
  }

  return (
    <div>
      {inputArea && (
        <div>
          <FormText
            name="text"
            placeholder="テキスト"
            value={text}
            onChange={handleTextChange}
          />
          {errors.text && <p className="text-red-500">{errors.text}</p>}
          <FormTextarea
            name="textarea"
            rows={5}
            placeholder="テキストエリア"
            value={textarea}
            onChange={handleTextareaChange}
          />
          <FormRadioGroup>
            <FormRadio name="radio" value="option1" onChange={handleRadioChange} />
            <FormRadio name="radio" value="option2" onChange={handleRadioChange} />
          </FormRadioGroup>
          {errors.radio && <p className="text-red-500">{errors.radio}</p>}
          <FormCheckboxGroup>
            <FormCheckbox name="checkbox" value="option1" onChange={handleCheckboxChange} />
            <FormCheckbox name="checkbox" value="option2" onChange={handleCheckboxChange} />
          </FormCheckboxGroup>
          {errors.checkbox && <p className="text-red-500">{errors.checkbox}</p>}
          <Button onClick={handleConfirm}>確認</Button>
        </div>
      )}
      {confirmArea && (
        <div>
          <p>テキスト: {text}</p>
          <p>テキストエリア: {textarea}</p>
          <p>ラジオ: {radio}</p>
          <p>チェックボックス: {checkbox.join(', ')}</p>
          <Button onClick={handleBack}>修正</Button>
          <Button onClick={handleSubmit}>送信</Button>
        </div>
      )}
    </div>
  )
}
