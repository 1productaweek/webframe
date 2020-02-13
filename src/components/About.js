import React from 'react'
import { css } from '@emotion/core'

import profileImg from 'img/profile.png'
// import { Link } from './base/Router'

export default function About ({ forceShow, title = <span>Hello <span role='img' aria-label='wave'>👋</span></span> }) {
  return (
    <div css={styles.box}>
      <img src={profileImg} alt='profile' css={styles.profile} />
      <h6 >{title}</h6>
      <p >
        I’m Calum - I made Webframe as part of a challenge to build and launch <a target='_blank' href='https://1productaweek.com/why-one-product-a-week'>1 product every week</a>. Check out the blog or follow at
        <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/1productaweek'> @1productaweek</a>. Enjoy!</p>
    </div>
  )
}

const styles = {
  box: css`
    max-width: 900px;
  `,
  profile: css``,
}
