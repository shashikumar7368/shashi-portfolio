
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function PlanetSphere() {
  const planetRef = useRef();

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.25;
      planetRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#4935a8"
        metalness={0.7}
        roughness={0.3}
        emissive="#25105c"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

function PlanetScene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <pointLight
        position={[4, 3, 4]}
        intensity={35}
        color="#38bdf8"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={25}
        color="#9333ea"
      />

      <PlanetSphere />

      <Stars
        radius={80}
        depth={50}
        count={1800}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </>
  );
}

export default function Planet() {
  return (
    <div className="planet-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <PlanetScene />
      </Canvas>
    </div>
  );
}
