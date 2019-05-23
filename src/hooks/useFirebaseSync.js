import { useEffect, useState } from 'react'
// import firebase from 'firebase'

export default (ref) => {
  const [state, setState] = useState(null)
  useEffect(() => {
    if (!ref) return
    return ref.onSnapshot(doc => {
      setState(doc)
    })
  }, [ref])
  return ref ? state : null
}