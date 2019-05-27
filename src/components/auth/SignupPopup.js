import { useEffect } from 'react'
import useModal from 'components/modals/useModal'
import SignupModal from './SignupModal'

export default function SignupPopup () {
  const showModal = useModal(SignupModal)
  let localStorage = null
  if (typeof window !== 'undefined') {
    localStorage = window && window.localStorage
  }

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage) return
      if (localStorage.getItem('webframe.signup-popup.shown') === 'true') return
      localStorage.setItem('webframe.signup-popup.shown', 'true')
      showModal(SignupModal)
    }, 15000)
  }, [])

  return null
}