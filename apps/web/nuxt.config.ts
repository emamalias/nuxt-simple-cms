// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      autoSubfolderIndex: false
    }
  },

	vite: {
		base: process.env.BASE_URL,
	},

	runtimeConfig: {
		public: {
			cmsBaseUrl: process.env.CMS_URL
		},
	}
})
