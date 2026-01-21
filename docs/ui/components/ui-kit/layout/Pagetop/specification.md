# Pagetop

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/components/layout/Pagetop

## Props(プロパティ)

- なし

## Style(スタイル)

Pagetop共通
- fixed bottom-5 right-5 z-10
- modifier='active'時: 表示
- modifier=''時: 非表示

Pagetop inner
- flex flex-col items-center gap-1

Pagetop p
- "top"テキスト

Pagetop icon
- Font Awesome faAngleUp
- 上矢印アイコン

## Behavior(動作)

- 'use client'でクライアントコンポーネント
- scrollY >= 1で表示
- クリックでwindow.scroll({ top: 0, behavior: 'smooth' })
- aria-label="トップへ戻る"

## Test(テスト)

- スクロール時の表示/非表示
- クリック時のスクロール動作

## Other(その他)

依存関係
- Font Awesome: アイコン（lucide-reactに移行予定）
- zustand: 状態管理（FooterWrapperTop取得）
- Tailwind CSS: スタイリング

実装
- Tailwind CSSクラスのみ使用
- 'use client'でクライアントコンポーネント
- Font Awesomeからlucide-reactに移行

参考
- docs/ui/variables/colors.md: カラー定義