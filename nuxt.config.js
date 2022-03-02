export default {
  head: {
    titleTemplate: '%s - ads',
    title: 'ads',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
    '@/assets/global.scss',
    '@/assets/vuetify.scss',
  ],

  styleResources: {
    scss: [
      '@/assets/mixins.scss',
    ],
  },

  plugins: [
    '@/plugins/vue-mq',
    '@/plugins/v-view',
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    // '@nuxtjs/svg-sprite',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', {
      offset: -70,
    }],
    '@nuxtjs/yandex-metrika',
    '@nuxtjs/google-adsense',
  ],

  // svgSprite: {
  //   directory: '/assets/icons',
  // },

  yandexMetrika: {
    id: 86562180,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },

  'google-adsense': {
    id: 'ca-pub-6142404109621411',
  },

  googleAnalytics: {
    id: 'G-XE8QZF9GNP',
  },

  axios: {
    baseURL: process.env.BASE_URL,
    proxy: false,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.config.js',
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    theme: {
      disable: true,
    },
  },
};
