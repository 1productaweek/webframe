import React from 'react'
import { useRouteData } from 'react-static'
import { css } from '@emotion/core'
// import tw from 'tailwind.macro'
import List from 'components/List'
import Layout from 'components/Layout'

const items = [{}, {}, {}, {}]

function Category () {
  const { category } = useRouteData()
  return (
    <Layout>
      <h2 css={css`margin-bottom: 1em;`}>{ category.name}</h2>
      <List items={items} />
    </Layout>
  )
}

export default Category