import React from 'react'
import { css } from '@emotion/core'

import { Link } from 'components/base/Router'

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
  `,
}
