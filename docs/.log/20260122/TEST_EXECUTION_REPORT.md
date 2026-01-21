# テスト実行レポート

日付: 2026-01-22
工程: テスト実行

## テスト実行結果サマリー

### 実行状況
- ✅ テスト実行完了
- ⚠️ 一部のテストが失敗

### 成功したテスト
- ✅ `src/features/utils/validation/validation.test.ts` - パス

### 失敗したテスト

#### 1. モジュールパス解決エラー
**影響を受けるテスト:**
- `src/components/ui-kit/layout/Header/Header.test.tsx`
- `src/components/ui-kit/content/NewsPosts/NewsPosts.test.tsx`

**エラー内容:**
```
Could not locate module @/features/utils/zustand mapped as:
C:\Users\harum\Documents\repository\public\sdd_test\src\$1.
```

**原因:**
Jestの`moduleNameMapper`設定が正しく機能していない可能性があります。

**対応方法:**
- `jest.config.js`の`moduleNameMapper`設定を確認
- パスのマッピングが正しいか確認

#### 2. lottie-web初期化エラー
**影響を受けるテスト:**
- `src/components/ui-kit/content/Media/Media.test.tsx`

**エラー内容:**
```
TypeError: Cannot set properties of null (setting 'fillStyle')
```

**原因:**
lottie-webがCanvasコンテキストを必要としているが、Jest環境では利用できない。

**対応方法:**
- lottie-webのモックを追加
- Canvas APIのモックを追加

#### 3. IntersectionObserver未定義エラー
**影響を受けるテスト:**
- `src/components/ui-kit/content/CardTop/CardTop.test.tsx`

**エラー内容:**
```
ReferenceError: IntersectionObserver is not defined
```

**原因:**
Jest環境では`IntersectionObserver`が利用できない。

**対応方法:**
- `jest.setup.js`に`IntersectionObserver`のモックを追加

#### 4. テスト期待値と実装の不一致

**4-1. Tableコンポーネント**
- エラー: `expect(table?.parentElement).toHaveClass('overflow-x-auto')`
- 問題: `modifierScroll='spScroll'`がテーブル要素自体に適用されているが、テストは親要素を期待している

**4-2. bodyScroll関数**
- エラー: `expect(document.body.style.overflow).toBe('hidden')` / `expect(document.body.style.position).toBe('fixed')`
- 問題: 実装がスタイルを直接設定していない可能性

**4-3. Cardコンポーネント**
- エラー: `blurDataURL`プロパティがDOM要素に渡されている
- 問題: Next.js Imageコンポーネントに正しく渡されていない

**4-4. HeadingJpnコンポーネント**
- エラー: `expect(heading).toHaveClass('flex', 'items-center', 'gap-[10px]')`
- 問題: テストが親要素のクラスを期待しているが、実際は子要素に適用されている

**4-5. HeadingEngコンポーネント**
- エラー: `Expected ref to be a function, an object returned by React.createRef(), or undefined/null.`
- 問題: `useInView`フックがrefを返しているが、テスト環境で正しく動作していない

#### 5. モジュール解決エラー
**影響を受けるテスト:**
- `src/components/ui-kit/layout/Footer/Footer.test.tsx`

**エラー内容:**
```
Cannot find module './FooterWrapper' from 'src/components/ui-kit/layout/Footer/Footer.test.tsx'
```

**原因:**
テストファイルのパスが正しくない可能性。

## 対応が必要な項目

### 優先度: 高

1. **Jest設定の修正**
   - `moduleNameMapper`の設定を確認・修正
   - `@/`パスエイリアスが正しく解決されるようにする

2. **テスト環境のモック追加**
   - `IntersectionObserver`のモック
   - `Canvas` APIのモック
   - `lottie-web`のモック

### 優先度: 中

3. **テストコードの修正**
   - 実装と一致するようにテストの期待値を修正
   - コンポーネントの構造に合わせてテストを更新

4. **実装の確認**
   - `bodyScroll`関数の実装を確認
   - `Card`コンポーネントの`blurDataURL`の扱いを確認

### 優先度: 低

5. **テストファイルのパス確認**
   - `Footer.test.tsx`のインポートパスを確認

## 次のステップ

1. Jest設定ファイルの修正
2. テスト環境のモック追加（`jest.setup.js`）
3. テストコードの修正
4. 再テスト実行
5. 全テスト通過の確認

---

**レポート作成日時**: 2026-01-22
**テスト実行環境**: Jest 30.2.0, jest-environment-jsdom 30.2.0
**ステータス**: テスト実行完了（要修正）
