"use client"

import dynamic from "next/dynamic"

// Scene uses react-three-fiber (WebGL), which cannot render on the server.
// Load it client-side only so `next build` can statically export this page.
const Scene = dynamic(() => import("./scene"), { ssr: false })

export default function SceneWrapper() {
  return <Scene />
}
