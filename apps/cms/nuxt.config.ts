// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

	modules: ["nitro-cloudflare-dev"],

	nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
