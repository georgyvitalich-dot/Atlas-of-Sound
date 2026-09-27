import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { BackSide, ShaderMaterial } from 'three';
import { ADDITIVE_PREMULTIPLIED, SUN_DIR, sceneState } from './sceneState';

const OUTER = 1.13;

/**
 * Outer halo. Rendered on the back faces of a slightly larger sphere; the
 * glow is computed from how close each view ray passes to the planet, which
 * gives a soft, physically-plausible falloff without post-processing.
 */
const vertex = /* glsl */ `
  varying vec3 vPosW;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uSunDir;
  uniform float uReveal;
  varying vec3 vPosW;
  void main() {
    vec3 d = normalize(vPosW - cameraPosition);
    float t = -dot(cameraPosition, d);
    vec3 closest = cameraPosition + d * t;
    float h = length(closest);
    float a = clamp((${OUTER.toFixed(3)} - h) / (${OUTER.toFixed(3)} - 1.0), 0.0, 1.0);
    float glow = pow(a, 3.2);

    float sun = dot(normalize(closest), uSunDir);
    float lit = smoothstep(-0.45, 0.55, sun);
    vec3 blue = vec3(0.32, 0.58, 1.0);
    vec3 amber = vec3(1.0, 0.66, 0.36);
    vec3 col = mix(blue, amber, smoothstep(0.1, -0.25, sun) * 0.9 + 0.12);

    float intensity = glow * (0.12 + 1.1 * lit) * uReveal;
    // Premultiplied output so the glow also works over the transparent canvas.
    gl_FragColor = vec4(col * intensity, clamp(intensity, 0.0, 1.0));
  }
`;

export function Atmosphere() {
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        uniforms: { uSunDir: { value: SUN_DIR }, uReveal: { value: 0 } },
        side: BackSide,
        ...ADDITIVE_PREMULTIPLIED,
      }),
    [],
  );

  useFrame(() => {
    material.uniforms.uReveal.value = sceneState.reveal;
  });

  return (
    <mesh material={material} renderOrder={3}>
      <sphereGeometry args={[OUTER, 96, 64]} />
    </mesh>
  );
}
