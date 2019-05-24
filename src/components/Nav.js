import React from 'react'
import firebase from 'firebase'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link, NavLink } from 'components/Router'
import logo from 'img/logo.png'
import useFirebaseAuth from 'hooks/useFirebaseAuth'

export default function Nav () {
  const userAuth = useFirebaseAuth()
  const onLogout = async () => firebase.auth().signOut()
  return (
    <nav css={css`${tw`p-4`}`}>
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
  tagline: tw`
    inline-block
    text-gray-500
    font-semibold
    ml-4
    relative
  `,
  menu: css`
    float: right;
    ${tw`
      text-sm
    `}
    a {
      margin-left: 1em;
    }
  `,
}