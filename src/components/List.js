import React from 'react'
import { css } from '@emotion/core'
import useModal from 'components/modals/useModal'
import tw from 'tailwind.macro'
import ScreenModal from './ScreenModal'

function List ({ items }) {
  const showModal = useModal(ScreenModal)

  const itemsEl = (items || []).map(({ src, name }, i) => (
    <div 
      key={src || i}
      onClick={() => showModal({ src, name })}
      css={styles.screen} 
      style={{ maxHeight: 500 + 200 * Math.random()  }}>
      <img src={src} alt={name} />
    </div>
  ))
  return (
    <div css={css`${tw`flex flex-wrap -m-2`}`}>
      <div  css={css`${tw`w-1/2 p-2`}`}>
        {itemsEl.filter((_, i) => i % 2 === 0)}
      </div>
      <div css={css`${tw`w-1/2 p-2`}`}>
      {itemsEl.filter((_, i) => i % 2 !== 0)}
      </div>
    </div>
  )
}

const styles = {
  screen: css`
    ${tw`
      mb-4
      w-full
      bg-gray-300
      rounded
      overflow-hidden
      border
      border-gray-300
      border-solid
    `}
  `,
}

export default List