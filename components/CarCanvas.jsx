"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

const EXT_POS  = new THREE.Vector3(4, 1.5, 6);
const EXT_LOOK = new THREE.Vector3(0, 0, 0);

function CameraRig() {
  return (
    <OrbitControls
      minDistance={1}
      maxDistance={50}
      maxPolarAngle={Math.PI / 1.8}
    />
  );
}

function Car({ bodyColor, wheelColor, caliperColor }) {
  const { scene } = useGLTF("/car.glb.glb");

  useEffect(() => {
    console.log("[Car] loaded, traversing...");
    scene.traverse((node) => {
      if (!node.isMesh || !node.material) return;
      const mat = node.material;
      const name = (Array.isArray(mat) ? mat[0]?.name : mat.name) || "";
      const nodeName = node.name || "";

      if (name === "livery") {
        const m = Array.isArray(mat) ? mat[0] : mat;
        m.color.set(bodyColor);
        m.metalness = 0.85;
        m.roughness = 0.18;
      } else if (name === "wheel") {
        const m = Array.isArray(mat) ? mat[0] : mat;
        m.color.set(wheelColor);
        m.metalness = 0.9;
        m.roughness = 0.1;
      } else if (name === "Misc" && nodeName.includes("CALIPER")) {
        const m = Array.isArray(mat) ? mat[0] : mat;
        m.color.set(caliperColor);
      }
    });
  }, [scene, bodyColor, wheelColor, caliperColor]);

  return <primitive object={scene} />;
}

useGLTF.preload("/car.glb.glb");

export default function CarCanvas({ bodyColor, wheelColor, caliperColor, isInterior }) {
  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      camera={{ position: [4, 1.5, 6], fov: 60 }}
    >
      <color attach="background" args={["#040d13"]} />

      <ambientLight intensity={1.5} />
      <directionalLight position={[5,  8,  6]} intensity={3} />
      <directionalLight position={[-6, 5, -4]} intensity={2} />
      <directionalLight position={[0,  2,  0]} intensity={1} />

      <gridHelper args={[20, 20, "#334", "#223"]} />

      <Suspense fallback={
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 1, 4]} />
          <meshStandardMaterial color="yellow" wireframe />
        </mesh>
      }>
        <Center>
          <Car bodyColor={bodyColor} wheelColor={wheelColor} caliperColor={caliperColor} />
        </Center>
      </Suspense>

      <CameraRig />
    </Canvas>
  );
}
