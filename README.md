# Nuxt CMS Cloudflare (Worker/Pages)

Content Management for Nuxt3 to Cloudflare Services

## Setup
Install dependencies
```bash
pnpm install
```

## Authorize Cloudflare
```bash
npx wrangler login
```

Local development
```bash
pnpm run dev
```
Web - `http://127.0.0.1:3000`
Admin - `http://127.0.0.1:3010`

## Build & Deployment
Build
```bash
pnpm run build
```
Deploy
```bash
pnpm run deploy
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
│   ├── /admin
│   │   ├── nuxt.config.js
│   │   ├── wrangler.toml
│   │   └── ...
│   └── ...
├── /src
│   └── /main.js
└── wrangler.toml
```
