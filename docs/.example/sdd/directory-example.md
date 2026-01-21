# ディレクトリ構造例

## フロントエンド基本構造

```
/docs
    /README.md
    /ui
        /.old
        /.example
        /README.md
        /package.md
        /image
            /{ファイル名}
            ...
        /variables
            /{カテゴリ名}(例：colors).md
            ...
        /components
            /ui-kit
                /{カテゴリ名}(例：content)
                    /{コンポーネント名}(例：Button)
                        /specification.md
                        /image.png
                    ...
                /{カテゴリ名}(例：layout)
                    /{コンポーネント名}(例：Wrapper)
                        /specification.md
                    ...
                ...
            /ui-features
                /{機能名}
                    /specification.md
                ...
        /pages
            /{ページ名}
                /specification.md
            ...
    /features
        /.old
        /.example
        /README.md
        /package.md
        /{機能カテゴリ名}
            /README.md
            /{機能名}
                /specification.md
                /image.png
            ...
        ...
    /env.example
        /README.md
        /specification.md
        ...
    /schemas
        /README.md
        /api
            /specification.md
```

## ディレクトリ説明

/ui
- UIデザインシステム関連
- /.old: 過去バージョンのバックアップ
- /.example: テンプレート・サンプル
- /README.md: UIシステム概要
- /package.md: 使用パッケージ一覧
- /image: 共通画像・アイコン
- /variables: デザイントークン(色、タイポグラフィなど)
- /components/ui-kit: 純粋デザインコンポーネント
- /components/ui-features: ロジック統合コンポーネント
- /pages: ページ仕様

/features
- ビジネスロジック関連
- /.old: 過去バージョンのバックアップ
- /.example: テンプレート・サンプル
- /README.md: 機能システム概要
- /package.md: 使用パッケージ一覧
- /{機能カテゴリ名}: 機能ごとのディレクトリ

/env.example
- 環境変数設定例
- /README.md: 環境変数概要
- /specification.md: 各環境変数の説明

/schemas
- データスキーマ定義
- /api: API仕様