import { CameraControls, CameraControlsImpl } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { MathUtils, Vector3 } from 'three';
import { getCountry } from '../data/registry';
import { useAtlas } from '../store/useAtlasStore';
import { useShapes } from './regions/regionShapes';
import { sceneState } from './sceneState';
import { anglesToPosition, directionAngles } from './utils/geo';

const { ACTION } = CameraControlsImpl;

const INTRO_DURATION = 4.4; // seconds — short enough to not feel like a cutscene
const INTRO_START_DISTANCE = 12;
const INTRO_SWEEP = { azimuth: 1.9, polar: 0.35 };
const REST_SMOOTH = 0.35;
const FLIGHT_SMOOTH = 0.85;
const TITLE_MS = 3000;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.6);
const introPos = new Vector3(); // reused every intro frame

function unbound(c: CameraControlsImpl) {
  c.minAzimuthAngle = -Infinity;
  c.maxAzimuthAngle = Infinity;
  c.minPolarAngle = 0;
  c.maxPolarAngle = Math.PI;
  c.minDistance = 0.05;
  c.maxDistance = 60;
}

/**
 * Owns the camera: intro fly-in, soft limits around the active country,
 * and cinematic flights to a selected region and back.
 */
export function CameraRig() {
  const ref = useRef<CameraControlsImpl>(null);
  const width = useThree((s) => s.size.width);
  const aspect = useThree((s) => s.size.width / s.size.height);
  const countryId = useAtlas((s) => s.countryId);
  const selectedId = useAtlas((s) => s.selectedRegionId);
  const shapes = useShapes((s) => s.shapes);
  const country = getCountry(countryId);

  const home = useMemo(() => {
    const { azimuth, polar } = directionAngles(...country.camera.center);
    // Portrait screens are narrow: pull back so the whole country fits.
    const portrait = aspect < 1 ? 1 + (1 - aspect) * 0.6 : 1;
    return { azimuth, polar, distance: country.camera.distance * portrait };
  }, [country, aspect]);

  const intro = useRef({ t: 0, running: true });
  /**
   * Increments on every camera transition we start. camera-controls promises
   * never reject when superseded — they resolve on the *next* rest — so every
   * `.then` must check it still owns the camera before touching its limits.
   */
  const flight = useRef(0);
  /** Where the camera was last sent: a region id, or null for the country view. */
  const flownTo = useRef<string | null>(null);
  const titleTimer = useRef<number | undefined>(undefined);

  const applyHomeBounds = (c: CameraControlsImpl) => {
    const b = country.camera.bounds;
    c.normalizeRotations();
    c.minAzimuthAngle = home.azimuth - b.west;
    c.maxAzimuthAngle = home.azimuth + b.east;
    c.minPolarAngle = home.polar - b.north;
    c.maxPolarAngle = home.polar + b.south;
    c.minDistance = 1.3;
    c.maxDistance = Math.max(4.2, home.distance * 1.3);
  };

  const showTitle = () => {
    const { setTitleVisible } = useAtlas.getState();
    setTitleVisible(true);
    window.clearTimeout(titleTimer.current);
    titleTimer.current = window.setTimeout(() => setTitleVisible(false), TITLE_MS);
  };

  const finishIntro = (skipped: boolean) => {
    const c = ref.current!;
    intro.current.running = false;
    c.enabled = true;
    useAtlas.getState().setPhase('globe');
    if (skipped) {
      const token = ++flight.current;
      const p = anglesToPosition(home.azimuth, home.polar, home.distance);
      c.smoothTime = 0.6;
      c.setLookAt(p.x, p.y, p.z, 0, 0, 0, true).then(() => {
        if (token !== flight.current) return; // a region was picked mid-transition
        c.smoothTime = REST_SMOOTH;
        applyHomeBounds(c);
      });
      showTitle();
    } else {
      applyHomeBounds(c);
    }
  };

  // Controls setup + intro starting pose.
  useEffect(() => {
    const c = ref.current!;
    c.mouseButtons.left = ACTION.ROTATE;
    c.mouseButtons.right = ACTION.NONE;
    c.mouseButtons.middle = ACTION.NONE;
    c.mouseButtons.wheel = ACTION.DOLLY;
    c.touches.one = ACTION.TOUCH_ROTATE;
    c.touches.two = ACTION.TOUCH_DOLLY;
    c.touches.three = ACTION.NONE;
    c.dollyToCursor = false;
    c.dollySpeed = 0.5;
    c.smoothTime = REST_SMOOTH;
    c.draggingSmoothTime = 0.16;
    c.enabled = false;
    unbound(c);
    const p = anglesToPosition(
      home.azimuth + INTRO_SWEEP.azimuth,
      home.polar + INTRO_SWEEP.polar,
      INTRO_START_DISTANCE,
    );
    c.setLookAt(p.x, p.y, p.z, 0, 0, 0, false);
    useAtlas.setState({ sceneReady: true });

    // Any input skips the intro.
    const skip = () => {
      if (intro.current.running && intro.current.t < INTRO_DURATION * 0.85) finishIntro(true);
    };
    window.addEventListener('pointerdown', skip);
    window.addEventListener('wheel', skip);
    window.addEventListener('keydown', skip);
    return () => {
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('keydown', skip);
      window.clearTimeout(titleTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intro animation + per-frame tuning. Runs before the controls update (-1).
  useFrame((_, dt) => {
    const c = ref.current;
    if (!c) return;
    const it = intro.current;

    if (it.running) {
      it.t += Math.min(dt, 1 / 30);
      const k = MathUtils.clamp(it.t / INTRO_DURATION, 0, 1);
      const e = easeInOutCubic(k);
      const az = MathUtils.lerp(home.azimuth + INTRO_SWEEP.azimuth, home.azimuth, e);
      const po = MathUtils.lerp(home.polar + INTRO_SWEEP.polar, home.polar, e);
      const dist = MathUtils.lerp(INTRO_START_DISTANCE, home.distance, easeOut(k));
      const p = anglesToPosition(az, po, dist, introPos);
      c.setLookAt(p.x, p.y, p.z, 0, 0, 0, false);
      sceneState.reveal = MathUtils.smoothstep(k, 0.1, 0.65);
      if (k > 0.78 && !useAtlas.getState().titleVisible && titleTimer.current === undefined) showTitle();
      if (k >= 1) finishIntro(false);
    } else {
      sceneState.reveal = MathUtils.damp(sceneState.reveal, 1, 3, dt);
    }

    sceneState.distance = c.distance;
    // Rotating around the globe center feels too fast up close — scale it.
    const exploring = useAtlas.getState().phase === 'explore';
    const speed = exploring ? 0.3 : MathUtils.clamp((c.distance - 1) / 1.7, 0.12, 1);
    c.azimuthRotateSpeed = speed;
    c.polarRotateSpeed = speed;
  }, -2);

  // Fly to the selected region, or back home.
  useEffect(() => {
    const c = ref.current;
    if (!c || !shapes || intro.current.running) return;
    // Only fly when the target actually changes — e.g. shapes finishing
    // loading after the intro must not yank the camera back home.
    if (selectedId === flownTo.current) return;
    const s = selectedId ? shapes.byId.get(selectedId) : undefined;
    if (selectedId && !s) return;
    flownTo.current = selectedId;
    const token = ++flight.current;
    unbound(c);
    c.smoothTime = FLIGHT_SMOOTH;
    const wide = width > 900;

    if (s) {
      const up = s.anchorVec.clone().normalize();
      const north = new Vector3(0, 1, 0).addScaledVector(up, -up.y).normalize();
      const d = MathUtils.clamp(s.angularRadius * 4.2, 0.22, 1.1);
      // Look at the state from a little south, tilted like a drone shot.
      const tilt = 0.6;
      const dir = up.clone().multiplyScalar(Math.cos(tilt)).addScaledVector(north, -Math.sin(tilt));
      const pos = up.clone().addScaledVector(dir, d);
      // On narrow screens the cards sit at the bottom — lift the state above them.
      c.setFocalOffset(0, wide ? 0 : d * 0.11, 0, true);
      c.setLookAt(pos.x, pos.y, pos.z, up.x, up.y, up.z, true).then(() => {
        if (token !== flight.current) return;
        c.smoothTime = REST_SMOOTH;
        c.normalizeRotations();
        const az = c.azimuthAngle;
        const po = c.polarAngle;
        c.minAzimuthAngle = az - 0.6;
        c.maxAzimuthAngle = az + 0.6;
        c.minPolarAngle = Math.max(0.05, po - 0.4);
        c.maxPolarAngle = po + 0.2;
        c.minDistance = d * 0.55;
        c.maxDistance = d * 1.8;
      });
    } else {
      const p = anglesToPosition(home.azimuth, home.polar, home.distance);
      c.setFocalOffset(0, 0, 0, true);
      c.setLookAt(p.x, p.y, p.z, 0, 0, 0, true).then(() => {
        if (token !== flight.current) return;
        c.smoothTime = REST_SMOOTH;
        applyHomeBounds(c);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, shapes]);

  return <CameraControls ref={ref} makeDefault />;
}
