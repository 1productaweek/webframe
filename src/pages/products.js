import React from 'react'
import { useRouteData } from 'react-static'
import { css } from '@emotion/core'
// import tw from 'tailwind.macro'
import Layout from 'components/Layout'
import { Row, Col } from 'components/grid'
import ImageListItem from 'components/ImageListItem'

export default function Categories () {
  const { products } = useRouteData()
  return (
    <Layout>
      <h2>Products</h2>
      <div css={css`margin-top: 1em;`}>
        <Row gutter={2}>
          {(products || []).map(prod => (
            <Col gutter={2} col={12} sm={4} mb={2} key={prod.id}>
              <ImageListItem
                title={prod.name}
                src={prod.screen && prod.screen.src} 
                to={`/products/${prod.id}`}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  )
}
