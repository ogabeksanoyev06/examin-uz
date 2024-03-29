export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '',
      titleTemplate: '',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/styles/main.scss'],
  plugins: [
    {
      src: './plugins/aos.js',
      mode: 'client',
      ssr: false,
    },
    {
      src: './plugins/vee-validate-rules.js',
    },
    {
      src: './plugins/vee-validate-components.js',
    },

    {
      src: './plugins/sonner.client.js',
      ssr: false,
      mode: 'client',
    },
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'dayjs-nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vue-sonner'],
  },
});
