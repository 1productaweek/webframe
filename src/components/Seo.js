import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteData } from 'react-static'
// import siteImage  from 'img/site-image.png'

function SEO ({ description, lang, meta, title }) {
  const { siteTitle, siteImage, metaDescription, social } = useSiteData()

  const desc = description || metaDescription

  const image = siteImage ? [{
    property: `og:image`,
    content: siteImage,
  }, {
    name: `twitter:image`,
    content: siteImage,
  }] : []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: desc,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: desc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: social && social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: desc,
        },
      ].concat(image).concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
