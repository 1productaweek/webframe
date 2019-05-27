import React from 'react'
import firebase from 'firebase'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'components/base/Router'
import List from 'components/List'
import useFirebaseSync from 'hooks/useFirebaseSync'
import products from '../../content/products'

const db = firebase.firestore()

function Dashboard () {
  const { SRC_URL } = useSiteData()
  const user =  firebase.auth().currentUser
  const ref = db.collection('users').doc(user.uid).collection('screens')
  const collection = useFirebaseSync(ref)
  const items = [] 
  if (collection) {
    collection.forEach(doc => {
      const name = doc.data().name
      const [productId] = name.split('.')[0].split('-')
      const lookup = products[productId] || {}
      items.push({
        name,
        product: { id: productId, ...lookup },
        src: `${SRC_URL}/${name}`,
      })
    })
  }
  
  return (
    <div css={css`max-width: 1200px; margin: 0 auto; padding: 1em; margin-bottom: 100px;`}>
      <h2 css={styles.title}>Saved Screens <span role='img' aria-label='saved'>🎉</span></h2>
      <List items={items} />
      { !collection ? <p css={css`color: #777; text-align: center;`}>Loading...</p> : ''}
      {( collection && (!items || !items.length)) && <p css={css`color: #777; text-align: center;`}>No saved screenshots yet! Go to <Link to='/'>Home</Link> and click on any screenshot to save.</p>}
    </div>
  )
}

const styles = {
  title: css`
  ${tw`
    text-4xl
    text-center
    mt-12
    mb-8
  `}
`,
}

export default Dashboard