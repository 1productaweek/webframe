import { useEffect, useState } from 'react'
import firebase from 'firebase'

export default () => {
  const [state, setState] = useState(null)
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      setState(user)
    })
  }, [])
  return state
}