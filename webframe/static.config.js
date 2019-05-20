import path from 'path'
import { Storage } from '@google-cloud/storage'

// import axios from 'axios'

const categories = [{
  id: 'billing',
  name: 'Billing',
}, {
  id: 'plans',
  name: 'Plans',
}, {
  id: 'login',
  name: 'Login',
}]

export default {
  getSiteData: () => ({
    siteTitle: 'React Static',
    metaDescription: 'A progressive static-site framework for React',
    categories,
  }),
  getRoutes: async () => {

    // Creates a client
    const storage = new Storage({
      keyFilename: 'webframe.service-account.json',
    })

    const bucket = storage.bucket('webframe-screens')
    const [gcfiles] = await bucket.getFiles()

    const files = gcfiles.map(file => {
      const { name, metadata, mediaLink } = file.metadata
      return {
        name,
        meta: metadata,
        src: mediaLink,
      }
    })

    console.log(files)

    return [
      {
        path: '/',
        template: 'src/containers/Home',
        getData: () => ({
          categories,
        }),
      },
      {
        path: '/categories',
        getData: () => ({
          categories,
        }),
        children: categories.map(category => ({
          path: `/${category.id}`,
          template: 'src/containers/Category',
          getData: () => ({
            category,
            files,
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
