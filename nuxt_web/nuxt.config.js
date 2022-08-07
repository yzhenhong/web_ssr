import pkg from './package'
import env from './env'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // 环境变量
  // env: require(`./.env.${process.env.NODE_ENV}.js`),
  env: {
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
    // 统一登录 process.env.authURL
    LOGIN_URL: env[process.env.NODE_ENV].LOGIN_URL,
    // 请求前缀
    BASE_PREFIX: env[process.env.NODE_ENV].BASE_PREFIX,
    // 请求服务器地址
    SERVER_URL: env[process.env.NODE_ENV].SERVER_URL,
    // 前端系统的端口
    SYSTEM_PORT: env[process.env.NODE_ENV].SYSTEM_PORT,
  },
}
