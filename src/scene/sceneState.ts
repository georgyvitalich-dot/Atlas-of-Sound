import { AddEquation, CustomBlending, OneFactor, Vector3 } from 'three';
import { lonLatToVec3 } from './utils/geo';

/**
 * Additive blending that also accumulates alpha. The canvas is transparent
 * (the CSS gradient shows through), so glows must write alpha too — otherwise
 * they punch dark holes in the background.
 */
export const ADDITIVE_PREMULTIPLIED = {
  blending: CustomBlending,
  blendEquation: AddEquation,
  blendSrc: OneFactor,
  blendDst: OneFactor,
  blendSrcAlpha: OneFactor,
  blendDstAlpha: OneFactor,
  transparent: true,
  depthWrite: false,
} as const;

/**
 * Mutable per-frame values shared between scene components.
 * Kept outside React on purpose: they change every frame.
 */
export const sceneState = {
  /** 0 → 1 while the intro reveals the atmosphere and clouds. */
  reveal: 0,
  /** Current camera distance from the globe center. */
  distance: 12,
};

/** Warm late-afternoon sun over the Pacific: the US is lit, dusk falls over the Atlantic. */
export const SUN_DIR: Vector3 = lonLatToVec3(-150, 18).normalize();
