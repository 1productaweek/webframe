import firebase from 'firebase/app'
// Required forreact-modal side-effects
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyB8SvWW0nk_B2ALDoMdLCduxqoyvCJJJo8',
  authDomain: 'webframe.firebaseapp.com',
  databaseURL: 'https://webframe.firebaseio.com',
  projectId: 'webframe',
  storageBucket: 'webframe.appspot.com',
  messagingSenderId: '358743927512',
  appId: '1:358743927512:web:debba3c07270a4a3'
})

export default firebase