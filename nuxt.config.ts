// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo',
    ['@nuxtjs/google-fonts', {
      families: {
       'Open Sans': [400, 700],
        Montserrat: true,
      }
    }],
    'nuxt-swiper',
    'truncate-html',
    'vue-yandex-maps/nuxt',
  ],
  yandexMaps: {
    apikey: process.env.YANDEX_MAPS_API_KEY,
 },
})
