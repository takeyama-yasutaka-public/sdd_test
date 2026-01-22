# ビルド修正レポート

日付: 2026-01-22
工程: npm run build ビルドエラー修正

---

## 修正概要

`npm run build` でビルドを通すために行った修正をまとめたレポートです。

---

## 1. Next.js 15 params/searchParams Promise化対応

### 問題
Next.js 15では動的ルートの`params`と`searchParams`が**Promise型**に変更された。従来の同期的なアクセス方法ではビルドエラーが発生。

### 修正内容

#### src/app/case/[id]/page.tsx
```typescript
// Before
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const caseItem = await getCasePostById(params.id)

// After
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const caseItem = await getCasePostById(id)
```

#### src/app/case/category/[slug]/page.tsx
- `params`と`searchParams`両方をPromise型に変更
- `await`で値を取得してから使用

#### src/app/news/[id]/page.tsx
- `params`をPromise型に変更
- `await`で値を取得してから使用

#### src/app/case/page.tsx, src/app/news/page.tsx
- `searchParams`をPromise型に変更
- `await`で値を取得してから使用

### 理由
Next.js 15の破壊的変更に対応するため。params/searchParamsがPromiseになったことで、非同期処理として扱う必要がある。

---

## 2. Tailwind CSS 4 PostCSS設定追加

### 問題
Tailwind CSS 4.xでは新しいPostCSS設定が必要。ビルド時にCSSが正しく処理されなかった。

### 修正内容

#### package.json
```json
"devDependencies": {
  "@tailwindcss/postcss": "^4.1.18",
  "postcss": "^8.5.6",
  // ...
}
```

#### postcss.config.mjs（新規作成）
Tailwind CSS 4用のPostCSS設定ファイルを追加。

### 理由
Tailwind CSS 4.xはPostCSS経由でビルドするため、`@tailwindcss/postcss`プラグインが必須。

---

## 3. globals.css docsフォルダ除外設定

### 問題
Tailwind CSSがdocsフォルダ内のマークダウンファイルをスキャンし、不要なクラス名を検出していた。

### 修正内容

#### src/app/globals.css
```css
@import "tailwindcss";

/* docsフォルダをスキャン対象から除外 */
@source not "../../docs";
```

### 理由
docsフォルダは仕様書のみを格納しており、実装コードではない。スキャン対象から除外することでビルド時間短縮と不要なクラス検出を防止。

---

## 4. 型安全性の向上（null許容対応）

### 問題
画像データがnullの可能性がある箇所で型エラーが発生。

### 修正内容

#### src/components/ui-features/home/MediaImage/MediaImage.tsx
```typescript
// Before
interface MediaImageProps {
  image: StaticImageData
  alt: string
}

// After
interface MediaImageProps {
  image: StaticImageData | null
  alt: string
}

// nullチェック追加
if (!image) {
  return null
}
```

#### src/components/ui-kit/content/CardTop/CardTop.tsx
```typescript
// Before
export interface CardTopProps {
  image: StaticImageData
  // ...
}

// After
export interface CardTopProps {
  image: StaticImageData | null
  // ...
}

// 条件付きレンダリング追加
{image && (
  <div className="w-full rounded-[16px_0px_16px_0px] overflow-hidden imgWrapper">
    <Image src={image} ... />
  </div>
)}
```

### 理由
APIからのデータ取得時に画像がnullになる可能性があり、型安全性を確保するため。

---

## 5. ContentFooter children省略対応

### 問題
ContentFooterコンポーネントでchildrenが渡されない場合にエラーが発生。

### 修正内容

#### src/components/ui-kit/layout/Content/Content.tsx
```typescript
// Before
export interface ContentFooterProps {
  children: ReactNode
}

export function ContentFooter({ children }: ContentFooterProps) {
  return <div>{children}</div>
}

// After
export interface ContentFooterProps {
  children?: ReactNode
}

export function ContentFooter({ children }: ContentFooterProps) {
  return children ? <div>{children}</div> : null
}
```

### 理由
フッターが不要な場面でコンポーネントを柔軟に使用できるようにするため。

---

## 6. Button className prop追加

### 問題
Buttonコンポーネントでカスタムクラスを渡せなかった。

### 修正内容

#### src/components/ui-kit/content/Button/Button.tsx
```typescript
// Before
export interface ButtonProps {
  // ...
}

export function Button({ children, href, type, onClick, modifierColor }: ButtonProps) {

// After
export interface ButtonProps {
  // ...
  className?: string
}

export function Button({ children, href, type, onClick, modifierColor, className: customClassName }: ButtonProps) {
  // ...
  const className = customClassName || `${baseClasses} ${textColorClass} ${beforeClasses}`
```

### 理由
既存のスタイルを上書きする必要がある箇所で柔軟に対応するため。

---

## 7. Background modifier修正

### 問題
Backgroundコンポーネントのprops名が不整合。

### 修正内容

#### src/app/page.tsx
```typescript
// Before
<Background modifier="home" />

// After
<Background home />
```

### 理由
仕様書に定義されたprops名（`home`ブール値）と実装を一致させるため。

---

## 8. microCMSクライアント ダミー値設定

### 問題
環境変数が未設定の場合、microCMSクライアント作成時にエラーが発生。

### 修正内容

#### src/features/api/microcms/microcms.ts
```typescript
// Before
const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})

// After
const serviceDomain = process.env.SERVICE_DOMAIN || 'example'
const apiKey = process.env.API_KEY || 'dummy-key'

const client = createClient({
  serviceDomain,
  apiKey,
})
```

### 理由
開発環境やビルド時に環境変数が未設定でもビルドを通すため。空文字列はmicroCMSクライアントで無効な値となる。

---

## 9. ESLint設定追加

### 問題
テストファイルで不要なESLintエラーが発生。

### 修正内容

#### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals", "next"],
  "overrides": [
    {
      "files": ["**/*.test.tsx", "**/*.test.ts"],
      "rules": {
        "react/display-name": "off",
        "jsx-a11y/alt-text": "off",
        "@next/next/no-img-element": "off"
      }
    }
  ]
}
```

### 理由
テストファイルではモックコンポーネントを使用するため、これらのルールを無効化。

---

## 10. tsconfig.json フォーマット修正

### 問題
tsconfig.jsonのフォーマットが整っていなかった。

### 修正内容
- 配列を複数行に展開
- `"target": "ES2017"` を追加

### 理由
可読性向上とTypeScript設定の明確化。

---

## 修正ファイル一覧

| ファイル | 修正内容 |
|---------|---------|
| .eslintrc.json | テストファイル用ESLint設定追加 |
| package.json | @tailwindcss/postcss, postcss追加 |
| package-lock.json | 依存関係更新 |
| postcss.config.mjs | PostCSS設定追加 |
| src/app/globals.css | docsフォルダ除外設定 |
| src/app/page.tsx | Background props修正 |
| src/app/case/[id]/page.tsx | params Promise化対応 |
| src/app/case/page.tsx | searchParams Promise化対応 |
| src/app/case/category/[slug]/page.tsx | params/searchParams Promise化対応 |
| src/app/news/[id]/page.tsx | params Promise化対応 |
| src/app/news/page.tsx | searchParams Promise化対応 |
| src/components/ui-features/home/MediaImage/MediaImage.tsx | null許容対応 |
| src/components/ui-kit/content/Button/Button.tsx | className prop追加 |
| src/components/ui-kit/content/CardTop/CardTop.tsx | null許容対応 |
| src/components/ui-kit/layout/Content/Content.tsx | children省略対応 |
| src/features/api/microcms/microcms.ts | ダミー値設定 |
| tsconfig.json | フォーマット修正、target追加 |

---

## ビルド結果

修正後、`npm run build` が正常に完了。

---

**レポート作成日時**: 2026-01-22
**レポート作成者**: AI Assistant
