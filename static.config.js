import React from 'react'
import path from 'path'
import { Storage } from '@google-cloud/storage'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import categories from './content/categories'
import products from './content/products'
import * as admin from 'firebase-admin'
import serviceAccount from './webframe-firebase-service-account.json'

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://webframe.firebaseio.com"
  })
}

const db = admin.firestore()

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
    // Get scores from Firebase
    const screens = await db.collectionGroup('screens').get()
    const scores = {}

    screens.forEach(screen => {
      if (!scores[screen.id]) scores[screen.id] = 0
      scores[screen.id] += 1
    })

    // Creates a client
    const storage = new Storage({
      keyFilename: 'webframe.service-account.json',
    })

    const bucket = storage.bucket('webframe-screens')
    const [gcfiles] = await bucket.getFiles()

    const files = gcfiles.map(file => {
      const { name, metadata } = file.metadata
      const productId = metadata.product
      const categories = metadata.categories ? metadata.categories.split(',') : []
      const lookup = products[productId] || {}
      const score = scores[file.name]
      return {
        name,
        score: score || 0,
        product: { id: productId, ...lookup },
        categories,
        meta: metadata,
        src: `${SRC_URL}/${name}`,
        maxHeight: 500 + 200 * Math.random(),
      }
    }).sort((a, b) => b.score - a.score)

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
          screens: files,
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
  }) => {
    const embeds = process.env.REACT_STATIC_ENV !== 'development' ? `
      // Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-140788802-1');
    ` : ''
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Webframe - beautiful web app screenshots for design inspiration!</title>
        </Head>
        <Body>
          {children}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140788802-1"></script>
          <script async dangerouslySetInnerHTML={{
            __html: embeds,
          }} />
        </Body>
      </Html>
    )
  },
}
