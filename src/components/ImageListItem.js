import React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'components/Router'

export default function ImageListItem ({ to, title, src }) {
  return (
    <Link to={to}>
      <div>
        <div css={styles.box}>
          <img alt={title} src={src} />
        </div>
        <h4 css={css`padding: 0.3em;`}>{title}</h4>
      </div>
    </Link>
  )
}

const styles = {
  box: css`
    height: 200px;
    background: #eee;
    overflow: hidden;
    ${tw`
      rounded
      overflow-hidden
      border
      border-solid
      border-gray-300
    `}
  `,
}
