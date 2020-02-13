import React from 'react'
import { useRouteData } from 'react-static'
import { css } from '@emotion/core'
// 
import Seo from 'components/Seo'
import Layout from 'components/Layout'
import ImageListItem from 'components/ImageListItem'

export default function Categories () {
  const { products } = useRouteData()
  return (
    <Layout>
      <Seo title='Products' />
      <h2>Products</h2>
      <div css={css`margin-top: 1em;`}>
          {(products || []).map(prod => (
              <ImageListItem
                title={prod.name}
                src={prod.screen && prod.screen.src} 
                to={`/products/${prod.id}`}
              />
          ))}
      </div>
    </Layout>
  )
}
