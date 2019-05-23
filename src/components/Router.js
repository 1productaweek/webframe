import React from 'react'
import { Link } from '@reach/router'

export { Link, Router, Redirect } from '@reach/router'

export const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return isCurrent ? {
        style: {
          color: '#333',
          fontWeight: 700,
        }
      }: {}
    }}
  />
)