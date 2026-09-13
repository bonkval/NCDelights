# NC Delights

A production-ready Next.js showcase for NC Delights, a small-batch home bakery. The site is intentionally backend-free: every ordering route opens the business Messenger conversation.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint`, `npm run typecheck`, and `npm run build` before deployment.

## Product updates

All catalog content lives in `src/data/products.ts`. Add or edit a single product object there—cards, the featured section, and category menus all render from that source. Use a local image in `public/assets/products` and update its `image` path and descriptive `imageAlt`.

## Asset choices

The supplied photography remains local and is served through Next.js image optimization. The cookie rack photography forms the layered hero; banana loaves anchor the kitchen story; branded crinkle packaging builds trust in the catalog. The supplied menu image was used as the pricing authority where it conflicted with the initial prompt.

The header uses a responsive crop of the original NC Delights title artwork from the supplied menu image (`public/assets/brand/nc-delights-sweet-treats.jpeg`). It preserves the source artwork and colors; a standalone original logo file can replace this crop later without changing the header component structure.

## Deployment

This project is Vercel-compatible. Import the GitHub repository in Vercel, accept the detected Next.js settings, and deploy. Set the canonical public URL in `src/app/layout.tsx` after choosing the production domain.

## Design and accessibility

The hero uses scoped GSAP + Lenis parallax on desktop only. It cleans up its own animation context and ticker callback; narrow screens and `prefers-reduced-motion` use an intentionally static, image-led fallback. All primary actions are keyboard-accessible links, external links use safe `rel` attributes, and photos have descriptive alternate text.
