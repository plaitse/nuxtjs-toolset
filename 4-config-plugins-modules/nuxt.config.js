import pkg from './package'

export default {
  mode: 'universal', // Allows pre-rendered capabilities
  // mode: 'spa' ---> No pre-rendered capabilities

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { // Can be disabled by passing false
    color: '#fff',
    height: '40px',
    duration:'5000',
    failedColor: 'red'
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/data-filter.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs-toolset.firebaseio.com/posts'
  },
  
  dev: true, // Means we are in development mode 

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxtjs-toolset.firebaseio.com/posts'
  },

  router: {
    // This redirects every unknown visited route to /
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  // srcDir: 'client-app/' --> Tells Nuxt to look for pages in this folder
}
