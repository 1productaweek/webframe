import React from 'react'
import { useSiteData } from 'react-static'
import Modal from 'react-modal'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'components/Router'
import Button from './Button'

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
      <div css={styles.footer}>
        <AButton href={`${DOWNLOAD_URL}?image=${src}`} download={name}>Download</AButton>
        <Link onClick={onCancel} css={styles.viewAll} to={`/products/${product}`}>View all {product}</Link>
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