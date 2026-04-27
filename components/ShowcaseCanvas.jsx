"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SPACING = 14;

function Particles({ count }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    const w   = count * SPACING + 20;
    for (let i = 0; i < 5000; i++) {
      arr[i * 3]     = (Math.random() - 0.1) * w;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = -4 - Math.random() * 12;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 0.006;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.032} color="#35d0ff" transparent opacity={0.38} depthWrite={false} sizeAttenuation />
    </points>
  );
}

function CameraRig({ current }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 7));

  useEffect(() => {
    target.current.set(current * SPACING, 0, 7);
  }, [current]);

  useFrame(() => {
    camera.position.lerp(target.current, 0.06);
    camera.lookAt(camera.position.x, 0, 0);
  });

  return null;
}

export default function ShowcaseCanvas({ current, slideCount }) {
  return (
    <Canvas
      style={{ position: "fixed", inset: 0 }}
      camera={{ position: [0, 0, 7], fov: 60 }}
    >
      <color attach="background" args={["#040d13"]} />
      <Particles count={slideCount} />
      <CameraRig current={current} />
    </Canvas>
  );
}
