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
CMS - `http://localhost:3000`
Web - `http://localhost:3010`

## Deployment
Build the project
```bash
pnpm run build
```

Deploy to cloudflare
```bash
pnpm run deploy
```

> Guide for setting cloudflare account before deploying:

https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/


## Monorepo setup folder structure
/my-monorepo
├── /apps
│   ├── /web
│   │   ├── nuxt.config.js
|	|	├── wrangler.toml
│   │   └── ...
│   ├── /cms
│   │   ├── nuxt.config.js
|	|	├── wrangler.toml
│   |   └── ...
|	|__ ...
├── /src
│   └── /main.js
└── wrangler.toml
