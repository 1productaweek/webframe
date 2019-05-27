/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import firebase from 'config/firebase'
import { css } from '@emotion/core'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import ClickOutside from './ClickOutside'

const updateFormValue = (setFormData, formData, prop) => (e) => setFormData({ ...formData, [prop]: e.target.value })
const db = firebase.firestore()

export function Feedback () {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({})
  const user = useFirebaseAuth()

  useEffect(() => {
    if (!formData.email && user) setFormData({ ...formData, email: user.email })
  }, [user && user.email])

  if (!show) return (
    <div onClick={() => setShow(true)} css={css`color: #666; margin-right: 0.5em; user-select: none;`}>
      Feedback <span role='img' aria-label='please'>🙏</span>
    </div>
  )

  const onSubmit = async (e) => {
    e.preventDefault()
    await db.collection('feedback').add(formData)
    setFormData({})
    setShow(false)
  }

  return (
    <ClickOutside onClickOutside={() => setShow(false)}>
      <div css={styles.feedback}>
        <div onClick={() => setShow(false)} css={css`font-weight: 600; margin-bottom: 0.5em; padding: 0.2em 0;`}>Feedback <span role='img' aria-label='please'>🙏</span></div>
        <form css={styles.form} onSubmit={onSubmit}>
          <input 
            value={formData.email || ''} 
            onChange={updateFormValue(setFormData, formData, 'email')} 
            css={styles.input} 
            placeholder='E-mail' 
          />
          <textarea
            value={formData.feedback || ''}
            onChange={updateFormValue(setFormData, formData, 'feedback')} 
            style={{ flex: '1 0 auto' }} 
            css={styles.input} 
            placeholder='Wahooo, we love feedback. Tell us what you think!' 
          />
          <button css={styles.button} type='submit'>Send</button>
        </form>
      </div>
    </ClickOutside>
  )
}

export default function Promo ({ name, href }) {
  return (
    <div css={styles.container}>
      <Feedback />
      <a target='_blank' href={href}>
        {name}
      </a>
    </div>
  )
}

const common = `
  position: fixed;
  bottom: 0;
  right: 0;
  border: 1px solid #eee;
  border-width: 1px 0px 0px 1px; 
  border-top-left-radius: 0.3em;
  padding: 0.6em;
`

const styles = {
  container: css`
    ${common}
    background: rgba(256, 256, 256, 0.9);
    font-size: 0.8em;
    display: flex;
    cursor: pointer;
    a {
      color: #666;
    }
  `,
  feedback: css`
    ${common}
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 240px;
    height: 200px;
    background: #fff;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    input {
      margin-top: 3px;
      margin-bottom: 3px;
    }
  `,
  input: css`
    border: 1px solid #888;
    background-color: #fff;
    border-color: #cbd5e0;
    border-radius: 0.2rem;
    padding: 0.6em;
    display: block;
    width: 100%;
    appearance: none;
    line-height: 1.5;
    box-shadow: none;
    outline: none;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
    :focus {
      outline: 0;
      box-shadow: 0 0 0 3px rgba(66,153,225,0.5);
    }
  `,
  button: css`
    outline: none;
    cursor: pointer;
    display: inline-block;
    background-color: #4299e1;
    font-size: 0.75rem;
    color: #fff;
    font-weight: 700;
    padding: 0.5em;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    border-radius: 0.2rem;
    user-select: none;
    font-size: 1em;
    :focus {
      outline: 0;
      box-shadow: 0 0 0 3px rgba(66,153,225,0.5);
    }
  `
}