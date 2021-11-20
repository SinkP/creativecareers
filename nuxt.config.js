import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - ads',
    title: 'ads',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/global.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',

    '@nuxtjs/yandex-metrika',
    '@nuxtjs/google-adsense',

    'nuxt-mq',
  ],

  'mq': {
    defaultBreakpoint: 'lg',
    breakpoints: {
      sm: 450,
      md: 1024,
      lg: Infinity,
    }
  },

  yandexMetrika: {
    id: 86562180,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },

  'google-adsense': {
    id: 'ca-pub-6142404109621411'
  },

  googleAnalytics: {
    id: 'G-XE8QZF9GNP',
  },

  axios: {},

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}
