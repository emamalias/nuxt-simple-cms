// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    app: {
        head: {
            title: 'CMS Admin',
            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/dark/theme.css'
                }
            ]
        }
    },
    modules: ['nuxt-primevue', 'nitro-cloudflare-dev'],
	nitro: {
		preset: 'cloudflare_pages',
		prerender: {
			autoSubfolderIndex: false,
		},
	},
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    script: [

    ],
    css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss']
});
