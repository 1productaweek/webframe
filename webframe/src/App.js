import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import 'typeface-open-sans'
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Nav from 'components/Nav'

import './reset.css'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Nav />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
