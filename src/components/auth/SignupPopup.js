import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import firebase from 'firebase'
import Input from 'components/form/Input'
import Button from 'components/form/Button'

export default function SignupPopup ({ onDone }) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 10000)
  }, [])

  if (!show) return null
 
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
          alert(error.message)
          return
        }
      })
  }

  return (
    <div css={styles.popup}>
      <h3 className='xs-hide' css={styles.title}>Signup to Webframe!</h3>
      <Input onChange={e => setFormData({ ...formData, email: e.target.value })} value={formData.email} id='emailInput' placeholder='Email' type='email' />
      <Input onChange={e => setFormData({ ...formData, password: e.target.value })} value={formData.password} id='passwordInput' placeholder='Password' type='password' />
      <Button onClick={onSubmit} css={css`font-size: 1em;`}>Signup</Button>
    </div>
  )
}

const styles = {
  popup: css`
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1em;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0 -2px 6px;
    input {
      flex: 1 1 auto;
      min-width: 100px;
      max-width: 300px;
      margin-right: 10px;
    }
  `,
  title: css`
    font-weight: 600;
    margin-right: 1em;
    display: inline-block;
    vertical-align: middle;
    flex: 0 0 163px;
    margin-top: 1em;
  `
}