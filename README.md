# Nuxt Simple CMS

A cloud function for making changes on your nuxt content using cloudflare workers and pages

## Setup
Install dependencies
```bash
pnpm install
```

```bash
pnpm run dev
```

CMS - `http://localhost:3000`

Web - `http://localhost:3010`


## Deployment
Build the project
```bash
pnpm run build
```

Deploy to cloudflare
```bash
wrangler pages deploy
```

> Guide for setting cloudflare account before deploying:

https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/
