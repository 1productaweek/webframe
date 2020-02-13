import React from 'react'
import Modal from 'react-modal'
import { css } from '@emotion/core'
import Login from './Login'

const customStyles = {
  overlay: {
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content : {
    zIndex: 21,
    position: 'relative !important',
  }
}

Modal.setAppElement('#root')

function LoginModal ({ onDone, onCancel, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      contentLabel='Screen'
    >
      <div css={css`margin-top:-2em;`}>
        <Login onDone={onDone} onCancel={onCancel} isModal={true} />
      </div>
    </Modal>
  )
}

export default LoginModal