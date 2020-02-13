import React from 'react'
import { useRouteData, useSiteData } from 'react-static'
import { css } from '@emotion/core'
// 
import Seo from 'components/Seo'
import Layout from 'components/Layout'
import ImageListItem from 'components/ImageListItem'

export default function Categories () {
  const { categories } = useRouteData()
  const { CACHE_URL } = useSiteData()
  
  return (
    <Layout>
      <Seo title='Categories' />
      <h2>Categories</h2>
      <div css={css`margin-top: 1em;`}>
          {(categories || []).map(cat => (
              <ImageListItem
                title={cat.name}
                src={cat.screen ? `${CACHE_URL}/1200x/${cat.screen.src}` : ''}
                to={`/categories/${cat.id}`}
              />
          ))}
      </div>
    </Layout>
  )
}
