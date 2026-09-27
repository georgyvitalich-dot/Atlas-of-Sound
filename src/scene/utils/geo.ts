import { Vector3 } from 'three';
import type { LonLat } from '../../data/types';

const DEG = Math.PI / 180;

/**
 * Converts lon/lat to a point on a sphere, matching the UV layout of
 * THREE.SphereGeometry so equirectangular textures line up with the data.
 * (lon 0 → +X, lon 90°E → −Z, north pole → +Y)
 */
export function lonLatToVec3(lon: number, lat: number, radius = 1, out = new Vector3()) {
  const phi = (lon + 180) * DEG;
  const cosLat = Math.cos(lat * DEG);
  return out.set(
    -Math.cos(phi) * cosLat * radius,
    Math.sin(lat * DEG) * radius,
    Math.sin(phi) * cosLat * radius,
  );
}

export function vec3ToLonLat(v: Vector3): LonLat {
  const n = v.clone().normalize();
  const lat = Math.asin(n.y) / DEG;
  let lon = Math.atan2(n.z, -n.x) / DEG - 180;
  if (lon < -180) lon += 360;
  return [lon, lat];
}

/** CameraControls-style spherical angles (azimuth around +Y from +Z, polar from +Y). */
export function directionAngles(lon: number, lat: number) {
  const v = lonLatToVec3(lon, lat);
  return { azimuth: Math.atan2(v.x, v.z), polar: Math.acos(v.y) };
}

export function anglesToPosition(azimuth: number, polar: number, radius: number, out = new Vector3()) {
  return out.set(
    radius * Math.sin(polar) * Math.sin(azimuth),
    radius * Math.cos(polar),
    radius * Math.sin(polar) * Math.cos(azimuth),
  );
}
