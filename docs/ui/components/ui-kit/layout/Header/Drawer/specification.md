# Drawer

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Header/Drawer

## Props(プロパティ)

- なし（固定コンテンツ）

## Style(スタイル)

Drawer共通
- ul要素
- modifier='active'時: アクティブ状態
- style={{ '--duration': `${drawerDuration}ms` }}
- contactWrapper: お問い合わせラッパー
- contact: Link要素

## Components(使用コンポーネント)

- DrawerItem: 各ドロワー項目
- globalNavi.items: グローバルナビゲーション
- ContactNavi: お問い合わせナビゲーション

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- useDrawerStoreでドロワー状態を取得
- drawerState=true時: right = drawerWidth - 1px, bodyScrollStop
- drawerState=false時: right = 0, bodyScrollStart
- ウィンドウリサイズ時: min-width:992pxでdrawerClose
- headerResetState=true時: transitionを一時的にnoneに設定
- 初期表示時: right = 0

## Test(テスト)

- drawerState=true/false時の動作
- ウィンドウリサイズ時の動作
- headerResetState=true時の動作

## Other(その他)

依存関係
- DrawerItem: ドロワー項目
- zustand: 状態管理
- bodyScroll: スクロール制御
- Next.js Link: ルーティング
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント

参考
- docs/ui/components/ui-kit/layout/Header/Drawer/DrawerItem/specification.md: ドロワー項目
- docs/features/utils/bodyScroll/specification.md: スクロール制御