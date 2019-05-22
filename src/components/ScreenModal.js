import React from 'react'
import { useSiteData } from 'react-static'
import Modal from 'react-modal'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'components/Router'
import Button from './Button'
import cancel from 'img/cancel.png'

const customStyles = {
  content : {
    padding: 0,
    top: 20,
    bottom: 60,
  }
}

Modal.setAppElement('#root')

const AButton = Button.withComponent('a')

function ScreenModal ({ isOpen, onCancel, product, src, name }) {
  const { DOWNLOAD_URL } = useSiteData()
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCancel}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img css={css`width: 100%;`} src={src} alt={name} />
      </Modal>
      <div><img css={styles.close} onClick={onCancel} src={cancel} alt='close' width={20} /></div>
      <div css={styles.footer}>
        <AButton href={`${DOWNLOAD_URL}?image=${src}`} download={name}>Download</AButton>
        <Link onClick={onCancel} css={styles.viewAll} to={`/products/${product.id}`}>View all {product.name || product.id}</Link>
        { product.domain && <a css={styles.domain} target='_blank' rel='noreferrer noopener' href={`https://${product.domain}`}>{product.domain}</a> }
      </div>
    </>
  )
}

const styles = {
  viewAll: css`
    ${tw`
      mx-2
      text-sm
    `}
  `,
  domain: css`
    float: right;
    display: block;
    padding: 0.8em 0;
    ${tw`
      mx-2
      text-sm
    `}
  `,
  close: css`
    position: fixed;
    top: 25px;
    right: 15px;
    z-index: 10;
    width: 15px;
    cursor: pointer;
  `,
  footer: css`
    position: fixed; 
    height: 40px;
    bottom 10px; 
    right: 40px;
    left: 40px;
    z-index: 10;
  `
}

export default ScreenModal