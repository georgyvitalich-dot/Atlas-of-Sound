import { useEffect, useRef } from 'react';
import type { Camera } from 'three';
import { Vector3 } from 'three';

/**
 * Bridge between the 3D scene and HTML overlays.
 * Every frame (after the camera moves) the scene calls `emitFrame`, and
 * overlay components reposition their DOM nodes directly — no React renders.
 */

export interface ScreenPoint {
  x: number;
  y: number;
  /** False when the point is on the far side of the globe or off-screen. */
  visible: boolean;
}

const tmp = new Vector3();

export class Projector {
  camera!: Camera;
  width = 1;
  height = 1;

  /** Projects a point on (or near) the globe surface to CSS pixels. */
  project(p: Vector3, out: ScreenPoint = { x: 0, y: 0, visible: false }): ScreenPoint {
    tmp.copy(p).project(this.camera);
    out.x = ((tmp.x + 1) / 2) * this.width;
    out.y = ((1 - tmp.y) / 2) * this.height;
    // Facing test: is the camera above the tangent plane at p?
    const facing = p.dot(this.camera.position) - p.lengthSq() > 0;
    out.visible = facing && tmp.z < 1;
    return out;
  }
}

type FrameFn = (p: Projector, dt: number) => void;
const subscribers = new Set<FrameFn>();
export const projector = new Projector();

export function emitFrame(dt: number) {
  subscribers.forEach((fn) => fn(projector, dt));
}

/** Run `fn` every rendered frame, with access to the projector. */
export function useSceneFrame(fn: FrameFn) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => {
    const wrapped: FrameFn = (p, dt) => ref.current(p, dt);
    subscribers.add(wrapped);
    return () => void subscribers.delete(wrapped);
  }, []);
}
