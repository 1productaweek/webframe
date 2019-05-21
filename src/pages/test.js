import React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1 css={css`${tw`bg-blue-600`}`}>TEST</h1>
  </div>
)
