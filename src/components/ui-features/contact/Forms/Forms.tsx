/**
 * Contact Forms
 * 仕様書: docs/ui/components/ui-features/contact/Forms/specification.md
 */

'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'
import { sendGTMEvent } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader'
import { ContentBody, ContentFooter } from '@/components/ui-kit/layout/Content/Content'
import { FormText } from '@/components/ui-kit/form/FormText/FormText'
import { FormTextarea } from '@/components/ui-kit/form/FormTextarea/FormTextarea'
import { FormRadioGroup, FormRadio } from '@/components/ui-kit/form/FormRadio/FormRadio'
import { FormCheckboxGroup, FormCheckbox } from '@/components/ui-kit/form/FormCheckbox/FormCheckbox'
import { Button } from '@/components/ui-kit/content/Button/Button'
import { validatText, validatRfcEmail } from '@/features/utils/validation/validation'

/**
 * Formsコンポーネント
 * お問い合わせフォーム
 */
export function Forms() {
  const router = useRouter()
  const [inputArea, setInputArea] = useState(true)
  const [confirmArea, setConfirmArea] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [type, setType] = useState('')
  const [content, setContent] = useState('')
  const [consent, setConsent] = useState<string[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const companyRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const mailRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLFieldSetElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const consentRef = useRef<HTMLFieldSetElement>(null)

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value)
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConsent((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const handleConfirm = () => {
    const newErrors: { [key: string]: string } = {}
    const companyError = validatText(company)
    if (companyError) newErrors.company = companyError
    const nameError = validatText(name)
    if (nameError) newErrors.name = nameError
    const mailError = validatRfcEmail(mail)
    if (mailError) newErrors.mail = mailError
    const typeError = validatText(type)
    if (typeError) newErrors.type = typeError
    const contentError = validatText(content)
    if (contentError) newErrors.content = contentError
    const consentError = consent.length === 0 ? '同意してください。' : ''

    if (Object.keys(newErrors).length === 0 && !consentError) {
      setInputArea(false)
      setConfirmArea(true)
      setInputError(false)
      setErrors({})
    } else {
      setErrors(newErrors)
      setInputError(true)
      // エラー時はスクロール
      if (companyError && companyRef.current) {
        companyRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (nameError && nameRef.current) {
        nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (mailError && mailRef.current) {
        mailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (typeError && typeRef.current) {
        typeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (contentError && contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (consentError && consentRef.current) {
        consentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  const handleBack = () => {
    setInputArea(true)
    setConfirmArea(false)
  }

  const handleSubmit = async () => {
    NProgress.start()
    try {
      const response = await fetch('/api/contact-handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company,
          name,
          mail,
          type,
          content,
        }),
      })

      if (response.ok) {
        sendGTMEvent({ event: 'contact_submit', value: 'success' })
        router.push('/contact/finish')
      } else {
        alert('送信に失敗しました')
      }
    } catch (error) {
      alert('送信に失敗しました')
    } finally {
      NProgress.done()
    }
  }

  return (
    <>
      <NextTopLoader />
      <ContentBody>
        {inputArea && (
          <div>
            <FormText
              ref={companyRef}
              name="company"
              placeholder="御社名"
              value={company}
              onChange={handleCompanyChange}
            />
            {errors.company && <p className="text-red-500">{errors.company}</p>}
            <FormText
              ref={nameRef}
              name="name"
              placeholder="お名前"
              value={name}
              onChange={handleNameChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <FormText
              ref={mailRef}
              name="mail"
              placeholder="メールアドレス"
              value={mail}
              onChange={handleMailChange}
            />
            {errors.mail && <p className="text-red-500">{errors.mail}</p>}
            <FormRadioGroup ref={typeRef}>
              <FormRadio name="type" value="お問い合わせ" onChange={handleTypeChange} />
              <FormRadio name="type" value="資料請求" onChange={handleTypeChange} />
            </FormRadioGroup>
            {errors.type && <p className="text-red-500">{errors.type}</p>}
            <FormTextarea
              ref={contentRef}
              name="content"
              rows={10}
              placeholder="お問い合わせ内容"
              value={content}
              onChange={handleContentChange}
            />
            {errors.content && <p className="text-red-500">{errors.content}</p>}
            <FormCheckboxGroup ref={consentRef}>
              <FormCheckbox name="consent" value="同意する" onChange={handleConsentChange} />
            </FormCheckboxGroup>
            {errors.consent && <p className="text-red-500">{errors.consent}</p>}
            <Button onClick={handleConfirm}>確認</Button>
          </div>
        )}
        {confirmArea && (
          <div>
            <p>御社名: {company}</p>
            <p>お名前: {name}</p>
            <p>メールアドレス: {mail}</p>
            <p>お問い合わせの種類: {type}</p>
            <p>お問い合わせ内容: {content}</p>
            <Button onClick={handleBack}>修正</Button>
          </div>
        )}
      </ContentBody>
      {confirmArea && (
        <ContentFooter>
          <Button onClick={handleSubmit} type="submit">
            送信
          </Button>
        </ContentFooter>
      )}
    </>
  )
}
