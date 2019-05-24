import React from 'react'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import LazyLoad from 'react-lazyload'
import useModal from 'components/modals/useModal'
import ScreenModal from './ScreenModal'
import { Row, Col } from './grid'

function List ({ items }) {
  const { CACHE_URL } = useSiteData()
  const showModal = useModal(ScreenModal)

  const itemsEl = (items || []).map(({ src, name, maxHeight, product }, i) => (
    <LazyLoad height={200} offset={[0, 400]} once resize>
      <div 
        key={src || i} 
        onClick={() => showModal({ src, name, product })}
        css={styles.screen} 
        style={{ minHeight: 50, maxHeight }}>
        <img src={`${CACHE_URL}/1200x/${src}`} alt={name} />
      </div>
    </LazyLoad>
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