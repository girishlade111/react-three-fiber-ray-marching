# React Three Fiber Ray Marching

An interactive 3D scene built with **React Three Fiber** that renders a ray-marched shader scene in real time. A fullscreen GLSL ray marcher (SDF spheres and boxes, 100 march steps) is projected onto a plane inside a React Three Fiber canvas, dressed with post-processing effects and a live color-picker UI to change the scene background on the fly.

## Features

- **Real-time ray marching shader** — custom GLSL fragment shader with signed distance functions (`sdSphere`, `sdBox`), soft shadows and up to 100 march steps
- **Interactive 3D canvas** — OrbitControls to rotate/zoom/pan around the ray-marched plane
- **Post-processing stack** — Bloom, Chromatic Aberration and Vignette via `@react-three/postprocessing`
- **Live color picker** — change the background color of the scene with a floating palette UI (react-colorful)
- **Environment lighting** — drei `Environment` preset with ambient and point lights

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router, static export)
- [React](https://react.dev/) 19 + TypeScript
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [drei](https://github.com/pmndrs/drei) / `@react-three/postprocessing`
- [three.js](https://threejs.org/)
- Tailwind CSS 3.4 + shadcn/ui components
- lucide-react icons, react-colorful

## Quick Start

```bash
# install dependencies
pnpm install   # or: npm install --legacy-peer-deps

# run the dev server
pnpm dev       # open http://localhost:3000

# production static build (outputs to ./out)
pnpm build
```

### Preview a production build locally

```bash
npx serve out
```

## Project Structure

```
app/
  page.tsx        # Home page -> renders <Scene />
  layout.tsx      # Root layout, fonts, analytics
  globals.css     # Tailwind + global styles
ray-marching-scene.tsx  # GLSL ray-marching shader material + plane
scene.tsx         # Canvas, lights, post-processing, UI wiring
ui.tsx            # Floating color-picker overlay
components/       # shadcn/ui components
public/           # Static assets
```

## Deployment

The app is fully static (no API routes, no server components with actions) and deploys as a static export:

- **GitHub Pages:** `next build` emits `out/`, published from the `gh-pages` branch.
  The build uses `basePath: '/react-three-fiber-ray-marching'` for the Pages subpath.
  If you deploy to a domain root (Vercel / Netlify / Cloudflare Pages), remove the
  `basePath` line from `next.config.mjs` and rebuild.
- **Vercel / Netlify:** connect the repo; the default build (`next build`) works
  without `output: 'export'` if you prefer SSR-friendly deploys.

No environment variables are required.

## Notes

- This project was originally scaffolded with [v0.app](https://v0.app); the original v0-synced README was rewritten for this public release.
- Next.js pinned to 15.2.8 (patched for CVE-2025-55182 React2Shell).

---

Built by Girish Lade — https://ladestack.in
