Hero Section — Design → Code

This repository contains a single, focused UI: a hero section design created in Figma and converted into a small Next.js + TypeScript project skeleton. The goal of this README is to explain the design, how to run the project locally, and — importantly — give concrete, practical guidance for implementing and experimenting with mesh gradients (the soft, multi-color background often used behind hero content).

Figma design

- Link: https://www.figma.com/design/XmCQaLEbtSh8x3qSXffGZF/Hero-Section-Design?node-id=0-1&t=2DPU4eAynmMotisV-1

What this repo is

- A minimal hero section project (no extra app pages). The design was created in Figma and the code mirrors that design.
- Focus: translate the visual into clean components, accessible markup, and a performant animated mesh gradient background.
- Files of interest:
  - `app/page.tsx` — top-level Next.js page (hero rendered here)
  - `components/navbar.tsx` — navbar component
  - `components/mobile-menu.tsx` — mobile menu
  - `components/hero/hero-content.tsx` — the Hero content (heading, CTA, copy)
  - `components/animated-mesh-background.tsx` — background/mesh gradient animation
  - `components/hero/hero-social-proof.tsx`, `partner-logos.tsx` — supporting UI
  - `ui/*` — small UI primitives (button, avatar, card, sheet)
  - `public/` — images, logos, avatars

Tech stack

- Next.js (app router) + TypeScript
- CSS via `app/globals.css` and component-level styles (plain CSS or CSS modules). PostCSS configured in the project (see `postcss.config.mjs`).

Quick start (Windows PowerShell)

```powershell
# install
npm install

# run dev server
npm run dev

# build
npm run build

# start production preview
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
