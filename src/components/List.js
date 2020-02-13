import React from 'react'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'

import LazyLoad from 'react-lazyload'
import useModal from 'components/modals/useModal'
import ScreenModal from './ScreenModal'

function List ({ items=[] }) {
  const { CACHE_URL } = useSiteData()
  const showModal = useModal(ScreenModal)

  return (
    items.map(({ src, name, maxHeight = (500 + 200 * Math.random()), product }, i) => (
          <LazyLoad key={src || i} height={200} offset={[0, 400]} once resize>
            <div 
              onClick={() => showModal({ src, name, product })}
              css={styles.screen} 
              style={{ minHeight: 50, maxHeight }}>
              <img src={`${CACHE_URL}/1200x/${src}`} alt={name} />
            </div>
          </LazyLoad>
    ))
  )
  
  }

const styles = {
  screen: css`
    cursor: pointer;
  `,
}

export default List