# Vercel Deployment Guide

This guide walks through deploying the Fusion Starter application to Vercel.

## Prerequisites

- A Vercel account (free: https://vercel.com)
- GitHub account with the repository pushed
- Node.js 22.x compatible project

## Deployment Steps

### Step 1: Push Code to GitHub

Ensure all changes are committed and pushed to your GitHub repository:

```bash
git add .
git commit -m "Setup Vercel deployment"
git push origin main
```

### Step 2: Connect Repository to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Paste your GitHub repo URL or select from the list
5. Click **"Import"**

### Step 3: Configure Build & Environment Settings

The `vercel.json` file is already configured, but you can customize settings:

1. **Build Command**: Pre-filled with `npm run build`
2. **Output Directory**: Pre-filled with `dist`
3. **Install Command**: Uses `pnpm` (auto-detected from `package.json`)

### Step 4: Set Environment Variables (if needed)

1. In Vercel Dashboard, go to your project → **Settings** → **Environment Variables**
2. Add any environment variables your app needs:
   - `PING_MESSAGE` (optional)
   - Any API keys or secrets
   - `NODE_ENV` (automatically set to "production")

Example:
```
PING_MESSAGE=Hello from Vercel
```

### Step 5: Deploy

After configuration, Vercel automatically deploys when you:
- Push to main branch (production deployment)
- Create a pull request (preview deployment)

To manually trigger deployment:
1. Dashboard → Your Project
2. Click **"Redeploy"** or push a new commit

### Step 6: Verify Deployment

Once deployed:
1. Visit your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
2. Test the frontend loads correctly
3. Test API endpoints:
   - `https://your-app.vercel.app/api/ping`
   - `https://your-app.vercel.app/api/demo`

## Architecture

The deployment uses Vercel's serverless functions with the following structure:

```
Request Flow:
  ↓
Vercel Edge Network
  ↓
Request Routing (vercel.json)
  ├─ /api/* → Serverless Function (Node.js)
  │   └─ dist/server/production.mjs
  └─ /* → Static Files (SPA)
      └─ dist/spa/index.html
```

### How It Works

1. **Build Phase** (`npm run build`):
   - Client: Vite bundles React app → `dist/spa/`
   - Server: Vite bundles Express server → `dist/server/production.mjs`

2. **Routing** (vercel.json):
   - API routes (`/api/*`) → Express serverless handler
   - Static routes (`/*`) → React Router SPA with fallback to index.html

3. **Runtime**:
   - Static assets served from CDN (fast)
   - API requests handled by serverless function (Node.js 22)

## Custom Domain

To use a custom domain:

1. **Settings** → **Domains**
2. Click **"Add"** and enter your domain
3. Follow the DNS configuration instructions
4. Wait 5-10 minutes for propagation

## Preview URLs

Every push creates a unique preview URL:
- Main branch: `https://your-app.vercel.app`
- Pull requests: `https://your-app-pr-123.vercel.app`

Share preview URLs for feedback before merging to production.

## Monitoring & Logs

View deployment logs:
1. Dashboard → Your Project → **Deployments**
2. Click a deployment to see build & runtime logs
3. **Settings** → **Monitoring** for analytics and errors

## Troubleshooting

### Build Fails

Check the build logs in Vercel Dashboard:
```bash
# Run locally to verify
pnpm build
pnpm start
```

### API Not Working

1. Verify routes in `server/index.ts`
2. Check serverless function logs in Vercel Dashboard
3. Ensure environment variables are set

### Static Files 404

1. Verify build output in `dist/spa/`
2. Check `vercel.json` routes configuration
3. Clear build cache: Dashboard → Settings → **Redeploy**

### pnpm Lock Issues

If using different package managers, lock file mismatch can occur:
```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "Update pnpm lock"
git push
```

## Performance Tips

1. **Code Splitting**: Vite automatically chunks large bundles
2. **Image Optimization**: Use `next/image` or similar optimization
3. **API Caching**: Set appropriate Cache-Control headers
4. **Database**: Use serverless-compatible database (e.g., Prisma, MongoDB)

## Rollback

If deployment has issues:
1. Dashboard → **Deployments**
2. Find a previous working deployment
3. Click the deployment → **Promote to Production**

## Cost

Vercel's free tier includes:
- 100 GB bandwidth/month
- Unlimited functions
- Custom domains

Paid plans for higher usage. More info: https://vercel.com/pricing

## Related Docs

- [Vercel Framework Detection](https://vercel.com/docs/projects/framework-detection)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
