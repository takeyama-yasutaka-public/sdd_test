# specification.md 記述例

## 記述ルール

簡潔に
- 生成コードより短く
- 箇条書き中心
- 強調マーク(なし)使用禁止

具体的に
- 曖昧な表現禁止(「適度な」「良い感じに」等)
- 数値を明示(「大きめ」→「48px」)
- 全ての状態を記載(hover, active, disabled等)

実用的に
- 人間が読めて理解して書き換えられること
- AIが読んで理解して実装に不足のない最低限の指示

---

## 記述テンプレート

```markdown
# コンポーネント名 / 機能名

バージョン: v1.0.0
更新日: YYYY-MM-DD
既存: src/path/to/component (既存コードがある場合)

## Props(プロパティ) ※コンポーネントの場合

必要なプロパティを列挙

- prop1: 説明
- prop2: 説明

## SectionName(セクション名)

内容に応じて適切なセクション名を使用
具体的な数値や状態を明示

- 項目1: 具体的な値
- 項目2: 具体的な値

## SectionName2(セクション名2)

必要に応じて複数セクション作成

- 項目1: 具体的な値
- 項目2: 具体的な値

## Test(テスト) ※テストが必要な場合

テストすべき項目

- テスト項目1
- テスト項目2

## Other(その他)

その他の補足情報

- 依存関係: 必要なパッケージやコンポーネント
- 注意点: 実装時の注意事項
- 参考: 関連する仕様書やドキュメント
```

---

## ui-kit

```markdown
# Button

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/content/Button

## Props(プロパティ)

- children: React.ReactNode
- variant?: 'primary' | 'secondary' | 'success' | 'alert'
- size?: 'sm' | 'md' | 'lg'
- disabled?: boolean
- icon?: React.ReactNode
- iconPosition?: 'start' | 'end'
- href?: string
- type?: 'button' | 'submit' | 'reset'
- onClick?: () => void
- className?: string

## Variant(バリアント)

primary
- bg-blue-600 text-white
- hover:bg-blue-700
- active:bg-blue-800
- disabled:opacity-50 cursor-not-allowed

secondary
- bg-white text-gray-600 border border-gray-600
- hover:bg-gray-100
- active:bg-gray-200
- disabled:opacity-50 cursor-not-allowed

success
- bg-green-600 text-white
- hover:bg-green-700
- active:bg-green-800
- disabled:opacity-50 cursor-not-allowed

alert
- bg-red-600 text-white
- hover:bg-red-700
- active:bg-red-800
- disabled:opacity-50 cursor-not-allowed

## Size(サイズ)

- sm: h-8 px-3 text-sm
- md: h-10 px-6 text-base (デフォルト)
- lg: h-12 px-8 text-lg

## Icon(アイコン)

- iconPosition='start': mr-2で配置
- iconPosition='end': ml-2で配置
- icon例: <ChevronRight className="w-4 h-4" />
- アイコンライブラリ: lucide-react

## Behavior(動作)

- href指定時: Next.js Link、cursor-pointer
- href未指定時: button要素
- disabled時: pointer-events-none

## Style(スタイル)

共通
- inline-flex items-center justify-center
- rounded-md
- font-semibold
- transition-colors duration-200
- focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2

## ButtonGroup(ボタングループ)

- flex flex-wrap gap-5

## Test(テスト)

- 各variant/size表示
- href/onClick動作
- icon表示位置
- disabled状態

## Other(その他)

依存関係
- lucide-react: アイコン
- Next.js Link: ルーティング
- class-variance-authority: バリアント管理

実装
- CVAでバリアント定義
- href有無で要素切り替え(Link/button)
```

---

## ui-features

```markdown
# Pager

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/function/Pager

## Props(プロパティ)

- PER_PAGE: number - 1ページあたりの表示件数
- totalCount: number - 総件数
- path?: string - ベースパス(デフォルト/)
- id?: number - 現在のページ番号(1スタート、未指定時は1)

## Features(機能)

ページ番号配列生成
- range(1, Math.ceil(totalCount / PER_PAGE))
- 1ページのみの場合は非表示

省略表示: 6ページ以上で...表示
- 前半(c<5): [1,2,3,4,5,0,n]
- 中央: [1,0,c-1,c,c+1,0,n]
- 後半(c>n-4): [1,0,n-4,n-3,n-2,n-1,n]

## Components(使用コンポーネント)

Pager
- <nav className="..."><ul>でラップ

PagerItem
- type='number': 通常ページ番号、Link
- type='current': 現在ページ、span、pointer-events-none
- type='dots': ...表示、span、pointer-events-none
- type='prev': 前へボタン、<ChevronLeft />、最初のページで非表示
- type='next': 次へボタン、<ChevronRight />、最後のページで非表示

## Icon(アイコン)

- prev: <ChevronLeft className="w-4 h-4" />
- next: <ChevronRight className="w-4 h-4" />
- アイコンライブラリ: lucide-react

## Style(スタイル)

共通
- w-8 h-8 (32x32px)
- flex items-center justify-center
- transition-colors

ボタン/リンク(number/prev/next)
- bg-gray-600 text-white
- hover:bg-gray-800

current
- bg-white text-gray-600 border border-gray-600
- pointer-events-none

dots
- bg-transparent text-gray-600
- pointer-events-none

border-radius
- 最初の子: rounded-l-md
- 最後の子: rounded-r-md

## Test(テスト)

- ページ数算出: Math.ceil(totalCount / PER_PAGE)
- 省略表示パターン: 前半/中央/後半
- prev/next表示/非表示: 最初/最後のページ判定
- current状態: クリック不可

## Other(その他)

依存関係
- Content.Pager: ui-kit/layout
- Content.PagerItem: ui-kit/navigation
- lucide-react: ChevronLeft, ChevronRight
- Next.js Link: ページ遷移

注意点
- 0の配列値は...表示として扱う
- idが未指定の場合は1ページ目として扱う
```

---

## features

```markdown
# bodyScroll

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/lib/bodyScroll.ts

## Functions(関数)

- bodyScrollStop(): bodyスクロール停止
- bodyScrollStart(NavigationEvents?: boolean): bodyスクロール再開

## BodyScrollStop(スクロール停止実装)

- iOS判定: position:fixed + top:負のscrollY
- スクロールバー判定: position:fixed + html overflow-y:scroll
- その他: overflow:hidden
- bodyScrollFlag = true

## BodyScrollStart(スクロール再開実装)

- bodyScrollFlagがtrueの場合のみ実行
- スタイル除去 + 元の位置にscrollTo
- NavigationEvents=trueなら最上部へ
- bodyScrollFlag = false

## CheckiOS(iOS判定)

- userAgent判定(iphone/ipad/macintosh+touch)

## CheckScrollBar(スクロールバー判定)

- innerWidth - body.clientWidthで判定

## Test(テスト)

- iOS/非iOS動作
- スクロール位置保持
- スタイル付与/除去

## Other(その他)

依存関係
- なし(Pure JavaScript)

注意点
- モーダルやドロワー開閉時に使用
- bodyScrollFlagはモジュールスコープのフラグ
- 複数回呼び出しても安全

使用例
- モーダル開く時: bodyScrollStop()
- モーダル閉じる時: bodyScrollStart()
- ページ遷移時: bodyScrollStart(true)
```

---

## pages

```markdown
# ブログ一覧

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/app/blog/page.tsx

## Settings(ページ設定)

- pageName: BLOG
- pageSlug: blog
- PER_PAGE: prePage.blog

## Data(データ取得)

- getBlogAll(1, PER_PAGE): microCMS API
- eyecatch未設定時: eyecatchLocal代替
- plaiceholder: ブラー画像生成

## Structure(構成)

- Function.StructuredData: 構造化データ
- Layout.PageVisual: ページビジュアル
- Layout.Breadcrumb: パンくず
- Content.Heading: h2見出し
- Content.BlogPosts: ブログ記事一覧
  - BlogPostsItem: id, eyecatch, title, category, date, content
- Function.Pager: ページネーション
- PageCommon.CtaArea: CTAエリア

## Metadata(メタデータ)

- title: BLOG | siteTitle
- description: siteDesc
- canonical: /blog
- OGP/Twitter設定

## Test(テスト)

- データ取得
- eyecatch代替処理
- 記事一覧表示
- ページネーション

## Other(その他)

依存関係
- microCMS: ブログAPI
- plaiceholder: 画像ブラー生成
- Function.StructuredData: 構造化データ
- Layout: PageVisual, Breadcrumb, Container, Content
- Content: Heading, BlogPosts
- Function.Pager: ページネーション
- PageCommon.CtaArea: CTA

実装
- Server Component
- ISR: revalidate 3600秒
- エラー時: error.tsxでハンドリング
```

---

## variables

```markdown
# カラー

バージョン: v1.0.0
更新日: 2026-01-21

## Primitive(基本カラー)

直接使用禁止

- p-grey-50: #f2f2f2
- p-grey-900: #1a1a1a
- p-blue-600: #3460FB

## Semantic(用途別カラー)

実装で使用

- text-body: p-grey-900
- link-normal: p-blue-900
- button-normal: p-grey-600

## Other(その他)

実装
- tailwind.config.jsのtheme.extend.colorsに定義
- Primitiveカラーは直接使用禁止、Semanticカラーのみ使用

参考
- docs/ui/variables/: 他のデザイントークン
- WCAG AA準拠(コントラスト比 4.5:1以上)
```