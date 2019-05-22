

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/calummoore/.nvm/versions/node/v10.13.0/lib/node_modules/react-static/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
      t_0.template = '../src/pages/404.js'
      
const t_1 = universal(import('../src/pages/about.js'), universalOptions)
      t_1.template = '../src/pages/about.js'
      
const t_2 = universal(import('../src/pages/categories.js'), universalOptions)
      t_2.template = '../src/pages/categories.js'
      
const t_3 = universal(import('../src/pages/products.js'), universalOptions)
      t_3.template = '../src/pages/products.js'
      
const t_4 = universal(import('../src/pages/test.js'), universalOptions)
      t_4.template = '../src/pages/test.js'
      
const t_5 = universal(import('../src/containers/Screens'), universalOptions)
      t_5.template = '../src/containers/Screens'
      

// Template Map
export default {
  '../src/pages/404.js': t_0,
'../src/pages/about.js': t_1,
'../src/pages/categories.js': t_2,
'../src/pages/products.js': t_3,
'../src/pages/test.js': t_4,
'../src/containers/Screens': t_5
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.js"

