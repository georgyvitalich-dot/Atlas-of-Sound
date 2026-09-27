import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { MathUtils, type Mesh, ShaderMaterial } from 'three';
import { useAtlas } from '../store/useAtlasStore';
import { SUN_DIR, sceneState } from './sceneState';

const vertex = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragment = /* glsl */ `
  uniform sampler2D uClouds;
  uniform vec3 uSunDir;
  uniform float uOpacity;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vec3 n = normalize(vNormalW);
    vec3 v = normalize(cameraPosition - vPosW);
    float ndl = dot(n, uSunDir);
    float density = smoothstep(0.12, 0.85, texture2D(uClouds, vUv).r);
    float light = smoothstep(-0.15, 0.45, ndl);
    vec3 col = mix(vec3(0.05, 0.06, 0.1), vec3(0.86, 0.83, 0.78), light);
    col = mix(col, vec3(1.0, 0.7, 0.45), exp(-pow(ndl * 4.0, 2.0)) * 0.5);
    // Thin out towards the limb so the halo reads cleanly.
    float edge = smoothstep(0.0, 0.35, dot(n, v));
    float a = density * uOpacity * (0.25 + 0.75 * light) * edge;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }
`;

export function Clouds() {
  const ref = useRef<Mesh>(null);
  const tex = useTexture('/textures/clouds.jpg');

  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        uniforms: { uClouds: { value: tex }, uSunDir: { value: SUN_DIR }, uOpacity: { value: 0 } },
        transparent: true,
        depthWrite: false,
      }),
    [tex],
  );

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.0035;
    // Clouds fade as the camera approaches so they never hide the map.
    const exploring = useAtlas.getState().phase === 'explore';
    const byDistance = MathUtils.smoothstep(sceneState.distance, 2.2, 7);
    const target = (exploring ? 0.05 : 0.1 + 0.45 * byDistance) * sceneState.reveal;
    const u = material.uniforms.uOpacity;
    u.value = MathUtils.damp(u.value, target, 3, dt);
  });

  return (
    <mesh ref={ref} material={material} renderOrder={2}>
      <sphereGeometry args={[1.008, 96, 64]} />
    </mesh>
  );
}
