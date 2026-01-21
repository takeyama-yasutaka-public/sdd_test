//クライアントコンポーネントへ変更
'use client'

/*********************************
    インポート
*********************************/

//スタイル
import styles from './index.module.scss'
//フック
import { useState, useRef } from 'react'
import { validatText, validatRfcEmail } from '@/lib/validation'
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'
import { sendGTMEvent } from '@next/third-parties/google'
//コンポーネント
import * as Layout from '@/components/layout/index'
import * as Content from '@/components/content/index'
import * as Form from '@/components/form/index'
import Link from 'next/link'
import NextTopLoader from 'nextjs-toploader'

/*********************************
    コンポーネントデータのエクスポート
*********************************/

export default function Forms() {
  // ステートを使って NextTopLoader の表示を制御
  const [isLoading, setIsLoading] = useState(false)

  // 各フォームの入力状態管理
  const [inputArea, setInputArea] = useState(true) // 入力エリアの表示
  const [confirmArea, setConfirmArea] = useState(false) // 確認エリアの表示
  const [inputError, setInputError] = useState(false) // エラーの表示

  // 各入力フィールドの状態とエラー
  const [company, setCompany] = useState('')
  const [companyError, setCompanyError] = useState('')
  const refCompany = useRef<HTMLInputElement>(null)

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const refName = useRef<HTMLInputElement>(null)

  const [mail, setMail] = useState('')
  const [mailError, setMailError] = useState('')
  const refMail = useRef<HTMLInputElement>(null)

  const [type, setType] = useState('')
  const refType = useRef<HTMLFieldSetElement>(null)

  const [content, setContent] = useState('')
  const [contentError, setContentError] = useState('')
  const refContent = useRef<HTMLTextAreaElement>(null)

  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState('')
  const refConsent = useRef<HTMLInputElement>(null)

  // ルーターの初期化
  const router = useRouter()

  // チェックボックスが変更されたときの処理
  const handleChange = (e: { target: { checked: boolean } }) => {
    const isChecked = e.target.checked
    setConsent(isChecked)
    setConsentError(validateConsent(isChecked))
  }

  // 同意確認用バリデーション
  function validateConsent(consent: boolean) {
    return consent ? '' : '同意が必要です。'
  }

  // 確認ボタンを押したときの処理
  const toggleInputButton = () => {
    setInputError(true) // フォームの入力をチェックする
    const errors = [
      { value: validatText(company), setter: setCompanyError, ref: refCompany },
      { value: validatText(name), setter: setNameError, ref: refName },
      { value: validatRfcEmail(mail), setter: setMailError, ref: refMail },
      {
        value: validatText(content),
        setter: setContentError,
        ref: refContent,
      },
      {
        value: validateConsent(consent),
        setter: setConsentError,
        ref: refConsent,
      },
    ]

    for (const error of errors) {
      if (error.value !== '') {
        error.setter(error.value)
        error.ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
        return
      }
    }

    setInputArea(false) // 入力画面を非表示にし、確認画面を表示
    setConfirmArea(true)
    window.scrollTo({ top: 0 })
  }

  // 修正ボタンを押したときの処理
  const toggleConfirmButton = () => {
    setInputArea(true)
    setConfirmArea(false)
    window.scrollTo({ top: 0 })
  }

  // フォーム送信時の処理
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      setIsLoading(true) // ローダーを表示
      NProgress.start() // 送信時のインジケーター開始
      sendGTMEvent({ event: 'contact', value: 'submit' }) // Googleタグマネージャーイベント
      const response = await fetch(
        'https://react-corporate-alpha.vercel.app/api/contact-handler',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            company,
            name,
            mail,
            type,
            content,
          }),
        }
      )
      await response.json()
      router.push('/contact/finish') // 送信完了画面へ遷移
    } catch (err) {
      alert('メッセージの送信が失敗しました') // エラー時のメッセージ
    }
  }

  //コンポーネントの出力
  return (
    <>
      {isLoading && <NextTopLoader showSpinner={false} shadow={false} />}

      <form onSubmit={handleSubmit}>
        {/* 入力画面 */}
        <div
          className={styles.inputArea}
          data-modifier={inputArea ? 'active' : ''}
        >
          <Layout.ContentBody>
            <div className={styles.explanation}>
              <p className={styles.strong}>
                お仕事のご依頼やご質問などお気軽にお問い合わせください。
              </p>
              <p>
                内容を確認後、担当者よりご連絡させていただきます。
                <br />
                また、お客さまのご利用環境、もしくは迷惑メール対策等の設定により届かない場合がございます。
                <br />
                返信がない場合は、迷惑メールフォルダ、設定などご確認の上、お手数ですが再度ご連絡いただけますと幸いです。
              </p>
            </div>

            <div
              className={styles.formArea}
              data-modifier={inputError ? 'on-error' : ''}
            >
              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>御社名</p>
                  <p className={styles.required}>必須</p>
                </div>
                <div className={styles.body}>
                  <Form.FormText
                    name="御社名"
                    placeholder="株式会社〇〇"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value)
                      setCompanyError(validatText(e.target.value))
                    }}
                    ref={refCompany}
                    modifier="400"
                  />
                </div>
                {companyError && <p className={styles.error}>{companyError}</p>}
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>お名前</p>
                  <p className={styles.required}>必須</p>
                </div>
                <div className={styles.body}>
                  <Form.FormText
                    name="お名前"
                    placeholder="お名前"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      setNameError(validatText(e.target.value))
                    }}
                    ref={refName}
                    modifier="400"
                  />
                </div>
                {nameError && <p className={styles.error}>{nameError}</p>}
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>メールアドレス</p>
                  <p className={styles.required}>必須</p>
                </div>
                <div className={styles.body}>
                  <Form.FormText
                    name="メールアドレス"
                    placeholder="example@mail.com"
                    value={mail}
                    onChange={(e) => {
                      setMail(e.target.value)
                      setMailError(validatRfcEmail(e.target.value))
                    }}
                    ref={refMail}
                    modifier="400"
                  />
                </div>
                {mailError && <p className={styles.error}>{mailError}</p>}
              </div>

              <div className={styles.formUnit} data-modifier="radio">
                <div className={styles.header}>
                  <p className={styles.heading}>お問い合わせの種類</p>
                </div>
                <div className={styles.body}>
                  <Form.FormRadioGroup ref={refType}>
                    <Form.FormRadio
                      name="お問い合わせの種類"
                      value="WEBサイト制作"
                      onChange={(e) => {
                        setType(e.target.value)
                      }}
                    />
                    <Form.FormRadio
                      name="お問い合わせの種類"
                      value="WEBアプリ開発"
                      onChange={(e) => {
                        setType(e.target.value)
                      }}
                    />
                    <Form.FormRadio
                      name="お問い合わせの種類"
                      value="デジタルマーケティング"
                      onChange={(e) => {
                        setType(e.target.value)
                      }}
                    />
                    <Form.FormRadio
                      name="お問い合わせの種類"
                      value="その他"
                      onChange={(e) => {
                        setType(e.target.value)
                      }}
                    />
                  </Form.FormRadioGroup>
                </div>
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>お問い合わせ内容</p>
                  <p className={styles.required}>必須</p>
                </div>
                <div className={styles.body} data-modifier="textarea">
                  <Form.FormTextarea
                    name="お問い合わせ内容"
                    rows={5}
                    placeholder="内容"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value)
                      setContentError(validatText(e.target.value))
                    }}
                    ref={refContent}
                  />
                </div>
                {contentError && <p className={styles.error}>{contentError}</p>}
              </div>
            </div>
          </Layout.ContentBody>
          <Layout.ContentFooter>
            <div className={styles.footerInner}>
              <div
                className={styles.consent}
                data-modifier={inputError ? 'on-error' : ''}
              >
                <Form.FormCheckboxGroup ref={refConsent}>
                  <Form.FormCheckbox
                    name="個人情報保護方針に同意します"
                    value="個人情報保護方針に同意します"
                    onChange={(e) => {
                      handleChange(e)
                    }}
                  />
                </Form.FormCheckboxGroup>
                <Link href="/privacy">個人情報保護方針を確認する</Link>
                {consentError && <p className={styles.error}>{consentError}</p>}
              </div>
              <Content.Button type="button" onClick={toggleInputButton}>
                確認する
              </Content.Button>
            </div>
          </Layout.ContentFooter>
        </div>

        {/* 確認画面 */}
        <div
          className={styles.confirmArea}
          data-modifier={confirmArea ? 'active' : ''}
        >
          <Layout.ContentBody>
            <div className={styles.explanation}>
              <p>以下の内容でよろしければ「送信する」ボタンを押して下さい。</p>
            </div>
            <div className={styles.formArea}>
              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>御社名</p>
                </div>
                <div className={styles.body}>
                  <p>{company}</p>
                </div>
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>お名前</p>
                </div>
                <div className={styles.body}>
                  <p>{name}</p>
                </div>
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>メールアドレス</p>
                </div>
                <div className={styles.body}>
                  <p>{mail}</p>
                </div>
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>お問い合わせの種類</p>
                </div>
                <div className={styles.body}>
                  <p>{type}</p>
                </div>
              </div>

              <div className={styles.formUnit}>
                <div className={styles.header}>
                  <p className={styles.heading}>お問い合わせ内容</p>
                </div>
                <div className={styles.body}>
                  <p>{content}</p>
                </div>
              </div>
            </div>
          </Layout.ContentBody>
          <Layout.ContentFooter>
            <Content.ButtonGroup>
              <Content.Button
                type="button"
                onClick={toggleConfirmButton}
                modifierColor="secondary"
              >
                戻る
              </Content.Button>
              <Content.Button type="submit" modifierColor="success">
                送信する
              </Content.Button>
            </Content.ButtonGroup>
          </Layout.ContentFooter>
        </div>
      </form>
    </>
  )
}
