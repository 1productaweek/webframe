import { useContext } from 'react'
import { ModalContext } from './ModalProvider'

const useModal = (Modal) => {
  const modalProvider = useContext(ModalContext)
  return (props) => modalProvider.push(Modal, props)
}

export default useModal
