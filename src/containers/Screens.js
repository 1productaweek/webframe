import React from 'react'
import { useRouteData } from 'react-static'
import { css } from '@emotion/core'
// import tw from 'tailwind.macro'
import List from 'components/List'
import Layout from 'components/Layout'

function Category () {
  const { title, screens } = useRouteData()
  const hasScreens = screens && screens.length
  return (
    <Layout>
      {title && <h2 css={css`margin-bottom: 1em;`}>{ title }</h2>}
      {hasScreens ? <List items={screens} /> : <p>No screens found!</p>}
    </Layout>
  )
}

export default Category