
module.exports = {
  router: {
    middleware: 'stats'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/scss/public/main.scss',
    'assets/scss/public/reset.scss',
    'assets/scss/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src: "@/assets/js/iconfont",
      ssr: false
    },
    {
      src: '@/plugins/myAxios',
      ssr: true
    },
    {
      src: '@/plugins/filter',
      ssr: false
    },
    {
      src: '@/plugins/publicComponents',
      ssr: true
    },
    {
      src: '@/plugins/mavonEditor',
      ssr: false
    },
    {
      src: '@/plugins/global',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    rules: {
      test: /\.sass$/,
      loaders: ['style', 'css', 'scss']
    }
  }
}
