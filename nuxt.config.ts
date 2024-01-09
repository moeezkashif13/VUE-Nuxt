// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@vee-validate/nuxt",

    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [300, 400, 500, 600, 700],
          Lato: [100, 300],
          Poppins: [200, 300, 400, 500, 600, 700, 800],
        },
      },
    ],
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
