/* eslint-disable react/jsx-no-target-blank */

import React from 'react'
import { css } from '@emotion/core'

export default function Promo () {
  return (
    <div css={styles.container}>
      <a target='_blank' href='https://1productaweek.com'>
        1ProductAWeek
      </a>
    </div>
  )
}

const styles = {
  container: css`
    position: fixed;
    bottom: 0;
    right: 0;
    border: 1px solid #eee;
    border-width: 1px 0px 0px 1px; 
    border-top-left-radius: 0.3em;
    background: rgba(256, 256, 256, 0.9);
    font-size: 0.8em;
    cursor: pointer;
    padding: 0.6em;
    a {
      color: #666;
    }
  `,
}