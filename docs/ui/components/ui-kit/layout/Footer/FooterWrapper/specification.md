# FooterWrapper

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Footer/FooterWrapper

## Props(プロパティ)

- children: React.ReactNode

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useDrawerStoreでドロワー状態を取得
- drawerState=true時: inert属性をtrueに設定
- drawerState=false時: inert属性をfalseに設定
- スクロール時: FooterWrapperTopをzustandに保存

## Test(テスト)

- drawerState=true/false時のinert属性
- スクロール時のFooterWrapperTop保存

## Other(その他)

依存関係
- zustand: 状態管理
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント
- inert属性でアクセシビリティ対応

参考
- docs/features/utils/zustand/specification.md: 状態管理