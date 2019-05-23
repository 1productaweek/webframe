import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import 'typeface-open-sans'
import { Router, Redirect } from './components/Router'
import Dashboard from './containers/Dashboard'
import Nav from './components/Nav'
import ModalProvider from './components/modals/ModalProvider'
import useFirebaseAuth from './hooks/useFirebaseAuth'

import './reset.css'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dashboard'])

function App() {
  const user = useFirebaseAuth()
  return (
    <Root>
      <ModalProvider>
        <Nav />
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              { user && <Dashboard path='dashboard' /> }
              { !user && <Redirect from='dashboard' to='/login' /> }
              { user && <Redirect from='login' to='/dashboard' /> }
              { user && <Redirect from='signup' to='/dashboard' /> }
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </ModalProvider>
    </Root>
  )
}

export default App
