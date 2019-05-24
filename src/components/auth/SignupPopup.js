import { useEffect } from 'react'
import useModal from 'components/modals/useModal'
import SignupModal from './SignupModal'

const localStorage = window.localStorage

export default function SignupPopup () {
  const showModal = useModal(SignupModal)

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