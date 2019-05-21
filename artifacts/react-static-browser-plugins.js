// Imports
import plugin0 from '../node_modules/react-static-plugin-reach-router/browser.api.js'

// Plugins
const plugins = [{
        location: "../node_modules/react-static-plugin-source-filesystem",
        plugins: [],
        hooks: {}
      },
{
        location: "../node_modules/react-static-plugin-reach-router",
        plugins: [],
        hooks: plugin0({})
      },
{
        location: "../node_modules/react-static-plugin-sitemap/dist",
        plugins: [],
        hooks: {}
      },
{
        location: "..",
        plugins: [],
        hooks: {}
      }]

// Export em!
export default plugins