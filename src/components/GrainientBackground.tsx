'use client';

import Grainient from './Grainient';

export default function GrainientBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Grainient
        color1="#f4c5f7"
        color2="#ceccfa"
        color3="#fff4db"
        timeSpeed={3.9}
        colorBalance={0.12}
        warpStrength={0}
        warpFrequency={5.1}
        warpSpeed={1.3}
        warpAmplitude={26}
        blendAngle={19}
        blendSoftness={0.26}
        rotationAmount={810}
        noiseScale={0.7}
        grainAmount={0.11}
        grainScale={2.1}
        grainAnimated={false}
        contrast={0.8}
        gamma={1.6}
        saturation={2.5}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
    </div>
  );
}
