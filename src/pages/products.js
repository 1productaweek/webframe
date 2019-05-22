import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Products () {
  const { products } = useRouteData()
  return (
    <div>
      All Products:
      <ul>
        {(products || []).map(prod => (
          <li key={prod}>
            <Link to={`/products/${prod}/`}>{prod}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
