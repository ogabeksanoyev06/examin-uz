export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "",
      titleTemplate: "",
    },
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["@/assets/styles/main.scss"],
  plugins: [
    {
      src: "./plugins/aos.js",
      mode: "client",
      ssr: false,
    },
    { src: "./plugins/axios.js" },
    {
      src: "./plugins/vee-validate-rules.js",
    },
    {
      src: "./plugins/vee-validate-components.js",
    },
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
