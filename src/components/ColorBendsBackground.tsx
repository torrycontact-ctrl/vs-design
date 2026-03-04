'use client';

import ColorBends from './ColorBends';

export default function ColorBendsBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <ColorBends
        rotation={155}
        speed={0.4}
        colors={["#180a4d", "#5b70d7", "#2b00ff"]}
        transparent
        autoRotate={0.15}
        scale={0.9}
        frequency={1.5}
        warpStrength={0}
        mouseInfluence={0}
        parallax={0}
        noise={0}
      />
    </div>
  );
}
