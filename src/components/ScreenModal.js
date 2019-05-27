import React from 'react'
import firebase from 'config/firebase'
import { useSiteData } from 'react-static'
import Modal from 'react-modal'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'components/base/Router'
import useModal from 'components/modals/useModal'
import SignupModal from './auth/SignupModal'
import Button from './form/Button'
import cancel from 'img/cancel.png'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import useFirebaseSync from '../hooks/useFirebaseSync'

const customStyles = {
  content : {
    padding: 0,
    top: 20,
    bottom: 60,
  }
}

Modal.setAppElement('#root')

const AButton = Button.withComponent('a')
const db = firebase.firestore()

function ScreenModal ({ isOpen, onCancel, product, src, name }) {
  const { DOWNLOAD_URL } = useSiteData()
  const user = useFirebaseAuth()
  const showModal = useModal(SignupModal)

  const ref = user ? db.collection('users').doc(user.uid).collection('screens').doc(name) : null
  const doc = useFirebaseSync(ref)
  const isSaved = ref && doc && doc.data()

  const onToggle = async () => {
    const user =  firebase.auth().currentUser
    if (!user) return showModal()
    if (isSaved) return ref.delete()
    await ref.set({
      active: true,
      name,
    }).catch(console.error)
    await db.collection('screens').doc(user.uid).set()
  }

  const saveBtnStyle = isSaved ? { background: '#fff', borderColor: '#4299e1', color: '#4299e1' } : {}

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCancel}
        style={customStyles}
        contentLabel='Screen'
      >
        <img css={css`width: 100%;`} src={src} alt={name} />
      </Modal>
      <div><img css={styles.close} onClick={onCancel} src={cancel} alt='close' width={20} /></div>
      <div css={styles.footer}>
        <Button onClick={onToggle} style={saveBtnStyle} css={styles.save}>{ isSaved ? 'Saved' : 'Save' }</Button>
        <AButton href={`${DOWNLOAD_URL}?image=${src}`} download={name} css={styles.download}>Download</AButton>
        <Link onClick={onCancel} css={styles.viewAll} to={`/products/${product.id}`}>View all {product.name || product.id}</Link>
        { product.domain && <a css={styles.domain} target='_blank' rel='noreferrer noopener' href={`https://${product.domain}`}>{product.domain}</a> }
      </div>
    </>
  )
}

const styles = {
  save: css`
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  `,
  download: css`
    ${tw`
      ml-2
      text-gray-500
      bg-white
      hover:bg-gray-100
      border-gray-200
    `}
  `,
  viewAll: css`
    ${tw`
      mx-2
      text-sm
    `}
  `,
  domain: css`
    float: right;
    display: block;
    padding: 0.8em 0;
    ${tw`
      mx-2
      text-sm
    `}
  `,
  close: css`
    position: fixed;
    top: 25px;
    right: 15px;
    z-index: 10;
    width: 15px;
    cursor: pointer;
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