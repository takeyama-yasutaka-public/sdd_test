/**
 * Table コンポーネントテスト
 * 仕様書: docs/ui/components/ui-kit/content/Table/specification.md
 */

import { render, screen } from '@testing-library/react'
import { Table, TableAbout } from './Table'

describe('Table', () => {
  // Table: 通常表示
  it('renders table', () => {
    const { container } = render(
      <Table modifierDimension="horizontal">
        <thead>
          <tr>
            <th>ヘッダー1</th>
            <th>ヘッダー2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>データ1</td>
            <td>データ2</td>
          </tr>
        </tbody>
      </Table>
    )
    const table = container.querySelector('table')
    expect(table).toBeInTheDocument()
    expect(screen.getByText('ヘッダー1')).toBeInTheDocument()
    expect(screen.getByText('データ1')).toBeInTheDocument()
  })

  // Table: modifierDimension各パターン
  it('applies horizontal dimension modifier', () => {
    const { container } = render(
      <Table modifierDimension="horizontal">
        <thead>
          <tr>
            <th>ヘッダー</th>
          </tr>
        </thead>
      </Table>
    )
    const table = container.querySelector('table')
    expect(table).toBeInTheDocument()
  })

  // Table: modifierScroll='spScroll'時の横スクロール
  it('applies scroll modifier', () => {
    const { container } = render(
      <Table modifierDimension="horizontal" modifierScroll="spScroll">
        <thead>
          <tr>
            <th>ヘッダー</th>
          </tr>
        </thead>
      </Table>
    )
    const table = container.querySelector('table')
    // overflow-x-autoはtable自体に付与される
    expect(table).toHaveClass('overflow-x-auto')
  })
})

describe('TableAbout', () => {
  // TableAbout: 通常表示
  it('renders table', () => {
    const { container } = render(
      <TableAbout>
        <thead>
          <tr>
            <th>ヘッダー</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>データ</td>
          </tr>
        </tbody>
      </TableAbout>
    )
    const table = container.querySelector('table')
    expect(table).toBeInTheDocument()
  })
})
