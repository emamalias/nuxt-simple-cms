# Nuxt Simple CMS

Making Changes using CI/CD on Nuxt3 content using cloudflare worker and pages

## Setup
Install dependencies
```bash
pnpm install
```

## Authorize Cloudflare
```bash
npx wrangler login
```
Confirm CF Permissions:
```bash
npx wrangler whoami
```
Local development
```bash
pnpm run dev
```
Web - `http://127.0.0.1:3000`
CMS - `http://127.0.0.1:3010`

## Deployment
Web
```bash
pnpm run build:web
```
CMS
```bash
pnpm run build:cms
```

Deploy to cloudflare
```bash
pnpm run deploy
```

> Guide for setting cloudflare account before deploying:

https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/


## Monorepo setup folder structure
```
/my-awesome-project
├── /apps
│   ├── /web
│   │   ├── nuxt.config.js
│   │   ├── wrangler.toml
│   │   └── ...
│   ├── /cms
│   │   ├── nuxt.config.js
│   │   ├── wrangler.toml
│   │   └── ...
│   └── ...
├── /src
│   └── /main.js
└── wrangler.toml
```
