import React from 'react'
import { Link } from 'components/Router'
import logo from 'img/logo.png'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export default function Nav () {
  return (
    <nav css={css`${tw`p-4`}`}>
      <Link to="/">
        <img width={101} src={logo} alt='Webframe Logo' />
      </Link>
      <p css={css`${styles.tagline} top: -2px;`}>Discover beautiful web app designs</p>
    </nav>
  )
}

const styles = {
  tagline: tw`
    inline-block
    text-gray-500
    font-semibold
    ml-4
    relative
  `,
}