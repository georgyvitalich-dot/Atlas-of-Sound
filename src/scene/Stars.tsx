import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { BufferGeometry, Float32BufferAttribute, ShaderMaterial } from 'three';
import { ADDITIVE_PREMULTIPLIED } from './sceneState';

const COUNT = 6500;

const vertex = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = 0.65 + 0.35 * sin(uTime * (0.6 + aPhase * 1.4) + aPhase * 40.0);
    gl_PointSize = aSize * uPixelRatio;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.5, 0.0, d);
    vec3 c = vColor * core * core * vAlpha;
    gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)));
  }
`;

/** Star colours by rough stellar temperature: blue-white → white → amber. */
const PALETTE = [
  [0.72, 0.8, 1.0],
  [0.92, 0.94, 1.0],
  [1.0, 0.97, 0.9],
  [1.0, 0.86, 0.66],
];

export function Stars() {
  const { geometry, material } = useMemo(() => {
    const pos: number[] = [];
    const size: number[] = [];
    const phase: number[] = [];
    const color: number[] = [];
    for (let i = 0; i < COUNT; i++) {
      // Uniform direction on a sphere.
      const u = Math.random() * 2 - 1;
      const th = Math.random() * Math.PI * 2;
      const r = 70 + Math.random() * 30;
      const s = Math.sqrt(1 - u * u);
      pos.push(r * s * Math.cos(th), r * u, r * s * Math.sin(th));
      // Mostly tiny stars, a few bright ones.
      size.push(0.8 + Math.pow(Math.random(), 9) * 3.6);
      phase.push(Math.random());
      const c = PALETTE[Math.floor(Math.pow(Math.random(), 0.8) * PALETTE.length)];
      const b = 0.35 + Math.random() * 0.65;
      color.push(c[0] * b, c[1] * b, c[2] * b);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    g.setAttribute('aSize', new Float32BufferAttribute(size, 1));
    g.setAttribute('aPhase', new Float32BufferAttribute(phase, 1));
    g.setAttribute('aColor', new Float32BufferAttribute(color, 3));
    const m = new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: { uTime: { value: 0 }, uPixelRatio: { value: Math.min(2, window.devicePixelRatio) } },
      ...ADDITIVE_PREMULTIPLIED,
    });
    return { geometry: g, material: m };
  }, []);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return <points geometry={geometry} material={material} frustumCulled={false} />;
}
