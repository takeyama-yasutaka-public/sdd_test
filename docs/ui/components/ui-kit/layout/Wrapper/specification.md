# Wrapper

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Wrapper

## Props(プロパティ)

- children: React.ReactNode

## Style(スタイル)

Wrapper共通
- relative flex-1 flex flex-col
- pt-20 (header-height-pc: 80px)
- md:pt-20 (header-height-sp: 80px)

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useDrawerStoreでドロワー状態を取得
- drawerState=true時: inert属性をtrueに設定
- drawerState=false時: inert属性をfalseに設定
- ヘッダー高さ分のpadding-topを設定

## Test(テスト)

- 通常表示
- drawerState=true時のinert属性
- drawerState=false時のinert属性

## Other(その他)

依存関係
- zustand: 状態管理
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント
- inert属性でアクセシビリティ対応

参考
- docs/ui/variables/spacing.md: スペーシング定義
- docs/features/utils/zustand/specification.md: 状態管理