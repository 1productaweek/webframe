import React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import SideNav from 'components/SideNav'

function Layout ({ children }) {
  return (
    <div css={css`${tw`flex py-4`}`}>
    <div css={styles.left}>
      <SideNav />
    </div>
    <div css={styles.right}>
      {children}
    </div>
  </div>
  )
}

const styles = {
  left: css`
    width: 170px;
    ${tw`
      px-4
    `}
  `,
  right: css`
    ${tw`
      px-4
      flex-1
    `}
  `,
}

export default Layout