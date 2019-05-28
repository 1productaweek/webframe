import React from 'react'
import { useRouteData } from 'react-static'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import List from 'components/List'
import Seo from 'components/Seo'
import About from 'components/About'

export default () => {
  const { screens } = useRouteData()
  return (
    <Layout>
      <Seo title='Beautiful web app screenshots' />
      <div css={css`margin-top: 0.5em;`}>
        <About />
        <List items={screens} />
      </div>
    </Layout>
  )
}