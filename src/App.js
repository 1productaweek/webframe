import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import 'typeface-open-sans'
import { Router, Redirect } from './components/Router'
import Dashboard from './containers/Dashboard'
import Nav from './components/Nav'
import ModalProvider from './components/modals/ModalProvider'
import ProductHunt from './components/ProductHunt'
import SignupPopup from './components/auth/SignupPopup'
import useFirebaseAuth from './hooks/useFirebaseAuth'

import './reset.css'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dashboard'])

const NoOp = () => null

function App() {
  const user = useFirebaseAuth()
  return (
    <Root>
      <ModalProvider>
        { false && <ProductHunt id='playdate-2' /> }
        <Nav />
        <div style={{marginBottom: '4em'}}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router primary>
              { user && <Dashboard path='dashboard' /> }
              { !user && <Redirect from='dashboard' to='/login' /> }
              { user && <Redirect from='login' to='/dashboard' /> }
              { user && <Redirect from='signup' to='/dashboard' /> }
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Router primary={false}>
          <NoOp path='dashboard' />
          <NoOp path='login' />
          <NoOp path='signup' />
          { !user && <SignupPopup path="*" /> }
        </Router>
      </ModalProvider>
    </Root>
  )
}

export default App
