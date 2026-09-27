import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { ACESFilmicToneMapping } from 'three';
import { Atmosphere } from './Atmosphere';
import { CameraRig } from './CameraRig';
import { Clouds } from './Clouds';
import { DevRenderStats } from './DevRenderStats';
import { Earth } from './Earth';
import { emitFrame, projector } from './frameBus';
import { RegionLayer } from './regions/RegionLayer';
import { Stars } from './Stars';

/** Publishes camera + viewport to HTML overlays after the camera has moved. */
function FrameEmitter() {
  useFrame(({ camera, size }, dt) => {
    projector.camera = camera;
    projector.width = size.width;
    projector.height = size.height;
    emitFrame(dt);
  });
  return null;
}

export function Scene() {
  return (
    <Canvas
      className="scene"
      dpr={[1, 2]}
      camera={{ fov: 32, near: 0.01, far: 300, position: [0, 0, 12] }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.toneMapping = ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.1;
      }}
    >
      <Stars />
      <Suspense fallback={null}>
        <Earth />
        <Clouds />
        <Atmosphere />
        <RegionLayer />
        {/* Mounted after textures load so the intro never plays over a blank globe. */}
        <CameraRig />
      </Suspense>
      <FrameEmitter />
      {/* TEMPORARY: render-cost instrumentation for the graphics study (dev only). */}
      {import.meta.env.DEV && <DevRenderStats />}
    </Canvas>
  );
}
