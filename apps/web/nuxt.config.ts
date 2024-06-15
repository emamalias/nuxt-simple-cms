// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['nitro-cloudflare-dev', '@nuxt/ui'],

	nitro: {
		preset: 'cloudflare_pages',
		prerender: {
			autoSubfolderIndex: false,
		},
	},

	vite: {
		base: process.env.WEB_URL,
	},

	runtimeConfig: {
		public: {
			cmsBaseUrl: process.env.CMS_URL,
		},
	},
});
