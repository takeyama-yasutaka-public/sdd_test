# クリーンアップファイル選定報告書

作成日: 2026-01-22

## 概要

仕様書（docs/ui/, docs/features/, docs/schemas/）に基づく実装のために、既存ファイルの削除対象を選定しました。

## 実装方針

仕様書に基づいて全実装を新規作成するため、既存の実装ファイルは削除対象です。

### 実装内容

1. **UIコンポーネント実装**
   - ui-kit: 37件（Tailwind CSSで実装）
   - ui-features: 11件（Tailwind CSSで実装）

2. **ページ実装**
   - 10ページ（仕様書に基づいて実装）

3. **機能実装**
   - API関数（microcms, contact-handler, mocks）
   - ユーティリティ関数（bodyScroll, validation, formatDate等）
   - 設定（Next.js, エラーハンドリング, パフォーマンス）

4. **ディレクトリ構造**
   - /docsと/srcを1対1対応で実装

## 削除対象ファイル一覧

### 合計: 213件

- SCSSファイル: 66件
- コンポーネントファイル: 62件
- ページファイル: 18件
- ライブラリファイル: 9件
- スタイルディレクトリ: 1ディレクトリ
- 画像ファイル: 57件

---

### 1. SCSSファイル（66件）

#### CSS Modules（52件）
- src/components/**/*.module.scss（全コンポーネント）
- src/app/**/*.module.scss（全ページ）

#### グローバルSCSS（14件）
- src/styles/**/*.scss（全ファイル）
- src/styles/style.scss

---

### 2. コンポーネントファイル（62件）

#### components/content/（15件の.tsx + 1件の.ts）
- src/components/content/**/*.tsx
- src/components/content/index.ts

#### components/form/（4件の.tsx + 1件の.ts）
- src/components/form/**/*.tsx
- src/components/form/index.ts

#### components/layout/（18件の.tsx + 1件の.ts）
- src/components/layout/**/*.tsx
- src/components/layout/index.ts

#### components/function/（4件の.tsx + 1件の.ts）
- src/components/function/**/*.tsx
- src/components/function/index.ts

#### components/page/（8件の.tsx + 3件の.ts）
- src/components/page/**/*.tsx
- src/components/page/**/index.ts

#### components/action/（1件の.tsx + 1件の.ts）
- src/components/action/**/*.tsx
- src/components/action/index.ts

**合計**: 53件の.tsx + 9件の.ts = 62件

---

### 3. ページファイル（18件）

#### app/配下（layout.tsxを除く）
- src/app/page.tsx
- src/app/about/page.tsx
- src/app/case/page.tsx
- src/app/case/[id]/page.tsx
- src/app/case/[id]/draft/page.tsx
- src/app/case/page/[id]/page.tsx
- src/app/case/category/[slug]/page.tsx
- src/app/case/category/[slug]/page/[id]/page.tsx
- src/app/news/page.tsx
- src/app/news/[id]/page.tsx
- src/app/news/[id]/draft/page.tsx
- src/app/news/page/[id]/page.tsx
- src/app/contact/page.tsx
- src/app/contact/finish/page.tsx
- src/app/service/page.tsx
- src/app/privacy/page.tsx
- src/app/component/page.tsx
- src/app/not-found.tsx
- src/app/api/contact-handler/route.ts（仕様書に基づいて再実装）

**注意**: src/app/layout.tsxは残す（Next.js App Routerのルートレイアウト）

**合計**: 18件

---

### 4. ライブラリファイル（9件）

#### lib/配下
- src/lib/api.ts（仕様書に基づいて再実装）
- src/lib/bodyScroll.ts（仕様書に基づいて再実装）
- src/lib/constants.ts（仕様書に基づいて再実装）
- src/lib/extract-text.ts（仕様書に基づいて再実装）
- src/lib/fonts.ts（仕様書に基づいて再実装）
- src/lib/formatDate.ts（仕様書に基づいて再実装）
- src/lib/getImageBuffer.ts（仕様書に基づいて再実装）
- src/lib/validation.ts（仕様書に基づいて再実装）
- src/lib/zustand.ts（仕様書に基づいて再実装）

**合計**: 9件

---

### 5. スタイルディレクトリ（1ディレクトリ）

- src/styles/（ディレクトリ全体）

---

### 6. 画像ファイル（57件）

#### src/images/配下（54件）
- src/images/**/*.png（全PNGファイル）
- src/images/**/*.json（media_model.json）
- src/images/web-corporation/配下の全ファイル

#### public/favicon/配下（2件）
- public/favicon/apple-touch-icon.png
- public/favicon/favicon.ico

#### public/images/配下（1件）
- public/images/no-image.png

**注意**: 画像ファイルは既に`docs/ui/image/`にコピー済みのため、元の場所の画像は削除対象です。

**合計**: 57件

---

## 残すファイル

### 設定ファイル
- src/app/layout.tsx（Next.js App Routerのルートレイアウト）
- next.config.mjs（仕様書に基づいて更新）
- package.json（仕様書に基づいて更新）
- tsconfig.json（必要に応じて更新）

### その他
- public/配下のその他のファイル（favicon/、images/以外）

---

## バックアップ確認

### ✅ 全ファイルがバックアップ済み

バックアップ先: `docs/.old/20260122/backup/`

全ての削除対象ファイル（213件）がバックアップディレクトリに存在することを確認しました。

### 画像ファイルのバックアップ確認

- src/images/配下の54件: ✅ バックアップ済み
- public/favicon/配下の2件: ✅ バックアップ済み
- public/images/配下の1件: ✅ バックアップ済み
- docs/ui/image/にコピー済み: ✅ 完了

---

## 削除後の実装方針

### ディレクトリ構造

仕様書に基づいて、/docsと/srcを1対1対応で実装：

```
/src
  /app                    # Next.js App Router（ページ実装）
  /components
    /ui-kit              # デザインコンポーネント
      /content
      /layout
      /form
      /navigation
      /action
    /ui-features         # ロジック統合コンポーネント
  /features              # ビジネスロジック
    /api
    /utils
    /config
  /types                 # 型定義
```
```

### 実装順序

1. ディレクトリ構造作成
2. テストコード作成
3. コンポーネント実装（Tailwind CSS）
4. ページ実装
5. 機能実装

---

## 次のステップ

1. ユーザー確認を待つ
2. 確認後、削除を実行
3. Implementation工程に進む
