import React from 'react'
import Modal from 'react-modal'
import { css } from '@emotion/core'

const customStyles = {
  content : {
    padding: 0,
  }
}

Modal.setAppElement('#root')

function ScreenModal ({ isOpen, onCancel, src, name }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img css={css`width: 100%;`} src={src} alt={name} />
    </Modal>
  )
}

export default ScreenModal