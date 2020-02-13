import React from 'react'
import { Link, NavLink } from 'components/base/Router'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'


function SideNav () {
  const { categories, products } = useSiteData()
  
  const categoriesEl = categories.sort((a,b) => a.name < b.name ? -1 : 1).map(({ id, name }) => {
    return (
      <div key={id} css={styles.links}>
        <NavLink to={`/categories/${id}`}>
          {name}
        </NavLink>
      </div>
      
    )
  })
  const productsEl = products.sort((a,b) => a.name < b.name ? -1 : 1).map(({ id, name }) => {
    return (
      <div key={id} css={styles.links}>
        <NavLink to={`/products/${id}`}>
          {name}
        </NavLink>
      </div>
      
    )
  })

  return (
    <div css={styles.container}>
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
    
  `,
  links: css`
    a {
     
    }
  `
}

export default SideNav