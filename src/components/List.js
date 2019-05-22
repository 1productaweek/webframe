import React from 'react'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'
import useModal from 'components/modals/useModal'
import tw from 'tailwind.macro'
import ScreenModal from './ScreenModal'
import { Row, Col } from './grid'

function List ({ items }) {
  const { CACHE_URL } = useSiteData()
  const showModal = useModal(ScreenModal)

  const itemsEl = (items || []).map(({ src, name, product }, i) => (
    <div 
      key={src || i}
      onClick={() => showModal({ src, name, product })}
      css={styles.screen} 
      style={{ maxHeight: 500 + 200 * Math.random()  }}>
      <img src={`${CACHE_URL}/1200x/${src}`} alt={name} />
    </div>
  ))
  return (
    <Row gutter={2}>
      <Col col={12} sm={6} gutter={2} css={css`max-width: 600px;`}>
        {itemsEl.filter((_, i) => i % 2 === 0)}
      </Col>
      <Col col={12} sm={6} gutter={2} css={css`max-width: 600px;`}>
        {itemsEl.filter((_, i) => i % 2 !== 0)}
      </Col>
    </Row>
  )
}

const styles = {
  screen: css`
    cursor: pointer;
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