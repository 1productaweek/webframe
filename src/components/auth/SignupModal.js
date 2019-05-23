import React from 'react'
// import firebase from 'config/firebase'
import Modal from 'react-modal'
import { css } from '@emotion/core'
// import tw from 'ta.lwind.macro'
import Signup from './Signup'

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

function SignupModal ({ onDone, onCancel, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      contentLabel='Screen'
    >
      <div css={css`margin-top:-2em;`}>
        <Signup onDone={onDone} />
      </div>
    </Modal>
  )
}

// const styles = {

// }

export default SignupModal