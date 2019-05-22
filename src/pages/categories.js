import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Categories () {
  const { categories } = useRouteData()
  return (
    <div>
      All Categories:
      <ul>
        {(categories || []).map(cat => (
          <li key={cat.id}>
            <Link to={`/categories/${cat.id}/`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
