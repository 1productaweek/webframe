import React, { useState } from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import firebase from 'firebase'
import Label from 'components/form/Label'
import Input from 'components/form/Input'
import Button from 'components/form/Button'
import useModal from 'components/modals/useModal'
import LoginModal from './LoginModal'


export default function Signup ({ onDone, onCancel, isModal }) {
  const [formData, setFormData] = useState({ email: '', password: '' })
 const showModal = useModal(LoginModal)

  function onGoToLogin() {
    onCancel(formData)
    showModal(formData)
  }

  const onSubmit = async () => {
    const { email, password } = formData
    if (!email || !password) return alert('Email and Password are pretty much required!')

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async () => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        if (onDone) onDone(formData)
      })
      .catch(function(error) {
        if (error.code) {
          setFormData({ ...formData, error: error.message })
          return
        }
      })
  }

  // if (signupComplete) return (<h2 css={styles.title}>Thank you! <span aria-label='love' role='img'>😍</span></h2>)

  return (
    <div css={styles.box}>
      <h2 css={styles.title}>Signup to Webframe! <span aria-label='love' role='img'>😍</span></h2>
      <p css={styles.sub}>Save your screens and lots of other goodies!</p>
      <Label htmlFor='emailInput'>E-mail</Label>
      <Input onChange={e => setFormData({ ...formData, email: e.target.value })} value={formData.email} id='emailInput' placeholder='awesome@person.com' type='email' />
      <Label htmlFor='passwordInput'>Password</Label>
      <Input onChange={e => setFormData({ ...formData, password: e.target.value })} value={formData.password} id='passwordInput' placeholder='super secret password' type='password' />
      <div css={styles.btnsWrapper}>
        <Button onClick={onSubmit} css={css`margin-top: 1em; margin-bottom: 1em; font-size: 1em;`}>Sign up</Button>
        {isModal && (
          <span 
            onClick={onGoToLogin} 
            css={css`margin: 1em; font-size: 1em; cursor: pointer; color: #108db8;`}
          >
            Already have an account? Log in.
          </span>)
        }
      </div>
      { formData.error && <p css={css`color: red;`}>Error: {formData.error}</p> }
    </div>
  )
}

const styles = {
  btnsWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  box: css`
    margin: auto;
    max-width: 500px;
    padding: 1em;
    ${tw`
      text-sm
    `}
  `,
  title: css`
    ${tw`
      text-4xl
      text-center
      mt-12
      mb-6
    `}
  `,
  sub: css`
    ${tw`
      text-gray-500
      text-lg
      text-center
      mt-6
      mb-10
    `}
  `,
}