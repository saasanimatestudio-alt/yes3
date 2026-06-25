# SaaS Animate — Website

Animation studio website for SaaS teams. Built with Next.js 13 (App Router), Tailwind CSS, and Resend for email.

## Deploy to Vercel

### 1. Push to GitHub

Push this repository to a new GitHub repo.

### 2. Import to Vercel

Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo. Vercel auto-detects Next.js — no extra config needed.

### 3. Add environment variables

In Vercel → Project → Settings → Environment Variables, add:

| Variable | Value | Required |
|---|---|---|
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) | **Yes** |
| `RESEND_FROM_EMAIL` | `SaaS Animate <noreply@yourdomain.com>` | Optional |

> **Note on Resend:** The contact form uses `onboarding@resend.dev` as the sender by default.
> This works only if `hello@saasanimate.com` is verified in your Resend account.
> For production, [verify your domain](https://resend.com/docs/dashboard/domains/introduction) on Resend,
> then set `RESEND_FROM_EMAIL=SaaS Animate <noreply@saasanimate.com>`.

### 4. Deploy

Click **Deploy**. That's it.

## Contact form

All submissions are sent to `hello@saasanimate.com` via Resend. The reply-to is set to the visitor's email so you can reply directly.

## Local development

```bash
# Install dependencies
npm install

# Copy env file and fill in values
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, process, testimonials, portfolio |
| `/services` | Full services listing |
| `/portfolio` | Portfolio with inline YouTube embeds + category filter |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts |
| `/faq` | FAQ accordion |
| `/contact` | Contact form + Calendly embed |
| `/booking` | Dedicated booking page with Calendly |
| `/api/contact` | API route that sends email via Resend |
