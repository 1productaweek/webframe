import React from 'react'
import { Link, NavLink } from 'components/base/Router'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

function SideNav () {
  const { categories, products } = useSiteData()
  const categoriesEl = categories.map(({ id, name }) => {
    return (
      <div key={id} css={styles.links}>
        <NavLink to={`/categories/${id}`}>
          {name}
        </NavLink>
      </div>
      
    )
  })
  const productsEl = products.map(({ id, name }) => {
    return (
      <div key={id} css={styles.links}>
        <NavLink to={`/products/${id}`}>
          {name}
        </NavLink>
      </div>
      
    )
  })
  return (
    <div>
      <Link to='/categories'>
        <div css={styles.title}>CATEGORIES</div>
      </Link>
      {categoriesEl}
      <div css={css`margin-top: 3em;`}>
        <Link to='/products'>
          <div css={styles.title}>PRODUCTS</div>
        </Link>
        {productsEl}
      </div>
    </div>
  )
}

const styles = {
  title: css`
    ${tw`
      mt-2
      mb-2
      text-gray-500
      text-xs
    `}
  `,
  links: css`
    ${tw`mb-2`}
    a {
      ${tw`
        text-xs
        text-gray-700
      `}
    }
  `
}

export default SideNav