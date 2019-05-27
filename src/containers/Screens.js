import React from 'react'
import { useRouteData } from 'react-static'
import { css } from '@emotion/core'
import { Link } from 'components/base/Router'
// import tw from 'tailwind.macro'
import Layout from 'components/Layout'
import List from 'components/List'

function Screens () {
  const { parentTitle, parentPath, title, screens } = useRouteData()
  const hasScreens = screens && screens.length
  return (
    <Layout>
      {parentTitle && <Link css={css`display: inline-block; margin-right: 10px;`} to={parentPath}><h2>{ parentTitle }</h2></Link>}
      {parentTitle && <h2 css={css`display: inline-block; margin-right: 10px; color: #aaa;`}> / </h2>}
      {title && <h2 css={css`display: inline-block;`}>{ title }</h2>}
      <div css={css`margin-top: 1em;`}>
        {hasScreens ? <List items={screens} /> : <p>No screens found!</p>}
      </div>
    </Layout>
  )
}

export default Screens