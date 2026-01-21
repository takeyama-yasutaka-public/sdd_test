/**
 * ConvertBody
 * 仕様書: docs/ui/components/ui-features/ConvertBody/specification.md
 */

import parse, { HTMLReactParserOptions, Element } from 'html-react-parser'
import Image from 'next/image'

interface ConvertBodyProps {
  contentHTML: string
}

/**
 * ConvertBodyコンポーネント
 * HTML文字列をReact要素に変換
 * img要素をNext.js Imageに置換
 */
export function ConvertBody({ contentHTML }: ConvertBodyProps) {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'img') {
        const src = domNode.attribs.src || ''
        const alt = domNode.attribs.alt || ''
        const width = domNode.attribs.width ? parseInt(domNode.attribs.width, 10) : 800
        const height = domNode.attribs.height ? parseInt(domNode.attribs.height, 10) : 600

        return (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
          />
        )
      }
    },
  }

  return <>{parse(contentHTML, options)}</>
}
