import React, {useState, useEffect} from 'react'
import { css } from '@emotion/core'
import Sidebar from 'react-sidebar'
import SideNav from 'components/SideNav'

const mql = window.matchMedia(`(min-width: 800px)`)

function Layout ({ children }) {
  const [isDocked, setIsDocked] = useState(mql.matches)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(()=> {
    mql.addListener(mediaQueryChanged)
    return () => {
      mql.removeListener(mediaQueryChanged)
    }
  }, [])

  function onSetSidebarOpen(open) {
   setIsOpen(open)
  }
 
  function mediaQueryChanged() {
    console.log('mediaQueryChanged')
    setIsDocked(mql.matches)
    setIsOpen(false)
  }
  

  return (
    <div css={styles.container}>
    <Sidebar
        sidebar={<SideNav />}
        open={isOpen}
        docked={isDocked}
        onSetOpen={onSetSidebarOpen}
        styles={sidebarOverrides}
        touchHandleWidth={50}

        rootClassName="sidebar-root"
        sidebarClassName="sidebar"
        contentClassName="sidebar-content"
        overlayClassName="sidebar-overlay"
      >
        <button css={css`position: absolute; right: 100px; top: 100px; background: #ff0;`} onClick={() => setIsOpen(true)}>Open</button>
        {children}
      </Sidebar>
    </div>
  )
}

const sidebarOverrides = {
  root: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  sidebar: {
    zIndex: 2,
    position: "absolute",
    float: "left",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "hidden"
  },
  content: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: '100vw',
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out"
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)"
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    background: '#0f0',
    top: 0,
    bottom: 0
  }
};

const styles = {
  container: css`
  * {
    border: 1px solid red;
    background: #0000000f;
  }
  /* .sidebar-root {
    top: 100px !important;

  }
  .sidebar {
    top: 100px;
    width: 110px;
    z-index: 10;
    background: #fff;
    padding-left: 1em;
    @media(max-width: 815px) {
      width: 50%;
      a {
        padding: 2em 0 !important;
      }
    }

  }
  .sidebar-content {
    right: 0;

  }
  .sidebar-overlay {
    background: transparent;
  } */
  `
};

export default Layout