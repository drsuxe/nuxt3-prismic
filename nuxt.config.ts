// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/prismic"],
  prismic: { endpoint: "https://nuxt3-experimental.prismic.io/api/v2" },
});
