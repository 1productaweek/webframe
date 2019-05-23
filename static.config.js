import React from 'react'
import path from 'path'
import { Storage } from '@google-cloud/storage'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import categories from './content/categories'
import products from './content/products'

const CACHE_URL = 'https://cdn.webframe.xyz'
const DOWNLOAD_URL = 'https://webframe-image-cache.edgeapp.net'
const SRC_URL = 'https://storage.googleapis.com/webframe-screens'


export default {
  getSiteData: () => ({
    siteTitle: 'Webframe',
    metaDescription: 'A showcase of beautiful and well designed web app screens for design inspiration.',
    social: { twitter: 'calummoore' },
    categories,
    CACHE_URL,
    DOWNLOAD_URL,
    SRC_URL,
  }),
  getRoutes: async () => {

    // Creates a client
    const storage = new Storage({
      keyFilename: 'webframe.service-account.json',
    })

    const bucket = storage.bucket('webframe-screens')
    const [gcfiles] = await bucket.getFiles()

    // console.log(gcfiles.map(({ metadata }) => metadata))

    const files = gcfiles.map(file => {
      const { name, metadata } = file.metadata
      const productId = metadata.product
      const categories = metadata.categories ? metadata.categories.split(',') : []
      console.log(productId, categories)
      // appname-cat1-cat2.png
      // const [productId, ...categories] = name.split('.')[0].split('-')
      const lookup = products[productId] || {}
      return {
        name,
        product: { id: productId, ...lookup },
        categories,
        meta: metadata,
        src: `${SRC_URL}/${name}`,
      }
    })

    const categoriesWithScreens = categories.map(cat => {
      cat.screens = files.filter(({ categories }) => categories.indexOf(cat.id) !== -1)
      return cat
    })
    const categoriesWithOneScreen = categoriesWithScreens.map((cat) => ({
      ...cat,
      screen: cat.screens[0],
      screens: undefined,
    }))

    const productsArr = uniq(map(files, ({ product }) => product.id))
    const productsWithScreens = productsArr.map(prod => {
      const lookup = products[prod] || {}
      return {
        name: prod,
        ...lookup,
        id: prod,
        screens: files.filter(({ product }) => product.id === prod),
      }
    })
    const productsWithOneScreen = productsWithScreens.map(prod => ({
      ...prod,
      screen: prod.screens && prod.screens[0],
      screens: undefined,
    })) 

    return [
      {
        path: '/',
        getData: () => ({
          screens: files.sort(() => 1 + Math.random() * -2),
        }),
      },
      {
        path: '/categories',
        getData: () => ({
          categories: categoriesWithOneScreen,
        }),
        children: categoriesWithScreens.map(category => ({
          path: `/${category.id}`,
          template: 'src/containers/Screens',
          getData: () => ({
            parentTitle: 'Categories',
            parentPath: '/categories',
            title: category.name,
            screens: category.screens,
          }),
        })),
      },
      {
        path: '/products',
        getData: () => ({
          products: productsWithOneScreen,
          categories,
        }),
        children: productsWithScreens.map(prod => ({
          path: `/${prod.id}`,
          template: 'src/containers/Screens',
          getData: () => ({
            parentTitle: 'Products',
            parentPath: '/products',
            title: prod.name,
            screens: prod.screens,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Webframe - beautiful web app screenshots for design inspiration!</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
