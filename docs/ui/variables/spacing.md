# スペーシング

バージョン: v1.0.0
更新日: 2026-01-21
既存: src/styles/global/_variables.scss

## ContentWidth(コンテンツ幅)

- content: 1200px
- content-small: 1000px

## SidebarWidth(サイドバー幅)

- sidebar-2column: 200px
- sidebar-3column-left: 180px
- sidebar-3column-right: 160px

## HeaderHeight(ヘッダー高さ)

- header-pc: 5rem (80px)
- header-sp: 5rem (80px)

## ZIndex(z-index)

- z-pagetop: 10
- z-drawer-overlay: 20
- z-header: 30
- z-modal: 40
- z-loading: 50

## Elevation(影)

- elevation-1: 0px 2px 8px 1px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.3)
- elevation-2: 0px 2px 12px 2px rgba(0, 0, 0, 0.1), 0px 1px 6px 0px rgba(0, 0, 0, 0.3)
- elevation-3: 0px 4px 16px 3px rgba(0, 0, 0, 0.1), 0px 1px 6px 0px rgba(0, 0, 0, 0.3)
- elevation-4: 0px 6px 20px 4px rgba(0, 0, 0, 0.1), 0px 2px 6px 0px rgba(0, 0, 0, 0.3)
- elevation-5: 0px 8px 24px 5px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.3)
- elevation-6: 0px 10px 30px 6px rgba(0, 0, 0, 0.1), 0px 3px 12px 0px rgba(0, 0, 0, 0.3)
- elevation-7: 0px 12px 36px 7px rgba(0, 0, 0, 0.1), 0px 3px 14px 0px rgba(0, 0, 0, 0.3)
- elevation-8: 0px 14px 40px 7px rgba(0, 0, 0, 0.1), 0px 3px 16px 0px rgba(0, 0, 0, 0.3)

## Transition(トランジション)

- transition-high: 0.1s
- transition-middle: 0.3s
- transition-low: 0.5s

## Other(その他)

実装
- tailwind.config.jsのtheme.extendに定義
- maxWidth: content, content-small
- spacing: Tailwindデフォルト（4px単位）を使用
- zIndex: z-pagetop-z-loading
- boxShadow: elevation-1-elevation-8
- transitionDuration: high, middle, low

参考
- docs/ui/variables/: 他のデザイントークン