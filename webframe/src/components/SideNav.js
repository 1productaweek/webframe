import React from 'react'
import { Link } from 'components/Router'
import { useSiteData } from 'react-static'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

function SideNav () {
  const { categories } = useSiteData()
  const categoriesEl = categories.map(({ id, name }) => {
    return (
      <div key={id} css={styles.links}>
        <Link to={`/categories/${id}`}>
          {name}
        </Link>
      </div>
      
    )
  })
  return (
    <div>
      <div css={styles.title}>CATEGORIES</div>
      {categoriesEl}
    </div>
  )
}

const styles = {
  title: css`
    ${tw`
      mt-8
      mb-2
      text-gray-500
      text-xs
    `}
  `,
  links: css`
    ${tw`mb-2`}
    a {
      ${tw`
        text-sm
        text-gray-700
      `}
    }
  `
}

export default SideNav