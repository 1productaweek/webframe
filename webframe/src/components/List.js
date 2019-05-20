import React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

function List ({ items }) {
  const itemsEl = (items || []).map(({ src, title }, i) => (
    <div key={src || i} css={css`${tw`w-1/2 p-2`}`}>
      <div css={styles.screen}>
        <img src={src} alt={title} />
      </div>
    </div>
  ))
  return (
    <div css={css`${tw`flex flex-wrap -m-2`}`}>
      {itemsEl}
    </div>
  )
}

const styles = {
  screen: css`
    ${tw`
      w-full
      h-64
      bg-gray-300
    `}
  `,
}

export default List