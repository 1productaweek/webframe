import path from 'path'
import { Storage } from '@google-cloud/storage'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import categories from './content/categories'

const CACHE_URL = 'https://imageproxy-grbdbenbba-uc.a.run.app'
const DOWNLOAD_URL = 'https://webframe-image-cache.edgeapp.net'


export default {
  getSiteData: () => ({
    siteTitle: 'React Static',
    metaDescription: 'A progressive static-site framework for React',
    categories,
    CACHE_URL,
    DOWNLOAD_URL,
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
      // appname-cat1-cat2.png
      const [product, categoryStr] = name.split('.')[0].split('-')
      return {
        name,
        product,
        categories: categoryStr.split('-'),
        meta: metadata,
        src: `https://storage.googleapis.com/webframe-screens/${name}`,
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

    const products = uniq(map(files, ({ product }) => product))
    const productsWithScreens = products.map(prod => {
      return {
        id: prod,
        name: prod,
        screens: files.filter(({ product }) => product === prod)
      }
    })
    const productsWithOneScreen = productsWithScreens.map(prod => ({
      ...prod,
      screen: prod.screens && prod.screens[0],
      screens: undefined,
    })) 
    console.log(productsWithOneScreen)

    return [
      {
        path: '/',
        template: 'src/containers/Screens',
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
}
