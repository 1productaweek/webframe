import React from 'react'
import firebase from 'firebase'
import { css } from '@emotion/core'

import { Link, NavLink } from 'components/base/Router'
import logo from 'img/logo.png'
import useFirebaseAuth from 'hooks/useFirebaseAuth'

export default function Nav () {
  const userAuth = useFirebaseAuth()
  const onLogout = async () => firebase.auth().signOut()
  return (
    <nav >
      <Link to="/">
        <img width={101} src={logo} alt='Webframe Logo' />
      </Link>
      <p css={css`${styles.tagline} top: -2px;`}>Discover and be inspired by beautiful webapp designs</p>
      {!userAuth && (
        <div css={styles.menu}>
          <NavLink to='/signup'>Signup</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </div>
      )}
      {userAuth && (
        <div css={styles.menu}>
          <Link to='/' onClick={onLogout}>Logout</Link>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </div>
      )}
    </nav>
  )
}

const styles = {
  tagline: css``,
  menu: css`
    float: right;
    a {
      margin-left: 1em;
    }
  `,
}