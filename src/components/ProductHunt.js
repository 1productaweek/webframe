import React from 'react'
import { css } from '@emotion/core'

function ProductHunt ({ id }) {
  return (
    <a css={styles.container} href={`https://www.producthunt.com/posts/${id}`} target='_blank' rel='noopener noreferrer'>
      <div>
        <h3>We’re trending on ProductHunt!</h3>
        <p className='xs-hide sm-hide'>If you like Webframe, please check us over there and… 
        <span css={css`font-size: 1.4em; line-height: 7px; position: relative; top: 2px; margin-left: 0.3em;`} role='img' aria-label='wink'>😉</span></p>
      </div>
      <a>View</a>   
    </a>
  )
}

const styles = {
  container: css`
    display: flex;
    padding: 0.9em 1.1em;
    background: #da552f;
    font-size: 0.9em;
    color: #fff;
    div {
      display: flex;
      flex: 1 0 auto;
      p {
        margin-left: 1em;
        opacity: 0.9;
      }
    }
    a {
      display: block;
      color: #fff;
      opacity: 0.9;
    }
  `,
}

export default ProductHunt