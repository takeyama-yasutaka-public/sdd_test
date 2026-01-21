# 型定義

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/api.ts, src/components/**/*.tsx

## TypeDefinitions(型定義)

### API関連型

CasePost
- id: string
- title: string
- content: string
- date: string
- eyecatch?: { url: string, width: number, height: number, blurDataURL?: string }
- category: Category[]

NewsPost
- id: string
- title: string
- content: string
- date: string

Category
- id: string
- name: string
- slug: string

ApiResponse<T>
- contents?: T[]
- totalCount?: number
- limit?: number
- offset?: number

### コンポーネントProps型

ButtonProps
- children: React.ReactNode
- href?: string
- type?: 'submit' | 'reset' | 'button' | undefined
- onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
- modifierColor?: string

HeadingProps
- children: React.ReactNode
- h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
- modifier: 'first' | 'second' | 'third'
- color?: string

CardProps
- href: string
- image: ImageData
- alt: string
- category: Category[]
- text: string

### フォーム型

FormTextProps
- name: string
- placeholder: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
- modifier?: string

FormTextareaProps
- name: string
- rows: number
- placeholder: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void

FormCheckboxProps
- name: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

FormRadioProps
- name: string
- value: string
- onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

### ナビゲーション型

Breadcrumb
- path: string
- name: string

GlobalNaviItem
- id: number
- english: string
- japanese: string
- path: string

### 状態管理型

DrawerState
- drawerDuration: number
- drawerState: boolean
- drawerWidthReset: boolean
- drawerToggle: () => void
- drawerClose: () => void
- drawerWidthResetOn: () => void
- drawerWidthResetOff: () => void

FooterWrapperState
- FooterWrapperTop: number
- setFooterWrapperTop: (num: number) => void

HeaderResetState
- headerResetState: boolean
- headerResetOn: () => void
- headerResetOff: () => void

LoadingState
- loadingState: boolean
- loadingOff: () => void

### ユーティリティ型

ImageData
- url: string
- width: number
- height: number
- blurDataURL?: string

## TypeSafety(型安全性)

### TypeScript設定

tsconfig.json
- strict: true
- noImplicitAny: true（推奨）
- strictNullChecks: true（推奨）

### 型定義の配置

/src/types/
- api.ts: API関連型定義
- components.ts: コンポーネントProps型定義
- forms.ts: フォーム型定義
- navigation.ts: ナビゲーション型定義
- state.ts: 状態管理型定義

## Implementation(実装)

### 型定義の集約

- /src/types/に型定義を集約
- 各モジュールから型定義をエクスポート
- 型定義の再利用性を向上

### any型の排除

- any型の使用を禁止
- 型推論を活用
- 型アサーションの最小化

## Test(テスト)

- 型定義の正確性
- 型の継承関係
- 型安全性の確認

## Other(その他)

依存関係
- TypeScript: 型定義

実装
- /src/types/ディレクトリの作成が必要
- 型定義の集約が必要

参考
- docs/plan/frontend_architecture_upgrade_plan.md: アーキテクチャアップグレードプラン