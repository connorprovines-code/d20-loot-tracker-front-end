# Deployment Guide - D20 Loot Tracker

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import `connorprovines-code/d20-loot-tracker-nextjs`
4. Configure Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Supabase anon key
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
cd ~/d20-loot-tracker-nextjs
npx vercel --prod --yes
```

Then add environment variables in the Vercel dashboard.

## Custom Domain Setup

Add `d20loottracker.com` in Vercel project settings → Domains

## Supabase Configuration

Add your Vercel URL to Supabase allowed redirect URLs.
